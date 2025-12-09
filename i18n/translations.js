/**
 * Internationalization (i18n) - Combined Translations
 * 
 * This file combines all translations into a single global object
 * for use in browsers without module support or when running from file://
 * 
 * To add a new language:
 * 1. Create a new file in this folder (e.g., 'fr.js' for French)
 * 2. Copy the structure from an existing language file
 * 3. Add the language to the 'translations' object below
 * 4. Add a language button in the HTML
 */

// =====================================================
// GERMAN (de)
// =====================================================
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

// =====================================================
// ENGLISH (en)
// =====================================================
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

// =====================================================
// UKRAINIAN (uk)
// =====================================================
const uk = {
    // Загальне
    title: "🇪🇺 Калькулятор перебування в Шенгені",
    infoTitle: "ℹ️ Шенгенське правило (правило 90/180 днів)",
    infoText: "Громадяни третіх країн можуть перебувати максимум <strong>90 днів</strong> протягом <strong>ковзного 180-денного періоду</strong> в Шенгенській зоні. Це означає: в будь-який день перевіряється, скільки днів ви провели в Шенгенській зоні за останні 180 днів. Це число не повинно перевищувати 90.",

    // Дата відліку
    referenceDateTitle: "📅 Дата відліку",
    referenceDateLabel: "Дата розрахунку (за замовчуванням: сьогодні)",
    btnToday: "Сьогодні",
    btnCalculate: "Розрахувати",

    // Додати перебування
    addStayTitle: "✈️ Додати перебування",
    entryDateLabel: "Дата в'їзду",
    exitDateLabel: "Дата виїзду",
    btnAddStay: "Додати перебування",

    // Список перебувань
    staysListTitle: "📋 Перебування",
    btnDeleteAll: "Видалити все",
    btnLoadExample: "Завантажити приклад",
    staysCount: "Перебувань",
    daysTotal: "Всього днів",
    noStays: "Перебування не записані",
    days: "днів",

    // Результати
    resultsTitle: "📊 Результати",
    usedDaysLabel: "Використано днів (180-денне вікно):",
    remainingDaysLabel: "Залишилось днів:",
    windowDatesLabel: "180-денне вікно:",
    nextEntryLabel: "Наступна дата в'їзду:",
    immediateEntry: "Негайно (з сьогодні)",
    notCalculable: "Неможливо розрахувати",

    // Кругова діаграма
    chartTitle: "🔄 365-денна кругова діаграма",
    legendTitle: "Легенда та статистика",
    legendStays365: "Дні перебування (365 днів)",
    legendWindow180: "180-денне вікно",
    legendLimit90: "Ліміт 90 днів",
    legendStaysIn180: "Перебування в 180-денному вікні",
    legendStaysOutside: "Перебування поза (181-365 днів)",
    legendRefDate: "Дата відліку",
    chartLimitUsed: "від ліміту 90 днів",
    chartDaysRemaining: "днів залишилось",
    chartWindowUsed: "180-вікно використано",
    chartYearUsed: "365 днів використано",
    chartDirectionTitle: "↻ Напрямок часу за годинниковою стрілкою",
    chartDirectionText: "Початок (365 днів тому) зверху → Час йде за годинниковою стрілкою → Дата відліку зверху (кінець)",
    chartCenter1: "днів залишилось",
    chartCenter2: "використано",
    maxAllowed: "Макс. 90 днів дозволено",
    daysInWindow: "днів (у вікні)",
    startLabel: "Початок",
    daysAgo: "(-365д)",

    // Планування
    planningTitle: "🎯 Планувати перебування",
    planningDesc: "Розрахуйте, коли ви можете в'їхати на певну кількість днів.",
    desiredDaysLabel: "Бажана тривалість перебування (днів)",
    planFromLabel: "Планувати від дати",
    btnPlanStay: "Розрахувати дату в'їзду",
    planPossible: "✅ Перебування можливе!",
    planNotPossible: "⚠️ Неможливо",
    planEntryDate: "Дата в'їзду:",
    planExitDate: "Дата виїзду:",
    planDuration: "Тривалість перебування:",
    planWaitDays: "Потрібно почекати {0} день(днів).",
    planNotPossibleText: "Перебування {0} днів неможливе протягом наступних {1} днів.",

    // Календар
    calendarTitle: "📆 Річний календар",
    btnCurrentYear: "Поточний рік",
    view1Year: "Показати 1 рік",
    view2Years: "Показати 2 роки",
    view3Years: "Показати 3 роки",
    staysInPeriod: "Перебувань за період",
    daysInPeriod: "Днів за період",
    monthsShown: "Показано місяців",
    staysInViewTitle: "Перебування у відображеному періоді:",
    noStaysInPeriod: "Немає перебувань за цей період",
    stayDays: "Дні перебування",
    calLegendStay: "Дні перебування",
    calLegendEntry: "В'їзд",
    calLegendExit: "Виїзд",
    calLegendToday: "Сьогодні",
    calLegendRef: "Дата відліку",
    calLegendOutside: "Поза 180-денним вікном",

    // Підказки
    tooltipToday: "Сьогодні",
    tooltipRef: "Дата відліку",
    tooltipEntry: "В'їзд",
    tooltipExit: "Виїзд",
    tooltipEntryExit: "В'їзд і виїзд",
    tooltipWindowStart: "Початок вікна (180 днів)",

    // Шкала часу
    timelineTitle: "📈 Візуалізація 180-денного вікна",
    timelineDays: "180 днів",

    // Експорт/Імпорт
    dataManageTitle: "💾 Керування даними",
    exportImportTitle: "Експорт/Імпорт перебувань",
    btnExport: "Експорт даних (JSON)",
    btnImport: "Імпорт даних",

    // Кнопки та повідомлення
    btnScrollToMonth: "📅 До поточного місяця",
    msgStayAdded: "Перебування додано: {0} днів",
    msgStayDeleted: "Перебування видалено",
    msgAllDeleted: "Усі перебування видалено",
    msgExported: "Дані експортовано",
    msgImported: "Дані імпортовано",
    msgExampleLoaded: "Приклад даних завантажено",
    msgErrorBothDates: "Будь ласка, введіть обидві дати!",
    msgErrorExitAfterEntry: "Дата виїзду повинна бути після дати в'їзду!",
    msgErrorValidDays: "Будь ласка, введіть дійсне число (1-90)!",
    msgErrorStartDate: "Будь ласка, введіть дату початку!",
    msgErrorImport: "Помилка імпорту: ",
    msgConfirmDelete: "Справді видалити всі перебування?",

    // Місяці
    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]
};

