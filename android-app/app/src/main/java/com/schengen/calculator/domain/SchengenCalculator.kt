package com.schengen.calculator.domain

import com.schengen.calculator.domain.model.CalculationResult
import com.schengen.calculator.domain.model.SchengenStay
import java.time.LocalDate

/**
 * Core business logic for Schengen 90/180 day rule calculations
 */
class SchengenCalculator {

    /**
     * Calculate the Schengen status for a specific reference date
     * 
     * The 90/180 rule: A third-country national may stay for a maximum of 90 days
     * within any 180-day period in the Schengen area.
     */
    fun calculate(
        stays: List<SchengenStay>,
        referenceDate: LocalDate = LocalDate.now()
    ): CalculationResult {
        // 180-day window: from (referenceDate - 179 days) to referenceDate
        val windowStart = referenceDate.minusDays(179)
        
        // Filter stays that overlap with the 180-day window
        val staysInWindow = stays.filter { stay ->
            stay.isWithinWindow(referenceDate)
        }.sortedBy { it.entryDate }

        // Calculate total days used in the window
        val daysUsed = calculateDaysInWindow(staysInWindow, windowStart, referenceDate)
        
        // Calculate remaining days (max 90)
        val daysRemaining = (CalculationResult.MAX_DAYS - daysUsed).coerceAtLeast(0)
        
        // Check for overstay
        val isOverstay = daysUsed > CalculationResult.MAX_DAYS
        val overstayDays = if (isOverstay) daysUsed - CalculationResult.MAX_DAYS else 0
        
        // Calculate next possible entry date
        val nextEntryDate = if (daysRemaining > 0) {
            referenceDate.plusDays(1)
        } else {
            calculateNextEntryDate(stays, referenceDate)
        }
        
        // Calculate earliest exit date if currently over limit
        val earliestExitDate = if (isOverstay && stays.any { it.isOngoing }) {
            referenceDate.plusDays(overstayDays.toLong())
        } else null

        return CalculationResult(
            referenceDate = referenceDate,
            windowStart = windowStart,
            daysUsed = daysUsed,
            daysRemaining = daysRemaining,
            isOverstay = isOverstay,
            overstayDays = overstayDays,
            nextEntryDate = nextEntryDate,
            staysInWindow = staysInWindow,
            earliestExitDate = earliestExitDate
        )
    }

    /**
     * Calculate total days spent in the Schengen area within the given window
     */
    private fun calculateDaysInWindow(
        stays: List<SchengenStay>,
        windowStart: LocalDate,
        windowEnd: LocalDate
    ): Int {
        var totalDays = 0
        
        for (stay in stays) {
            // Determine the effective entry and exit dates within the window
            val effectiveEntry = if (stay.entryDate < windowStart) windowStart else stay.entryDate
            val effectiveExit = when {
                stay.exitDate == null -> windowEnd  // Ongoing stay
                stay.exitDate > windowEnd -> windowEnd
                else -> stay.exitDate
            }
            
            // Calculate days for this stay within the window
            if (effectiveEntry <= effectiveExit) {
                val days = java.time.temporal.ChronoUnit.DAYS.between(effectiveEntry, effectiveExit).toInt() + 1
                totalDays += days
            }
        }
        
        return totalDays
    }

    /**
     * Calculate the next date when entry is possible for desired duration
     */
    fun calculateNextEntryDate(
        stays: List<SchengenStay>,
        fromDate: LocalDate = LocalDate.now(),
        desiredDays: Int = 1
    ): LocalDate? {
        // Start checking from the next day
        var checkDate = fromDate.plusDays(1)
        val maxCheckDays = 365 // Don't check more than a year ahead
        
        repeat(maxCheckDays) {
            val result = calculate(stays, checkDate)
            if (result.daysRemaining >= desiredDays) {
                return checkDate
            }
            checkDate = checkDate.plusDays(1)
        }
        
        // If no date found within a year, return null
        return null
    }

    /**
     * Plan a stay: find the earliest entry date for a desired duration
     */
    fun planStay(
        stays: List<SchengenStay>,
        desiredDays: Int,
        earliestEntry: LocalDate = LocalDate.now()
    ): PlanningResult {
        // Check if we can enter on the earliest date
        val currentResult = calculate(stays, earliestEntry)
        
        if (currentResult.daysRemaining >= desiredDays) {
            return PlanningResult(
                isPossible = true,
                entryDate = earliestEntry,
                exitDate = earliestEntry.plusDays(desiredDays.toLong() - 1),
                daysAvailable = currentResult.daysRemaining,
                waitDays = 0
            )
        }
        
        // Find next suitable entry date
        val nextEntry = calculateNextEntryDate(stays, earliestEntry, desiredDays)
        
        return if (nextEntry != null) {
            val waitDays = java.time.temporal.ChronoUnit.DAYS.between(earliestEntry, nextEntry).toInt()
            PlanningResult(
                isPossible = true,
                entryDate = nextEntry,
                exitDate = nextEntry.plusDays(desiredDays.toLong() - 1),
                daysAvailable = desiredDays,
                waitDays = waitDays
            )
        } else {
            PlanningResult(
                isPossible = false,
                entryDate = null,
                exitDate = null,
                daysAvailable = currentResult.daysRemaining,
                waitDays = -1
            )
        }
    }

    /**
     * Result of stay planning calculation
     */
    data class PlanningResult(
        val isPossible: Boolean,
        val entryDate: LocalDate?,
        val exitDate: LocalDate?,
        val daysAvailable: Int,
        val waitDays: Int
    )
}
