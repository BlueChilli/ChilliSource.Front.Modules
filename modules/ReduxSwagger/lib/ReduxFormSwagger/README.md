# Redux Form Swagger API

Heavily informal documentation. This file should be superceded by something better.

## How to get the raw data

```js
import {getAlreadyLoadedSwaggerData, loadSwaggerDataPromise, setSwaggerEndpoint} from "./swaggerLoader";
```


You'll need to set the swagger endpoint. You can do it explicitly with

```
setSwaggerEndpoint("https://name.of.endpoint/swagger/);
```

However, if you don't set this, the presence of specific environment variables should make it happen (not done yet)


To grab swagger payload as a promise use `loadSwaggerDataPromise`

```js

// Payload will be cached
loadSwaggerData.then( payload => console.log(payload) );
```

If you're working on a component which is wrapped around the `SwaggerLoaderDecorator` component,
chances are it's already in memory.


```js
getSwaggerData();
```


## How to read the raw data

