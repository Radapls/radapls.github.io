export const DEFAULT_LOCALE_SETTING: string = 'en';

export const LOCALES_SETTING: LocaleSetting = {
	en: {
		label: '🇺🇸 English',
	},
	es: {
		label: '🇨🇴 Español',
	},
	'pt-br': {
		label: '🇧🇷 Português',
	},
};

interface LocaleSetting {
	[key: Lowercase<string>]: {
		label: string;
		lang?: string;
		dir?: 'rtl' | 'ltr';
	};
}
