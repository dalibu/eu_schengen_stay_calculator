# 🇪🇺 Schengen Stay Calculator

A visual calculator for tracking and planning stays in the Schengen Area according to the 90/180-day rule.

## 📋 About

Third-country nationals visiting the Schengen Area are limited to **90 days within any rolling 180-day period**. This calculator helps you:

- Track your past stays in the Schengen zone
- Calculate remaining days you can legally stay
- Plan future trips without exceeding the limit
- Visualize your travel history on an interactive calendar

## ✨ Features

- **90/180 Day Calculator** - Accurately calculates days used and remaining
- **Interactive Calendar** - Visual overview of stays across multiple years
- **365-Day Circular Chart** - Beautiful visualization of your travel patterns
- **Trip Planner** - Find the earliest date you can enter for a desired stay duration
- **Multi-language Support** - German, English, Ukrainian, Russian
- **Data Persistence** - Stays saved in browser local storage
- **Import/Export** - Backup and restore your data as JSON
- **Responsive Design** - Works on desktop and mobile devices
- **No Server Required** - Runs entirely in the browser

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/eu_schengen_stay_calculator.git
   ```

2. Open `schengen_stay_calculator.html` in your browser

That's it! No build steps or dependencies required.

## 📁 Project Structure

```
eu_schengen_stay_calculator/
├── schengen_stay_calculator.html  # Main application
├── styles.css                      # Stylesheet
└── i18n/                           # Internationalization
    ├── de.js                       # German translations
    ├── en.js                       # English translations
    ├── uk.js                       # Ukrainian translations
    ├── ru.js                       # Russian translations
    ├── translations.js             # Combined bundle for browser
    └── index.js                    # ES6 module (for bundlers)
```

## 🌍 Adding a New Language

1. Copy `i18n/en.js` to `i18n/xx.js` (where `xx` is the language code)
2. Translate all strings in the new file
3. Add the import to `i18n/translations.js`:
   ```javascript
   const xx = { ... };  // Your translations
   const translations = { de, en, uk, ru, xx };
   ```
4. Add a language button in `schengen_stay_calculator.html`:
   ```html
   <button class="lang-btn" onclick="setLanguage('xx')" data-lang="xx">XX</button>
   ```

## 📜 The 90/180 Rule Explained

The Schengen visa rule states that short-stay visitors may remain in the Schengen Area for a maximum of **90 days within any 180-day period**. This is a rolling window, meaning:

- On any given day, you look back 180 days
- Count how many days you've spent in the Schengen zone
- This number must not exceed 90

This calculator uses the official EU calculation method to help you stay compliant.

## 🛠️ Technologies

- Pure HTML, CSS, and JavaScript
- No frameworks or build tools required
- Canvas API for circular chart visualization
- Local Storage API for data persistence

## 📄 License

MIT License - feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new language translations
- Report bugs or suggest features
- Improve the UI/UX
- Fix calculation edge cases

---

**Disclaimer**: This tool is for informational purposes only. Always verify visa requirements with official sources before traveling.
