![open-api](api.png)

[![Build Status][travis-img]][travis]

This repository contains Netlify's API definition in the [Open API format][open-api-2], formerly known as Swagger.

It's still a work in progress and we welcome feedback and contributions.

## Usage

The [`swagger.yml`](swagger.yml) file is the master copy of the Open API 2.0 definition. Additional context on using the API can be found on our [docs site](https://www.netlify.com/docs/api/).

The spec is published and versioned for various ecosystems:

### SwaggerUI (Web UI)

You can view the definition using [Swagger UI](https://swagger.io/tools/swagger-ui/) by visiting [open-api.netlify.com](http://open-api.netlify.com) which provides limited interaction with the API from the browser.

### Go Client

[![GoDoc][godoc-img]][godoc]
[![Go Report Card][goreport-img]][goreport]
[![Github release][git-img]][git]

```console
$ go get github.com/netlify/open-api/...
```

- [Porcelain](https://godoc.org/github.com/netlify/open-api/v2/go/porcelain): High level interactions and operations
- [Plumbing](https://godoc.org/github.com/netlify/open-api/v2/go/plumbing): Low level client operations generated by [go-swagger][go-swagger]
- [Models](https://godoc.org/github.com/netlify/open-api/v2/go/models): Models generated by [go-swagger][go-swagger]

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how this client is developed and generated.

### JS Client

[![npm version][npm-js-img]][npm-js] [![downloads][dl-js-img]][dl-js]

We have a fully featured JS/Node.js client that implements some of the same 'porcelain' methods that the go client does in addition to the open-api methods.

See [github.com/netlify/js-client](https://github.com/netlify/js-client) for more details.

#### npm module

[![npm version][npm-img]][npm]

You can also consume the swagger spec as an npm module:

```console
$ npm install @netlify/open-api
# or
$ yarn add @netlify/open-api
```

```js
import spec from '@netlify/open-api' // import the spec object into your project
```

The module also ships a copy of the original `yml` spec file at `@netlify/open-api/js/dist/swagger.yml`. You can use these with generic swagger/open-api clients:

##### swagger-js

Swagger's JS client can dynamically create a client from a spec either from a URL or spec object.

See the [swagger-js](https://github.com/swagger-api/swagger-js) client:

##### Usage

```js
<script src='browser/swagger-client.js' type='text/javascript'></script>
<script>
var swaggerClient = new SwaggerClient('https://open-api.netlify.com/swagger.json');
</script>
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more info on how to make contributions to this project.

## License

MIT. See [LICENSE](LICENSE) for more details.

[travis-img]: https://travis-ci.org/netlify/open-api.svg?branch=master
[travis]: https://travis-ci.org/netlify/open-api
[npm-img]: https://img.shields.io/npm/v/@netlify/open-api.svg
[npm]: https://npmjs.org/package/@netlify/open-api
[npm-js-img]: https://img.shields.io/npm/v/netlify.svg
[npm-js]: https://npmjs.org/package/netlify
[dl-js-img]: https://img.shields.io/npm/dm/netlify.svg
[dl-js]: https://npmjs.org/package/netlify
[godoc-img]: https://godoc.org/github.com/netlify/open-api/v2/go?status.svg
[godoc]: https://godoc.org/github.com/netlify/open-api/v2/go
[goreport-img]: https://goreportcard.com/badge/github.com/netlify/open-api/v2
[goreport]: https://goreportcard.com/report/github.com/netlify/open-api/v2
[git-img]: https://img.shields.io/github/release/netlify/open-api.svg
[git]: https://github.com/netlify/open-api/releases/latest
[open-api-2]: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md
[go-swagger]: https://github.com/go-swagger/go-swagger