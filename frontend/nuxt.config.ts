// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: [
		'@nuxt/ui-pro',
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/content',
		'@nuxt/icon',
	],

	css: ['~/assets/css/main.css'],
})
