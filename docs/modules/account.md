# Account

This module contains quite a few things. Read the instructions carefully. There are not a lot of them anyways.

### **NOTE** This module requires `CenteredComponent`, `Auth` & `PortalModal` modules to work properly. If you would like to use this component without the above modules, you'll need to modify the source yourself. Happy coding!

<br>

## Usage

- ### Module `Account`

---

Import it as such in your `App.js` file: <br>
`import AccountMod from ../module/Account`

Then, inside the `chillifront` wrapper's first argument - array of `Mod`s - insert it anywhere like so: <br>
`new AccountMod()`

This `Mod` also contains the reducers for account management and redux state. If you would like to modify them, you can modify them right in the file and they'll update instantly.

**NOTE**:
The current `initialState` for `Account` is as what is defined by the backend framework and as such, you should not change it. If you do, you'll have go through `Auth` and update the logic there in `mapStateToProps` correctly determine the authentication status for a user. That is, if you are using that component at all.

<br>

- ### Class `Account`

---

Import it as such in your `Entry` file: <br>
`import { Account } from '../components/Acount'`

Then, inside `Switch`, add it like so: <br>
`<Route path="/user" component={Account} />` <br>
**DO NOT ADD THE `exact` PARAMETER TO ROUTE**

This component is the container for all the sub-routes for account views. By default, there are:

- `Login` : served at `/user/login`
- `Logout` : served at `/user/logout`
- `Manage` : served at `/user/manage`
- `Register` : served at `/user/register`
- `AcceptInvite` : served at `/user/acceptInvite`

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

```js
const updateEmail = values => {
  /**
	 * At the end of the action, dispatch the
	 * following action
	 *
	 */
	dispatch({
		type: 'UPDATE_EMAIL',
		payload: <NEW_EMAIL_ADDRESS_HERE>
	});
}
```

```ts
/**
 * Values structure
 */
const values = {
	emailSpecified: true,
	email: string,
};
```

<br>

- `updatePassword`

```js
const updatePassword = values => {
	/**
	 * No need to do anything after the
	 * action is complete since we usually
	 * do not store passwords anywhere in plaintext.
	 */
};
```

```ts
/**
 * Values structure
 */
const values = {
	passwordSpecified: true,
	/** The new password chosen by the user */
	password: string,
	/** The current password for the account */
	currentPassword: string,
};
```

<br>

- `updateProfileDetails`

```js
const updateProfileDetails = values => {
	/**
	 * At the end of the action, dispatch the
	 * following action
	 *
	 */
	dispatch({
		type: 'UPDATE_PROFILE_DETAILS',
		payload: data,
	});
};
```

```ts
/**
 * Values structure
 */
const values = {
	firstName: string,
	lastName: string,
	profilePhotoFile: File,
};

/**
 * Data
 */
const data = {
	firstName: string,
	lastName: string,
	profilePhotoPath: string,
};
```

<br>

- `logoutUser`

```js
const logoutUser = () => {
	/**
	 * At the end of the action, dispatch the
	 * following action
	 *
	 */
	dispatch({
		type: 'USER_LOGGED_OUT',
	});
};
```
