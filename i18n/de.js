// German translations
const de = {
    // Allgemein
    title: "🇪🇺 Schengen-Aufenthaltsrechner",
    infoTitle: "ℹ️ Schengen-Regel (90/180-Tage-Regel)",
    infoText: "Drittstaatsangehörige dürfen sich maximal <strong>90 Tage</strong> innerhalb eines <strong>rollierenden 180-Tage-Zeitraums</strong> im Schengen-Raum aufhalten. Das bedeutet: An jedem beliebigen Tag wird geprüft, wie viele Tage Sie in den vergangenen 180 Tagen im Schengen-Raum verbracht haben. Diese Zahl darf 90 nicht überschreiten.",

    // Bezugsdatum
    referenceDateTitle: "📅 Bezugsdatum",
    referenceDateLabel: "Berechnungsdatum (Standard: heute)",
    btnToday: "Heute",
    btnCalculate: "Berechnen",

    // Aufenthalt hinzufügen
    addStayTitle: "✈️ Aufenthalt hinzufügen",
    entryDateLabel: "Einreisedatum",
    exitDateLabel: "Ausreisedatum",
    btnAddStay: "Aufenthalt hinzufügen",

    // Aufenthaltsliste
    staysListTitle: "📋 Aufenthalte",
    btnDeleteAll: "Alle löschen",
    btnLoadExample: "Beispieldaten laden",
    staysCount: "Aufenthalte",
    daysTotal: "Tage gesamt",
    noStays: "Keine Aufenthalte eingetragen",
    days: "Tage",

    // Ergebnisse
    resultsTitle: "📊 Ergebnisse",
    usedDaysLabel: "Verbrauchte Tage (180-Tage-Fenster):",
    remainingDaysLabel: "Verbleibende Tage:",
    windowDatesLabel: "180-Tage-Fenster:",
    nextEntryLabel: "Nächstes Einreisedatum:",
    immediateEntry: "Sofort (ab heute)",
    notCalculable: "Nicht berechenbar",

    // Kreisdiagramm
    chartTitle: "🔄 365-Tage Kreisdiagramm",
    legendTitle: "Legende & Statistik",
    legendStays365: "Aufenthaltstage (365 Tage)",
    legendWindow180: "180-Tage-Fenster",
    legendLimit90: "90-Tage-Limit",
    legendStaysIn180: "Aufenthalte im 180-Tage-Fenster",
    legendStaysOutside: "Aufenthalte außerhalb (181-365 Tage)",
    legendRefDate: "Bezugsdatum",
    chartLimitUsed: "vom 90-Tage-Limit",
    chartDaysRemaining: "Tage verbleibend",
    chartWindowUsed: "180-Fenster genutzt",
    chartYearUsed: "365-Tage genutzt",
    chartDirectionTitle: "↻ Zeitrichtung im Uhrzeigersinn",
    chartDirectionText: "Start (vor 365 Tagen) oben → Zeit läuft im Uhrzeigersinn → Bezugsdatum oben (Ende)",
    chartCenter1: "Tage verbleibend",
    chartCenter2: "verbraucht",
    maxAllowed: "Max. 90 Tage erlaubt",
    daysInWindow: "Tage (im Fenster)",
    startLabel: "Start",
    daysAgo: "(-365T)",

    // Planung
    planningTitle: "🎯 Aufenthalt planen",
    planningDesc: "Berechnen Sie, ab wann Sie für eine bestimmte Anzahl von Tagen einreisen können.",
    desiredDaysLabel: "Gewünschte Aufenthaltsdauer (Tage)",
    planFromLabel: "Planen ab Datum",
    btnPlanStay: "Einreisedatum berechnen",
    planPossible: "✅ Aufenthalt möglich!",
    planNotPossible: "⚠️ Nicht möglich",
    planEntryDate: "Einreisedatum:",
    planExitDate: "Ausreisedatum:",
    planDuration: "Aufenthaltsdauer:",
    planWaitDays: "Sie müssen {0} Tag(e) warten.",
    planNotPossibleText: "Ein Aufenthalt von {0} Tagen ist in den nächsten {1} Tagen nicht möglich.",

    // Kalender
    calendarTitle: "📆 Jahreskalender",
    btnCurrentYear: "Aktuelles Jahr",
    view1Year: "1 Jahr anzeigen",
    view2Years: "2 Jahre anzeigen",
    view3Years: "3 Jahre anzeigen",
    staysInPeriod: "Aufenthalte im Zeitraum",
    daysInPeriod: "Tage im Zeitraum",
    monthsShown: "Monate angezeigt",
    staysInViewTitle: "Aufenthalte im angezeigten Zeitraum:",
    noStaysInPeriod: "Keine Aufenthalte in diesem Zeitraum",
    stayDays: "Aufenthaltstage",
    calLegendStay: "Aufenthaltstage",
    calLegendEntry: "Einreise",
    calLegendExit: "Ausreise",
    calLegendToday: "Heute",
    calLegendRef: "Bezugsdatum",
    calLegendOutside: "Außerhalb 180-Tage-Fenster",

    // Tooltips
    tooltipToday: "Heute",
    tooltipRef: "Bezugsdatum",
    tooltipEntry: "Einreise",
    tooltipExit: "Ausreise",
    tooltipEntryExit: "Ein- und Ausreise",
    tooltipWindowStart: "Fenster-Start (180 Tage)",

    // Timeline
    timelineTitle: "📈 180-Tage-Fenster Visualisierung",
    timelineDays: "180 Tage",

    // Export/Import
    dataManageTitle: "💾 Daten verwalten",
    exportImportTitle: "Aufenthalte exportieren/importieren",
    btnExport: "Daten exportieren (JSON)",
    btnImport: "Daten importieren",

    // Buttons & Notifications
    btnScrollToMonth: "📅 Zum aktuellen Monat",
    msgStayAdded: "Aufenthalt hinzugefügt: {0} Tage",
    msgStayDeleted: "Aufenthalt gelöscht",
    msgAllDeleted: "Alle Aufenthalte gelöscht",
    msgExported: "Daten exportiert",
    msgImported: "Daten importiert",
    msgExampleLoaded: "Beispieldaten geladen",
    msgErrorBothDates: "Bitte beide Daten eingeben!",
    msgErrorExitAfterEntry: "Ausreisedatum muss nach Einreisedatum liegen!",
    msgErrorValidDays: "Bitte eine gültige Anzahl (1-90) eingeben!",
    msgErrorStartDate: "Bitte ein Startdatum eingeben!",
    msgErrorImport: "Fehler beim Importieren: ",
    msgConfirmDelete: "Alle Aufenthalte wirklich löschen?",

    // Monate
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
};

export default de;
