package com.schengen.calculator

import android.app.Application
import android.app.NotificationChannel
import android.app.NotificationManager
import android.os.Build
import app.cash.sqldelight.driver.android.AndroidSqliteDriver
import com.schengen.calculator.data.db.SchengenDatabase
import com.schengen.calculator.data.repository.StayRepository

class SchengenApplication : Application() {

    // Database
    lateinit var database: SchengenDatabase
        private set

    // Repository
    lateinit var stayRepository: StayRepository
        private set

    override fun onCreate() {
        super.onCreate()
        
        // Initialize database
        val driver = AndroidSqliteDriver(
            schema = SchengenDatabase.Schema,
            context = this,
            name = "schengen.db"
        )
        database = SchengenDatabase(driver)
        
        // Initialize repository
        stayRepository = StayRepository(database)
        
        // Create notification channel
        createNotificationChannel()
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = getString(R.string.notification_channel_name)
            val descriptionText = getString(R.string.notification_channel_description)
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(NOTIFICATION_CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }
            
            val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    companion object {
        const val NOTIFICATION_CHANNEL_ID = "schengen_reminders"
    }
}
