package com.schengen.calculator.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.schengen.calculator.data.repository.StayRepository
import com.schengen.calculator.domain.SchengenCalculator
import com.schengen.calculator.domain.model.CalculationResult
import com.schengen.calculator.domain.model.SchengenStay
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import java.time.LocalDate

/**
 * ViewModel for the home screen showing calculation results
 */
class HomeViewModel(
    private val repository: StayRepository,
    private val calculator: SchengenCalculator = SchengenCalculator()
) : ViewModel() {

    // State flows
    private val _referenceDate = MutableStateFlow(LocalDate.now())
    val referenceDate: StateFlow<LocalDate> = _referenceDate.asStateFlow()

    private val _stays = repository.getAllStaysFlow()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    private val _calculationResult = MutableStateFlow<CalculationResult?>(null)
    val calculationResult: StateFlow<CalculationResult?> = _calculationResult.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    init {
        // Recalculate whenever stays or reference date changes
        viewModelScope.launch {
            combine(_stays, _referenceDate) { stays, refDate ->
                Pair(stays, refDate)
            }.collectLatest { (stays, refDate) ->
                calculate(stays, refDate)
            }
        }
    }

    /**
     * Set new reference date and recalculate
     */
    fun setReferenceDate(date: LocalDate) {
        _referenceDate.value = date
    }

    /**
     * Set reference date to today
     */
    fun setToday() {
        _referenceDate.value = LocalDate.now()
    }

    /**
     * Perform calculation
     */
    private fun calculate(stays: List<SchengenStay>, referenceDate: LocalDate) {
        _isLoading.value = true
        try {
            val result = calculator.calculate(stays, referenceDate)
            _calculationResult.value = result
        } finally {
            _isLoading.value = false
        }
    }

    /**
     * Get all stays
     */
    val stays: StateFlow<List<SchengenStay>> = _stays

    /**
     * Get summary statistics
     */
    val summaryStats: StateFlow<SummaryStats> = _stays.map { stays ->
        val totalStays = stays.size
        val totalDays = stays.sumOf { it.calculateDays() }
        val ongoingStay = stays.firstOrNull { it.isOngoing }
        SummaryStats(totalStays, totalDays, ongoingStay)
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), SummaryStats(0, 0, null))
}

/**
 * Summary statistics for the stays list
 */
data class SummaryStats(
    val totalStays: Int,
    val totalDays: Int,
    val ongoingStay: SchengenStay?
)
