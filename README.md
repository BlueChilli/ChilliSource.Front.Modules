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
import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
};
```

(from here `yarn start` should give you a hello world)


