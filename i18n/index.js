/**
 * Internationalization (i18n) Module
 * Central module for managing translations across the application.
 * 
 * To add a new language:
 * 1. Create a new file in this folder (e.g., 'fr.js' for French)
 * 2. Copy the structure from an existing language file
 * 3. Translate all strings
 * 4. Import the new language below and add it to the translations object
 * 5. Add a language button in the HTML
 */

import de from './de.js';
import en from './en.js';
import uk from './uk.js';
import ru from './ru.js';

// All available translations
const translations = {
    de,
    en,
    uk,
    ru
};

// Default language (fallback)
const DEFAULT_LANG = 'de';

// Current language
let currentLang = DEFAULT_LANG;

/**
 * Get list of available languages
 * @returns {string[]} Array of language codes
 */
export function getAvailableLanguages() {
    return Object.keys(translations);
}

/**
 * Get current language code
 * @returns {string} Current language code
 */
export function getCurrentLanguage() {
    return currentLang;
}

/**
 * Set current language
 * @param {string} lang - Language code to set
 * @returns {boolean} True if language was set successfully
 */
export function setCurrentLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        return true;
    }
    console.warn(`Language '${lang}' not found. Available: ${getAvailableLanguages().join(', ')}`);
    return false;
}

/**
 * Get translation for a key
 * @param {string} key - Translation key
 * @returns {string|string[]} Translated string or array, or key if not found
 */
export function t(key) {
    return translations[currentLang]?.[key]
        ?? translations[DEFAULT_LANG]?.[key]
        ?? key;
}

/**
 * Get translation with placeholder substitution
 * @param {string} key - Translation key
 * @param {...any} args - Values to substitute for {0}, {1}, etc.
 * @returns {string} Translated string with placeholders replaced
 */
export function tf(key, ...args) {
    let text = t(key);
    if (typeof text === 'string') {
        args.forEach((arg, index) => {
            text = text.replace(`{${index}}`, arg);
        });
    }
    return text;
}

/**
 * Get month name by index
 * @param {number} index - Month index (0-11)
 * @returns {string} Full month name
 */
export function getMonthName(index) {
    const months = t('months');
    return Array.isArray(months) ? months[index] : '';
}

/**
 * Get short month name by index
 * @param {number} index - Month index (0-11)
 * @returns {string} Short month name
 */
export function getMonthNameShort(index) {
    const months = t('monthsShort');
    return Array.isArray(months) ? months[index] : '';
}

/**
 * Get weekday name by index
 * @param {number} index - Weekday index (0-6, Monday-Sunday)
 * @returns {string} Weekday name
 */
export function getWeekday(index) {
    const weekdays = t('weekdays');
    return Array.isArray(weekdays) ? weekdays[index] : '';
}

/**
 * Get the translations object for direct access if needed
 * @returns {object} All translations
 */
export function getAllTranslations() {
    return translations;
}

// Export as default object for convenience
export default {
    translations,
    t,
    tf,
    getAvailableLanguages,
    getCurrentLanguage,
    setCurrentLanguage,
    getMonthName,
    getMonthNameShort,
    getWeekday,
    getAllTranslations
};
