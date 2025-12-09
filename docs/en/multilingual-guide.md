# 🌍 Multilingual Documentation Structure

> 📖 **Languages:** [English](./multilingual-guide.md) | [Русский](./multilingual-guide.ru.md)

This project supports **bilingual documentation** in English and Russian.

## 📂 Structure

```
eu_schengen_stay_calculator/
│
├── README.md                    # 🇬🇧 Main page (English - GitHub default)
├── README.ru.md                 # 🇷🇺 Main page (Russian)
│
├── docs/                        # Additional documentation
│   ├── en/                      # 🇬🇧 English documentation
│   │   ├── project-overview.md
│   │   └── project-structure.md
│   └── ru/                      # 🇷🇺 Russian documentation
│       ├── project-overview.md
│       └── project-structure.md
│
├── web-version/
│   ├── README.md                # 🇬🇧 English
│   └── README.ru.md             # 🇷🇺 Russian (planned)
│
└── android-app/
    ├── README.md                # 🇬🇧 English (planned)
    └── README.ru.md             # 🇷🇺 Russian (current)
```

## 🎯 Navigation

### Language Switchers

All documentation files include language switchers at the top:

```markdown
> 📖 **Languages:** [English](./filename.md) | [Русский](./filename.ru.md)
```

### GitHub Behavior

- **Default view:** `README.md` (English) is shown by default on GitHub
- **Russian version:** Available via `README.ru.md` link
- **Navigation:** Easy switching between languages using links

## 📖 Available Documentation

### Root Level
- 🇬🇧 [README.md](../README.md) - Project overview (English)
- 🇷🇺 [README.ru.md](../README.ru.md) - Обзор проекта (Russian)

### Detailed Documentation
| Document | 🇬🇧 English | 🇷🇺 Русский |
|----------|------------|------------|
| **Project Overview** | [EN](./en/project-overview.md) | [RU](./ru/project-overview.md) |
| **Project Structure** | [EN](./en/project-structure.md) | [RU](./ru/project-structure.md) |

### Module Documentation
| Module | 🇬🇧 English | 🇷🇺 Русский |
|--------|------------|------------|
| **Web Version** | [README](../web-version/README.md) | Planned |
| **Android App** | Planned | [README](../android-app/README.md) |
| **Android Quick Start** | Planned | [QUICKSTART](../android-app/QUICKSTART.md) |
| **Android Development** | Planned | [DEVELOPMENT](../android-app/DEVELOPMENT.md) |

## 🚀 Adding New Language

To add support for another language (e.g., Ukrainian):

1. **Create language folder:**
   ```bash
   mkdir -p docs/uk
   ```

2. **Translate documents:**
   ```bash
   cp docs/en/project-overview.md docs/uk/project-overview.md
   # Translate content to Ukrainian
   ```

3. **Add language switcher:**
   ```markdown
   > 📖 **Мови:** [English](../en/file.md) | [Русский](../ru/file.md) | [Українська](./file.md)
   ```

4. **Create root README:**
   ```bash
   cp README.md README.uk.md
   # Translate content
   ```

5. **Update all language switchers** in existing files

## 📋 Translation Status

| Document | 🇬🇧 EN | 🇷🇺 RU | 🇺🇦 UK | 🇩🇪 DE |
|----------|--------|--------|--------|--------|
| **Root README** | ✅ | ✅ | ⏳ | ⏳ |
| **Project Overview** | ✅ | ✅ | ⏳ | ⏳ |
| **Project Structure** | ✅ | ✅ | ⏳ | ⏳ |
| **Web README** | ✅ | ⏳ | ⏳ | ⏳ |
| **Android README** | ⏳ | ✅ | ⏳ | ⏳ |
| **Android QUICKSTART** | ⏳ | ✅ | ⏳ | ⏳ |
| **Android DEVELOPMENT** | ⏳ | ✅ | ⏳ | ⏳ |

Legend:
- ✅ Complete
- ⏳ Planned/In Progress

## 🎨 Best Practices

### File Naming
- English (default): `filename.md`
- Other languages: `filename.XX.md` (e.g., `filename.ru.md`)

### Language Codes
- 🇬🇧 English: `en`
- 🇷🇺 Russian: `ru`
- 🇺🇦 Ukrainian: `uk`
- 🇩🇪 German: `de`

### Language Switcher Format
Always include at the top of document:
```markdown
> 📖 **Languages:** [English](./link-en.md) | [Русский](./link-ru.md)
```

### Relative Links
Use relative paths for language switching:
- Same directory: `./filename.XX.md`
- Parent directory: `../filename.XX.md`
- Different language folder: `../XX/filename.md`

## 🌐 Contributing Translations

We welcome translations! Please:

1. Follow the naming convention (`filename.XX.md`)
2. Add language switchers to all pages
3. Keep formatting consistent
4. Update this guide with new language status

---

**Current Status:** 🇬🇧 English + 🇷🇺 Russian fully supported! ✅
