# storage

[Source Code](https://github.com/nuxt-community/auth-module/blob/dev/lib/core/storage.js)

Auth module has a built-in powerful and universal storage to keep tokens and profile data.

## Universal Storage

Universally keep state in vuex, localStorage and Cookies:

    this.$auth.$storage.setUniversal(key, val, isJson);
    this.$auth.$storage.getUniversal(key, isJson);
    this.$auth.$storage.syncUniversal(key, defaultValue, isJson);

## Local State

Access to local state:

    this.$auth.$state;
    // OR
    this.$auth.$storage.$state;

    this.$auth.$storage.setState(key, val);
    this.$auth.$storage.getState(key);

    // Watch state changes
    this.$auth.$storage.watchState("loggedIn", (newValue) => {});

## Cookies

    this.$auth.$storage.setCookie(key, val, isJson);
    this.$auth.$storage.getCookie(key);

## Local Storage

    this.$auth.$storage.setLocalStorage(key, val, isJson);
    this.$auth.$storage.getLocalStorage(key);
