import { getRelativeLocaleUrl } from 'astro:i18n';

// Importar todos los archivos de traducción
import en from './en.json';
import es from './es.json';

// Diccionario de traducciones disponibles
export const languages = {
  en: 'English',
  es: 'Español'
};

// Traducciones
export const translations = { en, es };

// Función para obtener la traducción según el idioma
export function getTranslations(lang) {
  return translations[lang] || translations.en;
}

// Función para cambiar el idioma
export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang;
  }
  return 'en';
}

// Función para generar URL con el idioma
export function useTranslatedPath(lang) {
  return function translatePath(path) {
    return getRelativeLocaleUrl(lang, path);
  };
}