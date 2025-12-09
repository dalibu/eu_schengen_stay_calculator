# 📂 Project Structure

> 📖 **Languages:** [English](./project-structure.md) | [Русский](../ru/project-structure.md)

After reorganization, the project has the following structure:

```
eu_schengen_stay_calculator/
│
├── 📄 README.md                 # Main project page (English)
├── 📄 README.ru.md              # Russian version
│
├── 📖 docs/                     # Documentation
│   ├── en/                      # English documentation
│   │   ├── project-overview.md
│   │   └── project-structure.md
│   └── ru/                      # Russian documentation
│       ├── project-overview.md
│       └── project-structure.md
│
├── 🌐 web-version/              # ✅ Web version (100% ready)
│   ├── schengen_stay_calculator.html
│   ├── styles.css
│   ├── favicon.png
│   ├── i18n/
│   │   └── translations.js      # DE, EN, UK, RU
│   ├── nginx/
│   │   └── nginx.conf
│   ├── docker-compose.yml
│   ├── docker-compose.simple.yml
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── deploy.sh
│   ├── DEPLOYMENT.md            # Deployment instructions
│   └── README.md                # Web version description
│
└── 📱 android-app/              # 🚧 Android version (35% ready)
    ├── app/
    │   ├── src/main/
    │   │   ├── java/com/schengen/calculator/
    │   │   │   ├── data/        # Repository + DB
    │   │   │   ├── domain/      # Business logic
    │   │   │   ├── ui/          # Jetpack Compose UI
    │   │   │   ├── MainActivity.kt
    │   │   │   └── SchengenApplication.kt
    │   │   ├── sqldelight/      # SQLDelight schema
    │   │   ├── res/             # Android resources
    │   │   └── AndroidManifest.xml
    │   ├── build.gradle.kts
    │   └── proguard-rules.pro
    ├── build.gradle.kts
    ├── settings.gradle.kts
    ├── gradle.properties
    ├── .gitignore
    ├── README.md                # Android project overview
    ├── QUICKSTART.md            # Quick start guide
    ├── DEVELOPMENT.md           # Development roadmap
    ├── PROJECT_SUMMARY.md       # Status report
    └── FILES_LIST.md            # Complete file list
```

## 🎯 Project Navigation

### For Web Version Users
→ Go to **`web-version/`**
→ Open **`schengen_stay_calculator.html`**

### For Android Developers
→ Go to **`android-app/`**
→ Open folder in **Android Studio**
→ See **`QUICKSTART.md`**

### For Web Deployment
→ See **`web-version/DEPLOYMENT.md`**
→ Use Docker Compose

## 📊 What's Where

| What you need | Where to find |
|---------------|---------------|
| Run web version | `web-version/schengen_stay_calculator.html` |
| Deploy to server | `web-version/DEPLOYMENT.md` |
| Open Android project | `android-app/` → Android Studio |
| Android quick start | `android-app/QUICKSTART.md` |
| Android development plan | `android-app/DEVELOPMENT.md` |
| Compare versions | `docs/en/project-overview.md` |
| General information | `README.md` |

## 🔄 Changes

**Reorganized:**
- All web files moved to `web-version/`
- All functionality preserved
- Documentation paths updated

**Added:**
- Full Android version in `android-app/`
- New main `README.md`
- `docs/` folder with EN/RU documentation
- Language switchers in all README files

**Benefits of new structure:**
- ✅ Clear separation of web and Android versions
- ✅ No file confusion
- ✅ Easier navigation
- ✅ Simpler independent deployment

## 🌍 Multilingual Documentation

All major documentation is available in:
- 🇬🇧 English (default for GitHub)
- 🇷🇺 Russian

**Structure:**
- Root: `README.md` (EN) + `README.ru.md` (RU)
- Documentation: `docs/en/` and `docs/ru/`
- Each folder has localized README files

**Navigation:**
Language switchers are available at the top of each document:
```markdown
> 📖 **Languages:** [English](./file.md) | [Русский](./file.ru.md)
```

## 🚀 Getting Started?

1. **Want to use the calculator?**
   ```bash
   cd web-version
   open schengen_stay_calculator.html
   ```

2. **Want to develop Android version?**
   ```bash
   cd android-app
   # Read QUICKSTART.md
   ```

3. **Want to deploy to server?**
   ```bash
   cd web-version
   # Read DEPLOYMENT.md
   ```

---

**Structure is clear and logical!** 🎉
