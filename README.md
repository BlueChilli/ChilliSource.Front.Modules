# BC FE App setup

## 1. Install boilerplate

`react-create-app <nameofapp>`

## 2. Install chillifront

`yarn add https://github.com/BlueChilli/ChilliSource.Front.git`

## 3. Add Redux Store

```js
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers} from "redux-immutablejs";

// Optional Middleware
const middleware = [];

export default function configureStore(initialState, modReducers = {}, modMiddleware = [], modStoreEnhancers = []) {
    const composedEnhancers = composeWithDevTools(
        applyMiddleware(...modMiddleware.concat(middleware)),
        ...modStoreEnhancers
    );

    const rootReducer = combineReducers(modReducers);
    return createStore(rootReducer, initialState, composedEnhancers);
}
```


## 4. App.js boilerplate

Replace `./src/App.js` with:

```js
import chillifront from "chillifront";
import configureStore from "./redux/configureStore";
import Entry from "./App/Entry";
export default chillifront(
    [
        /* Mods go here */
    ],
    configureStore
)(Entry);

``` 

## 5. Entrypoint

Make a directory called `./App/Entry.jsx`

```js
import React, {Fragment} from 'react'
import {Switch} from "react-router";

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <nav>Winning</nav>
        <Switch>
          {this.props.routes}
        </Switch>
      </Fragment>
    )
  }
}
```

(from here `yarn start` should give you a hello world)

## 6. Set up environment variables

* Create a file in your front end root called `.env.development.local`

Note: Remember to prefix your vars with `REACT_APP_`. Access these in the app with `process.env.REACT_APP_VARNAME`. Read the react-create-app docs.

## 7. Set up HTTPS

Add `HTTPS=true` to your `.env.development.local` file.

## 8. Set up Sass

Instructions are [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

But here's the short story:

`yarn add npm-run-all node-sass-chokidar -D`

In `package.json`:

*Important*: remove `start` and `build` scripts before pasting.

```
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
"start-js": "react-scripts start",
"start": "npm-run-all -p watch-css start-js",
"build-js": "react-scripts build",
"build": "npm-run-all build-css build-js",
```

## 9. Modules

Install the `HelloWorld` module as a test.

* mkdir `/src/modules`
* copy "HelloWorld" module in.
* Add it as a module in './src/App.js'

```
import HelloWorld from "./modules/HelloWorld";
...
export default chillifront(
  [
    new HelloWorld()
...
```

The component creates a route `/helloworld`. 

## 10. Other modules which you might need

* PersistState 
* 404 (Gives you some 404 love)
* ReduxThunk (middleware)
* ReduxPromiseMiddleware
