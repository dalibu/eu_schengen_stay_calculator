# 🇪🇺 Schengen Stay Calculator

> 📖 **Languages:** [English](./README.md) | [Русский](./README.ru.md)

A calculator for tracking stays in the Schengen Area according to the 90/180-day rule.

## 📋 About

Third-country nationals may stay in the Schengen Area for a maximum of **90 days** within any **rolling 180-day period**. This calculator helps you:

- ✅ Track past trips
- ✅ Calculate remaining days
- ✅ Plan future visits
- ✅ Avoid exceeding the limit

## 🎯 Two Project Versions

This repository contains **two implementations** of the calculator:

### 🌐 [Web Version](./web-version/) - **100% Ready** ✅

Fully functional web application running in the browser:

```
📂 web-version/
   ├── 📄 schengen_stay_calculator.html
   ├── 🎨 styles.css
   ├── 🌍 i18n/translations.js (DE, EN, UK, RU)
   ├── 🚀 DEPLOYMENT.md
   └── 🐳 Docker files
```

**Features:**
- ✅ 90/180 day calculator
- ✅ Interactive calendar
- ✅ 365-day circular chart
- ✅ Trip planner
- ✅ 4 languages (DE, EN, UK, RU)
- ✅ Export/Import data
- ✅ Works offline

**Launch:**
```bash
cd web-version
open schengen_stay_calculator.html
```

**Live Demo:** [Deploy with Docker](./web-version/DEPLOYMENT.md)

---

### 📱 [Android App](./android-app/) - **In Development** 🚧

Native Android application with Kotlin and Jetpack Compose:

```
📂 android-app/
   ├── 📱 app/ (Kotlin + Compose)
   ├── 🗄️ SQLDelight database
   ├── 🎨 Material Design 3
   ├── 📖 README.md
   └── 🚀 QUICKSTART.md
```

**Features:**
- ✅ Material Design 3 UI
- ✅ SQLDelight database
- ✅ Home screen with calculations
- ✅ Light/dark theme
- ✅ 2 languages (DE, EN)
- 🚧 Trip management (in development)
- 🚧 Push notifications (in development)
- 🚧 Calendar (in development)

**Launch:**
```bash
cd android-app
# Open in Android Studio
./gradlew build
```

**Documentation:** [android-app/QUICKSTART.md](./android-app/QUICKSTART.md)

---

## 📊 Version Comparison

| Feature | 🌐 Web | 📱 Android |
|---------|---------|------------|
| **Status** | ✅ 100% | ⏳ 35% |
| **Platform** | Any browser | Android 8.0+ |
| **Installation** | Not required | APK / Google Play |
| **Database** | Local Storage | SQLDelight |
| **Offline** | ✅ Yes | ✅ Yes |
| **Notifications** | ❌ No | 🚧 In development |
| **Design** | Custom CSS | Material Design 3 |
| **Languages** | 4 (DE/EN/UK/RU) | 2 (DE/EN) |
| **Calendar** | ✅ Full | 🚧 In development |

## 🚀 Quick Start

### For Users
**Use the web version** - it's fully ready:
```bash
cd web-version
open schengen_stay_calculator.html
```

### For Android Developers
**Continue Android app development:**
```bash
cd android-app
# See QUICKSTART.md for details
```

## 📖 Documentation

### Web Version
- [📄 README](./web-version/README.md) - Description and features
- [🚀 DEPLOYMENT](./web-version/DEPLOYMENT.md) - Docker/Nginx deployment

### Android App
- [📱 README](./android-app/README.md) - Project overview
- [⚡ QUICKSTART](./android-app/QUICKSTART.md) - Quick start
- [🛠️ DEVELOPMENT](./android-app/DEVELOPMENT.md) - Development plan
- [📊 PROJECT_SUMMARY](./android-app/PROJECT_SUMMARY.md) - Status report
- [📁 FILES_LIST](./android-app/FILES_LIST.md) - All files list

### Additional Documentation
- [📋 Project Overview](./docs/en/project-overview.md) - Detailed comparison
- [📂 Project Structure](./docs/en/project-structure.md) - Structure description

## 🛠️ Technologies

### Web Version
- HTML5, CSS3, JavaScript
- Canvas API for charts
- Local Storage API
- No frameworks or dependencies

### Android App
- Kotlin 1.9.20
- Jetpack Compose + Material Design 3
- SQLDelight 2.0.1
- Coroutines & Flow
- MVVM Architecture

## 🌍 Localization

| Language | 🌐 Web | 📱 Android |
|----------|---------|------------|
| 🇩🇪 German | ✅ | ✅ |
| 🇬🇧 English | ✅ | ✅ |
| 🇺🇦 Ukrainian | ✅ | 🚧 |
| 🇷🇺 Russian | ✅ | 🚧 |

## 🤝 Contributing

Contributions are welcome:

**Web Version** (ready to use):
- Adding new languages
- Improving UI/UX
- Bug fixes

**Android App** (active development):
- Trip management screen
- Trip planner
- Calendar with visualization
- Push notifications
- Adding languages (UK, RU)
- Tests

## 📄 License

MIT License - feel free to use, modify, and distribute.

## ⚠️ Important Notice

This application is for **informational purposes only**.  
Always verify visa requirements with official sources before traveling.

**Official Information:**
- 🇪🇺 [European Commission - Schengen Area](https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en)
- 📱 [Official EU Short-Stay Calculator](https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/border-crossing/schengen-calculator_en)

---

## 📂 Project Structure

```
eu_schengen_stay_calculator/
│
├── 🌐 web-version/              # Web application (100% ready)
│   ├── schengen_stay_calculator.html
│   ├── styles.css
│   ├── i18n/translations.js
│   ├── DEPLOYMENT.md
│   └── ... (Docker, nginx)
│
├── 📱 android-app/              # Android app (35% ready)
│   ├── app/
│   │   ├── src/main/java/      # Kotlin code
│   │   ├── src/main/sqldelight/  # SQL schema
│   │   └── src/main/res/       # Resources
│   ├── README.md
│   ├── QUICKSTART.md
│   └── DEVELOPMENT.md
│
├── 📖 docs/                     # Documentation
│   ├── en/                      # English
│   └── ru/                      # Russian
│
├── 📄 README.md                 # This file (English)
└── 📄 README.ru.md              # Russian version
```

---

**Web version is ready to use!** ✅  
**Android version in active development!** 🚧

Made with ❤️ for travelers 🌍✈️
