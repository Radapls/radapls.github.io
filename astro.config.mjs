import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import critters from 'astro-critters';
import { defineConfig } from 'astro/config';

const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;
const SERVER_PORT = 8888;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}/`;
const PROD_URL = 'https://radapls.github.io';

let BASE_URL;
if (isProd) {
	BASE_URL = PROD_URL;
} else if (isDev) {
	BASE_URL = LOCALHOST_URL;
}

/**
 * This are the current configurations for the project
 * More info: https://astro.build/config
 */
export default defineConfig({
	image: {
		quality: 80,
	},
	site: BASE_URL,
	server: {
		port: SERVER_PORT,
		host: true,
	},
	prefetch: {
		prefetchAll: true,
	},
	integrations: [sitemap(), mdx(), critters()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'pt-br'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});
