package com.schengen.calculator.data.repository

import app.cash.sqldelight.coroutines.asFlow
import app.cash.sqldelight.coroutines.mapToList
import app.cash.sqldelight.coroutines.mapToOne
import app.cash.sqldelight.coroutines.mapToOneOrNull
import com.schengen.calculator.data.db.SchengenDatabase
import com.schengen.calculator.data.db.Stay
import com.schengen.calculator.domain.model.SchengenStay
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.withContext
import java.time.Instant
import java.time.LocalDate

/**
 * Repository for managing Schengen stays in the database
 */
class StayRepository(
    private val database: SchengenDatabase
) {
    private val queries = database.stayQueries

    /**
     * Get all stays as a Flow
     */
    fun getAllStaysFlow(): Flow<List<SchengenStay>> {
        return queries.getAllStays()
            .asFlow()
            .mapToList(Dispatchers.IO)
            .map { stays -> stays.map { it.toDomain() } }
    }

    /**
     * Get all stays (one-time)
     */
    suspend fun getAllStays(): List<SchengenStay> = withContext(Dispatchers.IO) {
        queries.getAllStays().executeAsList().map { it.toDomain() }
    }

    /**
     * Get stays within a date range
     */
    suspend fun getStaysInRange(
        startDate: LocalDate,
        endDate: LocalDate
    ): List<SchengenStay> = withContext(Dispatchers.IO) {
        queries.getStaysInRange(
            startDate = startDate.toString(),
            endDate = endDate.toString()
        ).executeAsList().map { it.toDomain() }
    }

    /**
     * Get ongoing stay if exists
     */
    suspend fun getOngoingStay(): SchengenStay? = withContext(Dispatchers.IO) {
        queries.getOngoingStay().executeAsOneOrNull()?.toDomain()
    }

    /**
     * Check if there's an ongoing stay
     */
    suspend fun hasOngoingStay(): Boolean = withContext(Dispatchers.IO) {
        queries.hasOngoingStay().executeAsOne()
    }

    /**
     * Insert a new stay
     */
    suspend fun insertStay(stay: SchengenStay): Long = withContext(Dispatchers.IO) {
        val now = Instant.now().toEpochMilli()
        queries.insertStay(
            entryDate = stay.entryDate.toString(),
            exitDate = stay.exitDate?.toString(),
            isOngoing = stay.isOngoing,
            notes = stay.notes,
            createdAt = now,
            updatedAt = now
        )
        queries.getAllStays().executeAsList().last().id
    }

    /**
     * Update an existing stay
     */
    suspend fun updateStay(stay: SchengenStay) = withContext(Dispatchers.IO) {
        queries.updateStay(
            id = stay.id,
            entryDate = stay.entryDate.toString(),
            exitDate = stay.exitDate?.toString(),
            isOngoing = stay.isOngoing,
            notes = stay.notes,
            updatedAt = Instant.now().toEpochMilli()
        )
    }

    /**
     * Complete an ongoing stay with an exit date
     */
    suspend fun completeOngoingStay(exitDate: LocalDate) = withContext(Dispatchers.IO) {
        queries.completeOngoingStay(
            exitDate = exitDate.toString(),
            updatedAt = Instant.now().toEpochMilli()
        )
    }

    /**
     * Delete a stay by ID
     */
    suspend fun deleteStay(id: Long) = withContext(Dispatchers.IO) {
        queries.deleteStay(id)
    }

    /**
     * Delete all stays
     */
    suspend fun deleteAllStays() = withContext(Dispatchers.IO) {
        queries.deleteAllStays()
    }

    /**
     * Get stay by ID
     */
    suspend fun getStayById(id: Long): SchengenStay? = withContext(Dispatchers.IO) {
        queries.getStayById(id).executeAsOneOrNull()?.toDomain()
    }

    /**
     * Count total stays
     */
    suspend fun countStays(): Long = withContext(Dispatchers.IO) {
        queries.countStays().executeAsOne()
    }

    /**
     * Convert database Stay to domain SchengenStay
     */
    private fun Stay.toDomain(): SchengenStay {
        return SchengenStay(
            id = id,
            entryDate = LocalDate.parse(entryDate),
            exitDate = exitDate?.let { LocalDate.parse(it) },
            isOngoing = isOngoing,
            notes = notes ?: ""
        )
    }
}
