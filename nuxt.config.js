export default {
  css: [
  '~/assets/scss/custom.scss'
  ],
  head: {
  meta: [
  { charset: 'utf-8' },
  { name: 'viewport', content:
  'width=device-width, initial-scale=1' }
  ],
  link: [{
  rel: 'stylesheet',
  href: 'https://font.com',
  }]
  },
  transition: {
  name: 'page',
  mode: 'out-in'
  },
  modules: ['bootstrap-vue/nuxt', 'bootstrap/nuxt'],
  devServerHandlers: []
 }



//  npx nuxi dev