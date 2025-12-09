// English translations
const en = {
    // General
    title: "🇪🇺 Schengen Stay Calculator",
    infoTitle: "ℹ️ Schengen Rule (90/180-Day Rule)",
    infoText: "Third-country nationals may stay for a maximum of <strong>90 days</strong> within a <strong>rolling 180-day period</strong> in the Schengen area. This means: On any given day, it is checked how many days you have spent in the Schengen area in the past 180 days. This number must not exceed 90.",

    // Reference Date
    referenceDateTitle: "📅 Reference Date",
    referenceDateLabel: "Calculation date (default: today)",
    btnToday: "Today",
    btnCalculate: "Calculate",

    // Add Stay
    addStayTitle: "✈️ Add Stay",
    entryDateLabel: "Entry date",
    exitDateLabel: "Exit date",
    btnAddStay: "Add stay",

    // Stays List
    staysListTitle: "📋 Stays",
    btnDeleteAll: "Delete all",
    btnLoadExample: "Load example data",
    staysCount: "Stays",
    daysTotal: "Total days",
    noStays: "No stays recorded",
    days: "days",

    // Results
    resultsTitle: "📊 Results",
    usedDaysLabel: "Days used (180-day window):",
    remainingDaysLabel: "Days remaining:",
    windowDatesLabel: "180-day window:",
    nextEntryLabel: "Next entry date:",
    immediateEntry: "Immediately (from today)",
    notCalculable: "Not calculable",

    // Circular Chart
    chartTitle: "🔄 365-Day Circular Chart",
    legendTitle: "Legend & Statistics",
    legendStays365: "Stay days (365 days)",
    legendWindow180: "180-day window",
    legendLimit90: "90-day limit",
    legendStaysIn180: "Stays within 180-day window",
    legendStaysOutside: "Stays outside (181-365 days)",
    legendRefDate: "Reference date",
    chartLimitUsed: "of 90-day limit",
    chartDaysRemaining: "days remaining",
    chartWindowUsed: "180-window used",
    chartYearUsed: "365-days used",
    chartDirectionTitle: "↻ Time direction clockwise",
    chartDirectionText: "Start (365 days ago) at top → Time runs clockwise → Reference date at top (end)",
    chartCenter1: "days remaining",
    chartCenter2: "used",
    maxAllowed: "Max. 90 days allowed",
    daysInWindow: "days (in window)",
    startLabel: "Start",
    daysAgo: "(-365d)",

    // Planning
    planningTitle: "🎯 Plan Stay",
    planningDesc: "Calculate when you can enter for a specific number of days.",
    desiredDaysLabel: "Desired stay duration (days)",
    planFromLabel: "Plan from date",
    btnPlanStay: "Calculate entry date",
    planPossible: "✅ Stay possible!",
    planNotPossible: "⚠️ Not possible",
    planEntryDate: "Entry date:",
    planExitDate: "Exit date:",
    planDuration: "Stay duration:",
    planWaitDays: "You must wait {0} day(s).",
    planNotPossibleText: "A stay of {0} days is not possible in the next {1} days.",

    // Calendar
    calendarTitle: "📆 Year Calendar",
    btnCurrentYear: "Current year",
    view1Year: "Show 1 year",
    view2Years: "Show 2 years",
    view3Years: "Show 3 years",
    staysInPeriod: "Stays in period",
    daysInPeriod: "Days in period",
    monthsShown: "Months shown",
    staysInViewTitle: "Stays in displayed period:",
    noStaysInPeriod: "No stays in this period",
    stayDays: "Stay days",
    calLegendStay: "Stay days",
    calLegendEntry: "Entry",
    calLegendExit: "Exit",
    calLegendToday: "Today",
    calLegendRef: "Reference date",
    calLegendOutside: "Outside 180-day window",

    // Tooltips
    tooltipToday: "Today",
    tooltipRef: "Reference date",
    tooltipEntry: "Entry",
    tooltipExit: "Exit",
    tooltipEntryExit: "Entry and Exit",
    tooltipWindowStart: "Window start (180 days)",

    // Timeline
    timelineTitle: "📈 180-Day Window Visualization",
    timelineDays: "180 days",

    // Export/Import
    dataManageTitle: "💾 Manage Data",
    exportImportTitle: "Export/Import stays",
    btnExport: "Export data (JSON)",
    btnImport: "Import data",

    // Buttons & Notifications
    btnScrollToMonth: "📅 Go to current month",
    msgStayAdded: "Stay added: {0} days",
    msgStayDeleted: "Stay deleted",
    msgAllDeleted: "All stays deleted",
    msgExported: "Data exported",
    msgImported: "Data imported",
    msgExampleLoaded: "Example data loaded",
    msgErrorBothDates: "Please enter both dates!",
    msgErrorExitAfterEntry: "Exit date must be after entry date!",
    msgErrorValidDays: "Please enter a valid number (1-90)!",
    msgErrorStartDate: "Please enter a start date!",
    msgErrorImport: "Error importing: ",
    msgConfirmDelete: "Really delete all stays?",

    // Months
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
};

export default en;
