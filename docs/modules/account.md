# Account

This module is used to handle all the `Account` related things. It contains of one singular mod - `Account`.

<br>

## Usage

1. In your `App.js` file:

```js
import Account from '../modules/Account';
```

Then, inside the `chillifront` wrapper's first argument - array of `Mod` - insert it anywhere like so:

```js
new Account();
```

This `Mod` contains the reducers for account management and redux state. If you would like to modify them, you can modify them right in the file and they'll update instantly.

**NOTE**:
The current `initialState` for `Account` is as what is defined by the backend framework and as such, you should not change it. If you do, you'll have go through `Auth` and update the logic there in `mapStateToProps` correctly determine the authentication status for a user. That is, if you are using that component at all.
