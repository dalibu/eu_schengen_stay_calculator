package com.schengen.calculator.domain.model

import java.time.LocalDate

/**
 * Result of Schengen calculation for a specific reference date
 */
data class CalculationResult(
    val referenceDate: LocalDate,
    val windowStart: LocalDate,
    val daysUsed: Int,
    val daysRemaining: Int,
    val isOverstay: Boolean,
    val overstayDays: Int,
    val nextEntryDate: LocalDate?,
    val staysInWindow: List<SchengenStay>,
    val earliestExitDate: LocalDate?
) {
    companion object {
        const val MAX_DAYS = 90
        const val WINDOW_DAYS = 180
    }

    /**
     * Calculate percentage of 90-day limit used
     */
    fun limitUsedPercent(): Float {
        return (daysUsed.toFloat() / MAX_DAYS * 100).coerceIn(0f, 100f)
    }

    /**
     * Get status message based on usage
     */
    fun getStatusMessage(): String {
        return when {
            isOverstay -> "⚠️ Overstay: $overstayDays days over limit"
            daysRemaining == 0 -> "⚠️ Limit reached - must leave today"
            daysRemaining <= 7 -> "⚠️ Only $daysRemaining days remaining"
            daysRemaining <= 30 -> "✅ $daysRemaining days remaining"
            else -> "✅ $daysRemaining days available"
        }
    }

    /**
     * Get color based on status (Material 3 color tokens)
     */
    fun getStatusColor(): String {
        return when {
            isOverstay -> "error"
            daysRemaining == 0 -> "error"
            daysRemaining <= 7 -> "warning"
            daysRemaining <= 30 -> "primary"
            else -> "success"
        }
    }
}
