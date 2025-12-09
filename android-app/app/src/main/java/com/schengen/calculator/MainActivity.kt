package com.schengen.calculator

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.schengen.calculator.ui.home.HomeScreen
import com.schengen.calculator.ui.home.HomeViewModel
import com.schengen.calculator.ui.theme.SchengenCalculatorTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        
        setContent {
            SchengenCalculatorTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    SchengenApp()
                }
            }
        }
    }
}

@Composable
fun SchengenApp() {
    val navController = rememberNavController()
    val application = androidx.compose.ui.platform.LocalContext.current.applicationContext as SchengenApplication
    
    NavHost(
        navController = navController,
        startDestination = "home"
    ) {
        composable("home") {
            val viewModel: HomeViewModel = viewModel(
                factory = HomeViewModelFactory(application.stayRepository)
            )
            HomeScreen(
                viewModel = viewModel,
                onNavigateToStays = {
                    // TODO: Navigate to stays screen
                }
            )
        }
        
        // TODO: Add other screens (stays, calendar, planning, settings)
    }
}
