# 📱 Schengen Calculator - Complete Project

> 📖 **Languages:** [English](./project-overview.md) | [Русский](../ru/project-overview.md)

Calculator for tracking stays in the Schengen Area according to the 90/180-day rule.

## 📦 Project Structure

This project contains **two versions** of the calculator:

```
eu_schengen_stay_calculator/
├── 🌐 Web version (HTML/CSS/JS)
│   ├── schengen_stay_calculator.html
│   ├── styles.css
│   ├── i18n/translations.js
│   └── ... (other web files)
│
└── 📱 Android app (Kotlin/Compose)
    └── android-app/
        ├── app/
        ├── README.md
        ├── QUICKSTART.md
        └── ... (Android project)
```

---

## 🌐 Web Version

### Features
- ✅ Runs entirely in browser (no server needed)
- ✅ 90/180 day calculator
- ✅ Interactive calendar
- ✅ 365-day circular chart
- ✅ Trip planner
- ✅ Multilingual: DE, EN, UK, RU
- ✅ Export/Import data (JSON)
- ✅ Local Storage for data persistence

### Quick Start
```bash
# Simply open in browser
open schengen_stay_calculator.html
# or
firefox schengen_stay_calculator.html
```

### Deployment
See `DEPLOYMENT.md` for instructions on:
- Docker deployment
- Nginx configuration
- SSL certificates

---

## 📱 Android Application

### Features
- ✅ Native Android app
- ✅ Material Design 3
- ✅ SQLDelight database
- ✅ Offline functionality
- ✅ Light/dark theme
- ✅ Push notifications (in development)
- ✅ Localization: DE, EN (UK, RU in development)

### Quick Start
```bash
# Navigate to Android project directory
cd android-app

# Open in Android Studio or run
./gradlew build
./gradlew installDebug
```

### Android Documentation
📖 Full documentation in `android-app/` folder:
- `README.md` - Project overview
- `QUICKSTART.md` - Quick start in 5 minutes
- `DEVELOPMENT.md` - Development roadmap
- `PROJECT_SUMMARY.md` - Current status report
- `FILES_LIST.md` - Complete file list

---

## 🎯 Version Comparison

| Feature | Web Version | Android App |
|---------|-------------|-------------|
| **Status** | ✅ 100% | ⏳ 35% |
| **Platform** | Any browser | Android 8.0+ |
| **Installation** | Not required | Google Play / APK |
| **Database** | Local Storage | SQLDelight |
| **Offline** | ✅ Yes | ✅ Yes |
| **Notifications** | ❌ No | ✅ Yes (in development) |
| **Design** | Custom CSS | Material Design 3 |
| **Languages** | DE, EN, UK, RU | DE, EN |
| **Calendar** | ✅ Full | ⏳ In development |
| **Charts** | ✅ Canvas | ⏳ In development |

---

## 🚀 Which Version to Use?

### Use **Web Version** if:
- ✅ Need a quick solution (ready to use)
- ✅ Want access from any device
- ✅ Don't need notifications
- ✅ Prefer browser interface

### Use **Android App** if:
- ✅ Need native application
- ✅ Want push notifications
- ✅ Prefer Material Design
- ✅ Want to contribute to development (project is open!)

---

## 📊 The 90/180 Day Rule

Third-country nationals may stay in the Schengen Area for a maximum of **90 days** within any **rolling 180-day period**.

### How it works?
```
┌────────────────── 180 days ──────────────────┐
│                                               │
│     [Already used]         [Can be used]     │
│            ↓                      ↓           │
│     ████████████░░░░░░░░░░░░░░░░░░░░░        │
│         45 days               45 days        │
└───────────────────────────────────────────────┘
        ↑                              ↑
    180 days ago                   Today
```

On any given day, look back 180 days and count the days spent.
This number must not exceed 90.

---

## 🛠️ Development

### Web Version
```bash
# Development
# Simply edit HTML/CSS/JS files
# Refresh browser to view changes

# Adding a new language
# 1. Open i18n/translations.js
# 2. Add new language object
# 3. Add button in HTML
```

### Android App
```bash
# Requirements
# - Android Studio Hedgehog+
# - JDK 17
# - Android SDK 34

# Launch
cd android-app
# Open in Android Studio

# Next steps see in android-app/DEVELOPMENT.md
```

---

## 🤝 Contributing

Contributions are welcome:

### Web Version
- ✅ Adding new languages
- ✅ Improving UI/UX
- ✅ Fixing bugs
- ✅ New features

### Android App
- 🚧 Trip management screen
- 🚧 Trip planner
- 🚧 Calendar with visualization
- 🚧 Push notifications
- 🚧 Ukrainian and Russian languages
- 🚧 Tests

---

## 📄 License

MIT License - feel free to use, modify, and distribute.

---

## ⚠️ Important Notice

This application is for **informational purposes only**.
Always verify visa requirements with official sources before traveling.

Official information:
- 🇪🇺 [ec.europa.eu - Schengen area](https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en)
- 📱 [EU Short-Stay Calculator](https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/border-crossing/schengen-calculator_en)

---

## 📞 Contact

Project developed to help travelers comply with Schengen rules.

**Web version is ready to use!** ✅  
**Android version in active development!** 🚧

---

Made with ❤️ for travelers 🌍✈️
