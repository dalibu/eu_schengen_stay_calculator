package com.schengen.calculator.domain.model

import java.time.LocalDate

/**
 * Domain model representing a stay in the Schengen area
 */
data class SchengenStay(
    val id: Long = 0,
    val entryDate: LocalDate,
    val exitDate: LocalDate? = null,
    val isOngoing: Boolean = false,
    val notes: String = ""
) {
    /**
     * Calculate the number of days for this stay
     * For ongoing stays, calculate from entry to today
     */
    fun calculateDays(referenceDate: LocalDate = LocalDate.now()): Int {
        val endDate = if (isOngoing) {
            referenceDate
        } else {
            exitDate ?: return 0
        }
        
        // Schengen counts both entry and exit days
        return java.time.temporal.ChronoUnit.DAYS.between(entryDate, endDate).toInt() + 1
    }

    /**
     * Check if this stay overlaps with the given date range
     */
    fun overlaps(start: LocalDate, end: LocalDate): Boolean {
        val stayEnd = exitDate ?: LocalDate.now()
        return !(entryDate > end || stayEnd < start)
    }

    /**
     * Check if this stay is within the 180-day window from reference date
     */
    fun isWithinWindow(referenceDate: LocalDate): Boolean {
        val windowStart = referenceDate.minusDays(179) // 180 days including reference date
        val stayEnd = exitDate ?: LocalDate.now()
        return overlaps(windowStart, referenceDate)
    }
}
