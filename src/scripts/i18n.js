// The locale our app first shows
const defaultLocale = "en";

// The active locale
let locale;

// Gets filled with active locale translations
let translations = {};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  // Translate the page to the default locale
  setLocale(defaultLocale);
  bindLocaleSwitcher(defaultLocale);
});

// Binds the locale switcher to change the language
function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector("[i18n-switcher]");
  if (switcher) {
    switcher.value = initialValue;
    switcher.addEventListener("change", (e) => {
      setLocale(e.target.value);
    });
  }
}

// Loads translations for the given locale and translates the page
async function setLocale(newLocale) {
  if (newLocale === locale) return;

  const newTranslations = await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  translatePage();
}

// Fetches translations JSON object for the given locale
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/lang/${newLocale}.json`);
  if (!response.ok) {
    console.error(`Could not load translations for locale: ${newLocale}`);
    return {};
  }
  return await response.json();
}

// Translates the entire page by updating text content based on the current locale
function translatePage() {
  document.querySelectorAll("[i18n]").forEach(translateElement);
}

// Translates a single HTML element based on the i18n attribute
function translateElement(element) {
  const key = element.getAttribute("i18n");
  const translation = getNestedTranslation(translations, key);
  if (translation) {
    element.innerText = translation;
  }
}

// Helper function to get nested translation value using dot notation
function getNestedTranslation(obj, key) {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}
