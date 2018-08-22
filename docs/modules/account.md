# Account

This module contains quite a few things. Read the instructions carefully. There are not a lot of them anyways.

## Usage

### Module `Account`

---

Import it as such in your `App.js` file: <br>
`import Account from ../module/Account`

Then, inside the `chillifront` wrapper's first argument - array of `Mod`s - insert it anywhere like so: <br>
`new Account()`

This `Mod` also contains the reducers for account management and redux state. If you would like to modify them, you can modify them right in the file and they'll update instantly.

**NOTE**:
The current `initialState` for `Account` is as what is defined by the backend framework and as such, you should not change it. If you do, you'll have go through `Auth` and update the logic there in `mapStateToProps` correctly determine the authentication status for a user. That is, if you are using that component at all.

<br>

### Class `Account`

---

Import it as such in your `Entry` file: <br>
`import { Account } from '../components/Acount'`

Then, inside `Switch`, add it like so: <br>
`<Route path="/user" component={Account} />`

This component is the container for all the sub-routes for account views. By default, there are:

- `Login` : served at `/user/login`
- `Logout` : served at `/user/logout`
- `AcceptInvite` : served at `/user/acceptInvite`
- `Manage` : served at `/user/manage`
- `Register` : served at `/user/register`

There is one more step to make this component work. Each component requires an action for the component to work. I would not presume to know how you would like to handle actions in your project. Therefore the implementation of actions is left to you. However, here is a list of actions with their signatures to get you started:

- `loginUser`

```js
const loginUser = values => {
	/**
	 * At the end of the action, dispatch the
	 * following action
	 *
	 */
	dispatch({
		type: 'USER_LOGGED_IN',
		payload: data, // refer to structure below
	});
};
```

```ts
/**
 * Data
 */
const data = {
    impersonator?: Object,
    companyId?: number,
    companyName?: string,
    email: string,
    profilePhotoPath?: string,
    roles: string[],
    status: 'Registered' | 'Activated' | 'Deleted' | 'Invited'
};

/**
 * Values
 */
const values = {
    email?: string,
    password?: string,
};
```

<br>

- `registerUser`

```js
const registerUser = values => {
	/**
	 * You'll have to manually log in the user using
	 * the action above after completing registration.
	 *
	 */
};
```

```ts
/**
 * Values structure
 */
const values = {
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	acceptTermsConditions: boolean,
};
```

<br>

- `updateEmail`
- `updatePassword`
- `updateProfileDetails`
- `logoutUser`
