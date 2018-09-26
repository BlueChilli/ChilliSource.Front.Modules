# Getting Started

This is a starter pack to get started on BlueChilli web app projects. Here you'll find the guides to implement your designs. It utilises [React 16](https://reactjs.org/), [Redux](https://redux.js.org) and [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy)

## Quick Install

1. Run the command below:
   `npx bc-starter-template <project-directory>`

2. When promted, choose the modules you need and then off you go.

## Manual Install

1. Install boilerplate <br />
   `create-react-app <YOUR_APP_NAME_IN_SMALL_CASE>`

2. Change into the target directory created above and then <br />
   `yarn add chillifront`

3. Create Redux Store

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

// Optional Middleware
const middleware = [];

export default function configureStore(
	initialState,
	modReducers = {},
	modMiddleware = [],
	modStoreEnhancers = []
) {
	const composedEnhancers = composeWithDevTools(
		applyMiddleware(...modMiddleware.concat(middleware)),
		...modStoreEnhancers
	);

	const rootReducer = combineReducers(modReducers);
	return createStore(rootReducer, initialState, composedEnhancers);
}
```

4. Update `App.js` with the following:

```js
import chillifront from 'chillifront';
import configureStore from './redux/configureStore';
import Entry from './App/Entry';
export default chillifront(
	[
		/* Mods go here */
	],
	configureStore
)(Entry);
```

5. Create Entry Point. <br />
   Make sure you are in your project directory. Create a file in the `App` folder called `Entry.jsx`. Add following code to it:

```js
import React, { Fragment } from 'react';
import { Switch } from 'react-router';

export default class extends React.Component {
	render() {
		return (
			<Fragment>
				<nav>Winning</nav>
				<Switch>{this.props.routes}</Switch>
			</Fragment>
		);
	}
}
```

6. Setup Styles

- Install `node-sass-chokidar` : `yarn add npm-run-all node-sass-chokidar -D`
- Go to `package.json` and remove the `start` and `build` scripts. Paste the following code in its place:

```json
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
"start-js": "react-scripts start",
"start": "npm-run-all -p watch-css start-js",
"build-js": "react-scripts build",
"build": "npm-run-all build-css build-js",
```

7. Environment Variables <br />
   There will be a file called `.env-cmdrc` in your project folder root. That is one place where you set all your environment variables. <br /><br />
   **NOTE** : Remember to prefix your variables with `REACT_APP_` or else they won't be loaded into the environment.

<br />

### At this point, running `yarn start` should give you a Hello World app in your browser. The following are optional steps if your project requires it.

<br />
<br />

8. Importing Modules
   Since this project, at least at this stage, is meant for internal use within BC. Therefore, if you haven't already, clone the repo [ChilliSource.Front.Modules](https://github.com/BlueChilli/ChilliSource.Front.Modules). <br /><br />
   You should copy over the following modules to the new app's `src/modules/` folder:

- [ ] `PersistState`
- [ ] `404`
- [ ] `ReduxThunk`
- [ ] `ReduxPromiseMiddleware`

Then, modify your `App.js`:

```diff
  import chillifront from "chillifront";
  import configureStore from "./redux/configureStore";
  import Entry from "./App/Entry";
+ import PersistState from "./modules/PersistState/index";
+ import NotFoundPage from "./modules/404/index";
+ import ReduxThunk from "./modules/ReduxThunk/index";
+ import ReduxPromiseMiddleware from "./modules/ReduxPromiseMiddleware/index";

  export default chillifront(
    [
+     new PersistState(),
+     new NotFoundPage(),
+     new ReduxThunk(),
+     new ReduxPromiseMiddleware()
    ],
    configureStore
  )(Entry);
```

# Contents

- [Style Helpers](/style-helpers/index.md)
- [Modules](/modules/index.md)
- [Logging](/logging.md)
- [Swagger](/swagger.md)
- [Components](/components/index.md)
- [Contributing](/dev/index.md)
