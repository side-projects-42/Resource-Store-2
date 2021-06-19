# Setup

Install with yarn:

    yarn add @nuxtjs/auth @nuxtjs/axios

Install with npm:

    npm install @nuxtjs/auth @nuxtjs/axios

Edit `nuxt.config.js`:

    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth'
    ],

    auth: {
      // Options
    }

::: warning IMPORTANT When adding `auth-module` to a new Nuxt project ensure you have activated the Vuex store. More information on how to do that can be found on the [Nuxt Getting Started Guide](https://nuxtjs.org/guide/vuex-store). :::
