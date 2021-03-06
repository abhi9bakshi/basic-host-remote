# Basic SSR Example

Module Federation Server Side Rendering example using [loadable-components](https://www.npmjs.com/package/@loadable/component), [webpack-federation-module-id-plugin](https://www.npmjs.com/package/webpack-federation-module-id-plugin), and [webpack-federation-stats-plugin](https://www.npmjs.com/package/webpack-federation-stats-plugin)

This example demos a basic host application loading remote component.

- `website1` is the host application.
- `website2` standalone application which exposes `Header` component.

## Running Demo

Run `yarn build && yarn serve`. This will build and serve both `website1` and `website2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
  <img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/ServerSideRendering">
