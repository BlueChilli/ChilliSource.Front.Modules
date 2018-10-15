# Accounts Guide

The Accounts front-end implementation is a set of components and helpers
which should give you the majority of the auth functionality out of the box
without having to reinvent the wheel during every project.

There's a little bit of setup though. 

## 1. Configure Swagger

Before you do anything, follow the setup instructions [here](/swagger.md).

## 2. Protect your app from unauthorized access.

There is a HOC that you can wrap around the target component of your route. Assuming your
app requires an authenticated to access all routes but `/accounts/*`, you probably only need 
to use this wrapper in your entrypoint.

Instead of this in `Entry.jsx`:

```js
<Route exact path="/" component={Home}/>
```

Use the `allowAuth` HOC to protect that route. 

```js
import {allowAuth} from "../modules/ReduxSwaggerAccount";
//
<Route exact path="/" component={allowAuth(Home)}/>
```






