// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,

  app: {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: '%s | IT Fluke',
        meta: [
            {
                name: 'author',
                content: 'IT Fluke, Thailand'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=5'
            }
        ]
    }
},
  
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-icon'
    // [
    //   // Nuxt Robots
    //   '@nuxtjs/robots',
    //   {
    //     UserAgent: "*",
    //     Disallow: ""
    //   }
    // ],

  ],

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    }
  },






})
