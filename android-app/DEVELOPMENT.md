# 🚀 Дальнейшая разработка - Schengen Calculator Android

## Что уже реализовано ✅

### Базовая архитектура
- ✅ Gradle конфигурация с всеми зависимостями
- ✅ SQLDelight база данных для хранения поездок
- ✅ Repository pattern для работы с данными
- ✅ SchengenCalculator - бизнес-логика расчетов
- ✅ Material Design 3 тема (светлая/темная)
- ✅ Главный экран с результатами расчетов
- ✅ Компоненты UI (InfoCard, DatePicker, ProgressIndicator)
- ✅ Локализация (DE, EN)
- ✅ Application класс с инициализацией

## Следующие шаги 📋

### 1. Экран управления поездками (Приоритет: ВЫСОКИЙ)

Создайте следующие файлы:

#### `ui/stays/StaysViewModel.kt`
```kotlin
class StaysViewModel(
    private val repository: StayRepository,
    private val calculator: SchengenCalculator
) : ViewModel() {
    val stays = repository.getAllStaysFlow()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())
    
    fun addStay(stay: SchengenStay) = viewModelScope.launch {
        repository.insertStay(stay)
    }
    
    fun deleteStay(id: Long) = viewModelScope.launch {
        repository.deleteStay(id)
    }
    
    fun deleteAllStays() = viewModelScope.launch {
        repository.deleteAllStays()
    }
}
```

#### `ui/stays/StaysScreen.kt`
- Список всех поездок (LazyColumn)
- FAB кнопка для добавления новой поездки
- Диалог добавления/редактирования поездки
- Swipe-to-delete функциональность
- Кнопка "Удалить все"

### 2. Экран планировщика (Приоритет: ВЫСОКИЙ)

#### `ui/planning/PlanningViewModel.kt`
```kotlin
class PlanningViewModel(
    private val repository: StayRepository,
    private val calculator: SchengenCalculator
) : ViewModel() {
    fun planStay(desiredDays: Int, fromDate: LocalDate) {
        viewModelScope.launch {
            val stays = repository.getAllStays()
            val result = calculator.planStay(stays, desiredDays, fromDate)
            // Update UI state
        }
    }
}
```

#### `ui/planning/PlanningScreen.kt`
- Input для желаемого количества дней
- DatePicker для начальной даты
- Кнопка "Рассчитать"
- Отображение результата (возможно/невозможно)
- Дата въезда и выезда

### 3. Push-уведомления (Приоритет: СРЕДНИЙ)

#### `workers/ReminderWorker.kt`
```kotlin
class ReminderWorker(
    context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params) {
    
    override suspend fun doWork(): Result {
        val repository = (applicationContext as SchengenApplication).stayRepository
        val stays = repository.getAllStays()
        val result = SchengenCalculator().calculate(stays)
        
        // Проверить, нужно ли отправить уведомление
        if (result.daysRemaining <= 7) {
            sendNotification(result)
        }
        
        return Result.success()
    }
    
    private fun sendNotification(result: CalculationResult) {
        // Создать и отправить уведомление
    }
}
```

Запланировать периодическую работу:
```kotlin
val workRequest = PeriodicWorkRequestBuilder<ReminderWorker>(1, TimeUnit.DAYS)
    .build()
WorkManager.getInstance(context).enqueue(workRequest)
```

### 4. Экспорт/Импорт данных (Приоритет: СРЕДНИЙ)

#### `data/export/DataExporter.kt`
```kotlin
class DataExporter(private val repository: StayRepository) {
    suspend fun exportToJson(): String {
        val stays = repository.getAllStays()
        return Json.encodeToString(stays)
    }
    
    suspend fun importFromJson(json: String) {
        val stays = Json.decodeFromString<List<SchengenStay>>(json)
        stays.forEach { repository.insertStay(it) }
    }
}
```

В UI:
- Кнопка "Экспорт" → сохранить JSON в файл
- Кнопка "Импорт" → выбрать файл и загрузить

### 5. Календарь (Приоритет: СРЕДНИЙ)

Используйте библиотеку для календаря или создайте custom:

```kotlin
@Composable
fun CalendarScreen() {
    // Отобразить месяцы с выделением дней поездок
    // Разные цвета для дней в/вне 180-дневного окна
    // Маркеры для въезда/выезда
}
```

### 6. Настройки (Приоритет: НИЗКИЙ)

#### `ui/settings/SettingsScreen.kt`
- Выбор языка
- Выбор темы (светлая/темная/система)
- Настройки уведомлений
- О приложении

Использовать DataStore для сохранения настроек:
```kotlin
val Context.dataStore by preferencesDataStore("settings")
```

## Полезные советы 💡

### Навигация между экранами

Обновите `MainActivity.kt`:
```kotlin
sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Stays : Screen("stays")
    object Calendar : Screen("calendar")
    object Planning : Screen("planning")
    object Settings : Screen("settings")
}

@Composable
fun SchengenApp() {
    val navController = rememberNavController()
    
    Scaffold(
        bottomBar = { 
            NavigationBar {
                NavigationBarItem(
                    icon = { Icon(Icons.Default.Home, null) },
                    label = { Text("Home") },
                    selected = currentRoute == "home",
                    onClick = { navController.navigate("home") }
                )
                // Другие кнопки...
            }
        }
    ) {
        NavHost(navController, startDestination = "home") {
            composable("home") { HomeScreen(...) }
            composable("stays") { StaysScreen(...) }
            // и т.д.
        }
    }
}
```

### Тестирование

Создайте тесты:
```kotlin
// SchengenCalculatorTest.kt
@Test
fun `calculate days in window`() {
    val stays = listOf(/* ... */)
    val result = calculator.calculate(stays, LocalDate.now())
    assertEquals(45, result.daysUsed)
}
```

### Иконки и изображения

Необходимо добавить:
- `res/mipmap/ic_launcher.png` - иконка приложения
- `res/drawable/ic_notification.xml` - иконка для уведомлений

Используйте Asset Studio в Android Studio:
`File → New → Image Asset`

## Проверка перед релизом 🔍

- [ ] Все экраны реализованы
- [ ] Локализация завершена (DE, EN, UK, RU)
- [ ] Тесты написаны и проходят
- [ ] ProGuard правила настроены
- [ ] Иконки и ресурсы добавлены
- [ ] Уведомления протестированы
- [ ] Экспорт/импорт работает
- [ ] Приложение работает offline
- [ ] Темная тема выглядит хорошо

## Сборка релиза 📦

```bash
./gradlew assembleRelease
```

Подпись APK:
```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
    -keystore your-keystore.jks app-release-unsigned.apk alias_name
```

## Публикация в Google Play 🚀

1. Создайте keystore для подписи
2. Настройте `app/build.gradle.kts` для release
3. Подготовьте описание, скриншоты
4. Загрузите в Google Play Console

---

**Удачи в разработке!** 🎉
