package com.schengen.calculator.ui.home

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.schengen.calculator.R
import com.schengen.calculator.domain.model.CalculationResult
import com.schengen.calculator.ui.components.DatePickerField
import com.schengen.calculator.ui.components.InfoCard
import com.schengen.calculator.ui.components.ResultCard
import com.schengen.calculator.ui.components.ProgressIndicator
import java.time.LocalDate
import java.time.format.DateTimeFormatter

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    viewModel: HomeViewModel,
    onNavigateToStays: () -> Unit,
    modifier: Modifier = Modifier
) {
    val referenceDate by viewModel.referenceDate.collectAsState()
    val calculationResult by viewModel.calculationResult.collectAsState()
    val summaryStats by viewModel.summaryStats.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(stringResource(R.string.home_title)) },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.onPrimaryContainer
                )
            )
        },
        floatingActionButton = {
            ExtendedFloatingActionButton(
                onClick = onNavigateToStays,
                icon = { Icon(Icons.Default.Add, contentDescription = null) },
                text = { Text(stringResource(R.string.add_stay_title)) }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Info Card
            InfoCard(
                title = stringResource(R.string.info_title),
                message = stringResource(R.string.info_text)
            )

            // Reference Date Card
            ReferenceDateCard(
                referenceDate = referenceDate,
                onDateChange = { viewModel.setReferenceDate(it) },
                onSetToday = { viewModel.setToday() }
            )

            // Loading indicator
            if (isLoading) {
                LinearProgressIndicator(
                    modifier = Modifier.fillMaxWidth()
                )
            }

            // Results
            calculationResult?.let { result ->
                ResultsCard(result = result)
                
                // Overstay warning
                if (result.isOverstay) {
                    OverstayWarningCard(result = result)
                }
            }

            // Summary Statistics
            SummaryCard(summaryStats = summaryStats)
        }
    }
}

@Composable
private fun ReferenceDateCard(
    referenceDate: LocalDate,
    onDateChange: (LocalDate) -> Unit,
    onSetToday: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Icon(
                    Icons.Default.CalendarToday,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = stringResource(R.string.reference_date),
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )
            }

            DatePickerField(
                date = referenceDate,
                onDateChange = onDateChange,
                label = stringResource(R.string.reference_date_hint)
            )

            Button(
                onClick = onSetToday,
                modifier = Modifier.fillMaxWidth()
            ) {
                Icon(Icons.Default.Today, contentDescription = null)
                Spacer(Modifier.width(8.dp))
                Text(stringResource(R.string.set_today))
            }
        }
    }
}

@Composable
private fun ResultsCard(
    result: CalculationResult,
    modifier: Modifier = Modifier
) {
    val dateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy")
    val progress by animateFloatAsState(
        targetValue = result.limitUsedPercent() / 100f,
        label = "progress"
    )

    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = when {
                result.isOverstay -> MaterialTheme.colorScheme.errorContainer
                result.daysRemaining <= 7 -> MaterialTheme.colorScheme.tertiaryContainer
                else -> MaterialTheme.colorScheme.secondaryContainer
            }
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Icon(
                    Icons.Default.Assessment,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = stringResource(R.string.results_title),
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold
                )
            }

            // Progress Bar
            ProgressIndicator(
                progress = progress,
                daysUsed = result.daysUsed,
                daysRemaining = result.daysRemaining,
                isOverstay = result.isOverstay
            )

            Divider()

            // Days Used
            ResultRow(
                label = stringResource(R.string.days_used),
                value = stringResource(R.string.days_used_detail, result.daysUsed),
                icon = Icons.Default.TimelapseOutlined
            )

            // Days Remaining
            ResultRow(
                label = stringResource(R.string.days_remaining),
                value = stringResource(R.string.days_remaining_detail, result.daysRemaining),
                icon = Icons.Default.Event
            )

            // Window Period
            ResultRow(
                label = stringResource(R.string.window_period),
                value = stringResource(
                    R.string.window_dates,
                    result.windowStart.format(dateFormatter),
                    result.referenceDate.format(dateFormatter)
                ),
                icon = Icons.Default.DateRange
            )

            // Next Entry Date
            result.nextEntryDate?.let { nextEntry ->
                ResultRow(
                    label = stringResource(R.string.next_entry_date),
                    value = if (nextEntry <= LocalDate.now().plusDays(1)) {
                        stringResource(R.string.immediate_entry)
                    } else {
                        stringResource(R.string.next_entry_on, nextEntry.format(dateFormatter))
                    },
                    icon = Icons.Default.FlightTakeoff
                )
            }
        }
    }
}

@Composable
private fun ResultRow(
    label: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier.weight(1f)
        ) {
            Icon(
                icon,
                contentDescription = null,
                modifier = Modifier.size(20.dp),
                tint = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = label,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
        Text(
            text = value,
            style = MaterialTheme.typography.bodyLarge,
            fontWeight = FontWeight.Bold
        )
    }
}

@Composable
private fun OverstayWarningCard(
    result: CalculationResult,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.errorContainer
        ),
        border = CardDefaults.outlinedCardBorder().copy(
            width = 2.dp
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = stringResource(R.string.overstay_title),
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.error
            )
            Text(
                text = stringResource(R.string.overstay_message),
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onErrorContainer
            )
            Text(
                text = stringResource(R.string.overstay_days, result.overstayDays),
                style = MaterialTheme.typography.bodyLarge,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.error
            )
        }
    }
}

@Composable
private fun SummaryCard(
    summaryStats: SummaryStats,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(
                text = stringResource(R.string.stays_list_title),
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                StatItem(
                    label = stringResource(R.string.total_stays, summaryStats.totalStays),
                    icon = Icons.Default.Flight
                )
                StatItem(
                    label = stringResource(R.string.total_days, summaryStats.totalDays),
                    icon = Icons.Default.CalendarMonth
                )
            }

            summaryStats.ongoingStay?.let {
                Divider()
                Text(
                    text = stringResource(R.string.ongoing_badge),
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.tertiary
                )
            }
        }
    }
}

@Composable
private fun StatItem(
    label: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        modifier = modifier
    ) {
        Icon(
            icon,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary
        )
        Text(
            text = label,
            style = MaterialTheme.typography.bodyMedium
        )
    }
}
