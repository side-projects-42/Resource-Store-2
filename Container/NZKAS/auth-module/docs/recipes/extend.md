# Extending Auth plugin

If you have plugins that need to access `$auth`, you can use `auth.plugins` option.

`nuxt.config.js`

    {
      modules: [
        '@nuxtjs/auth'
      ],
      auth: {
         plugins: [ '~/plugins/auth.js' ]
      }
    }

`plugins/auth.js`

    export default function ({ $auth }) {
      if (!$auth.loggedIn) {
        return;
      }

      const username = $auth.user.username;
    }