// =====================================================
// RUSSIAN (ru)
// =====================================================
const ru = {
    // Общее
    title: "🇪🇺 Калькулятор пребывания в Шенгене",
    infoTitle: "ℹ️ Шенгенское правило (правило 90/180 дней)",
    infoText: "Граждане третьих стран могут находиться максимум <strong>90 дней</strong> в течение <strong>скользящего 180-дневного периода</strong> в Шенгенской зоне. Это означает: в любой день проверяется, сколько дней вы провели в Шенгенской зоне за последние 180 дней. Это число не должно превышать 90.",

    // Дата отсчёта
    referenceDateTitle: "📅 Дата отсчёта",
    referenceDateLabel: "Дата расчёта (по умолчанию: сегодня)",
    btnToday: "Сегодня",
    btnCalculate: "Рассчитать",

    // Добавить пребывание
    addStayTitle: "✈️ Добавить пребывание",
    entryDateLabel: "Дата въезда",
    exitDateLabel: "Дата выезда",
    btnAddStay: "Добавить пребывание",

    // Список пребываний
    staysListTitle: "📋 Пребывания",
    btnDeleteAll: "Удалить все",
    btnLoadExample: "Загрузить пример",
    staysCount: "Пребываний",
    daysTotal: "Всего дней",
    noStays: "Пребывания не записаны",
    days: "дней",

    // Результаты
    resultsTitle: "📊 Результаты",
    usedDaysLabel: "Использовано дней (180-дневное окно):",
    remainingDaysLabel: "Осталось дней:",
    windowDatesLabel: "180-дневное окно:",
    nextEntryLabel: "Следующая дата въезда:",
    immediateEntry: "Немедленно (с сегодня)",
    notCalculable: "Невозможно рассчитать",

    // Круговая диаграмма
    chartTitle: "🔄 365-дневная круговая диаграмма",
    legendTitle: "Легенда и статистика",
    legendStays365: "Дни пребывания (365 дней)",
    legendWindow180: "180-дневное окно",
    legendLimit90: "Лимит 90 дней",
    legendStaysIn180: "Пребывания в 180-дневном окне",
    legendStaysOutside: "Пребывания вне (181-365 дней)",
    legendRefDate: "Дата отсчёта",
    chartLimitUsed: "от лимита 90 дней",
    chartDaysRemaining: "дней осталось",
    chartWindowUsed: "180-окно использовано",
    chartYearUsed: "365 дней использовано",
    chartDirectionTitle: "↻ Направление времени по часовой стрелке",
    chartDirectionText: "Начало (365 дней назад) сверху → Время идёт по часовой стрелке → Дата отсчёта сверху (конец)",
    chartCenter1: "дней осталось",
    chartCenter2: "использовано",
    maxAllowed: "Макс. 90 дней разрешено",
    daysInWindow: "дней (в окне)",
    startLabel: "Начало",
    daysAgo: "(-365д)",

    // Планирование
    planningTitle: "🎯 Планировать пребывание",
    planningDesc: "Рассчитайте, когда вы можете въехать на определённое количество дней.",
    desiredDaysLabel: "Желаемая продолжительность пребывания (дней)",
    planFromLabel: "Планировать от даты",
    btnPlanStay: "Рассчитать дату въезда",
    planPossible: "✅ Пребывание возможно!",
    planNotPossible: "⚠️ Невозможно",
    planEntryDate: "Дата въезда:",
    planExitDate: "Дата выезда:",
    planDuration: "Продолжительность пребывания:",
    planWaitDays: "Нужно подождать {0} день(дней).",
    planNotPossibleText: "Пребывание {0} дней невозможно в течение следующих {1} дней.",

    // Календарь
    calendarTitle: "📆 Годовой календарь",
    btnCurrentYear: "Текущий год",
    view1Year: "Показать 1 год",
    view2Years: "Показать 2 года",
    view3Years: "Показать 3 года",
    staysInPeriod: "Пребываний за период",
    daysInPeriod: "Дней за период",
    monthsShown: "Показано месяцев",
    staysInViewTitle: "Пребывания в отображаемом периоде:",
    noStaysInPeriod: "Нет пребываний за этот период",
    stayDays: "Дни пребывания",
    calLegendStay: "Дни пребывания",
    calLegendEntry: "Въезд",
    calLegendExit: "Выезд",
    calLegendToday: "Сегодня",
    calLegendRef: "Дата отсчёта",
    calLegendOutside: "Вне 180-дневного окна",

    // Подсказки
    tooltipToday: "Сегодня",
    tooltipRef: "Дата отсчёта",
    tooltipEntry: "Въезд",
    tooltipExit: "Выезд",
    tooltipEntryExit: "Въезд и выезд",
    tooltipWindowStart: "Начало окна (180 дней)",

    // Временная шкала
    timelineTitle: "📈 Визуализация 180-дневного окна",
    timelineDays: "180 дней",

    // Экспорт/Импорт
    dataManageTitle: "💾 Управление данными",
    exportImportTitle: "Экспорт/Импорт пребываний",
    btnExport: "Экспорт данных (JSON)",
    btnImport: "Импорт данных",

    // Кнопки и уведомления
    btnScrollToMonth: "📅 К текущему месяцу",
    msgStayAdded: "Пребывание добавлено: {0} дней",
    msgStayDeleted: "Пребывание удалено",
    msgAllDeleted: "Все пребывания удалены",
    msgExported: "Данные экспортированы",
    msgImported: "Данные импортированы",
    msgExampleLoaded: "Пример данных загружен",
    msgErrorBothDates: "Пожалуйста, введите обе даты!",
    msgErrorExitAfterEntry: "Дата выезда должна быть после даты въезда!",
    msgErrorValidDays: "Пожалуйста, введите допустимое число (1-90)!",
    msgErrorStartDate: "Пожалуйста, введите дату начала!",
    msgErrorImport: "Ошибка импорта: ",
    msgConfirmDelete: "Действительно удалить все пребывания?",

    // Месяцы
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
};

// =====================================================
// EXPORT TRANSLATIONS OBJECT
// =====================================================

/**
 * Combined translations object
 * Add new languages here after creating their translation objects above
 */
const translations = {
    de,
    en,
    uk,
    ru
};

// Make translations available globally for non-module usage
if (typeof window !== 'undefined') {
    window.translations = translations;
}
