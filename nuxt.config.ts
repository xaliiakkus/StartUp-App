// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://awesome-lib.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      style: [
        { children: ':root { background: white }' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: ['~/assets/css/main.css',"bootstrap/dist/css/bootstrap.min.css" ,"keen-slider/keen-slider.min.css" ,"vue-slick-carousel/dist/vue-slick-carousel.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})