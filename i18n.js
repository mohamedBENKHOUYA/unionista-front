import fr from '../locales/fr.json';
import en from '../locales/en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    fr: {
        translation: fr,
    },
    en: {
        translation: en,
    },
    es: {
        translation: en,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'fr',
    interpolation: {
        espaceValue: false,
    },
});

export default i18n;
