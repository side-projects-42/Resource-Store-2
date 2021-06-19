# GitHub

[Source Code](https://github.com/nuxt-community/auth-module/blob/dev/lib/providers/github.js)

## Usage

    auth: {
      strategies: {
          github: {
            client_id: '...',
            client_secret: '...'
          },
      }
    }

Anywhere in your application logic:

    this.$auth.loginWith("github");

💁 This provider is based on [oauth2 scheme](../schemes/oauth2.md) and supports all scheme options.

## Obtaining `client_id` and `client_secret`

This option is **REQUIRED**. To obtain one, create your app in [Create a new Oauth APP](https://github.com/settings/applications/new) and use provided “Client ID” and “Client Secret”.
