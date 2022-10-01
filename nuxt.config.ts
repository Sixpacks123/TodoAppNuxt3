// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    router: {
      base: '/TodoAppNuxt3/'
    },
    modules: [
        'cookie-universal-nuxt'
    ]
})
