# Facebook

[Source Code](https://github.com/nuxt-community/auth-module/blob/dev/lib/providers/facebook.js)

## Usage

    auth: {
      strategies: {
        facebook: {
          client_id: '...',
          userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
          scope: ['public_profile', 'email', 'user_birthday']
        },
      }
    }

Anywhere in your application logic:

    this.$auth.loginWith("facebook");

💁 This provider is based on [oauth2 scheme](../schemes/oauth2.md) and supports all scheme options.

## Obtaining `client_id`

This option is **REQUIRED**. To obtain one, create your app in [Facebook Developers](https://developers.facebook.com) and add “Facebook Login” product. Then set valid callback URLs. Client ID is same as your “App ID”.
