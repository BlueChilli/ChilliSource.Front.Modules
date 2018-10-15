# Account

### **NOTE** This module requires `CenteredComponent`, `Auth` & `PortalModal` modules to work properly. If you would like to use this component without the above modules, you'll need to modify the source yourself. Happy coding!

<br>

## Usage

1. Import it as such in your `Entry` file: <br>

```js
import { Account } from '../components/Acount';
```

2. Inside `Switch`, add it like so:

```js
<Route path="/user" component={Account} />
```

**DO NOT ADD THE `exact` PARAMETER TO ROUTE**

## Individual Components

This component is the container for all the sub-routes for account views. By default, there are:

- `Login` : served at `/user/login`
- `Logout` : served at `/user/logout`
- `Manage` : served at `/user/manage`
- `Register` : served at `/user/register`
- `AcceptInvite` : served at `/user/acceptInvite`
- `ForgotPassword` : served at `/user/forgot`
- `ResetPassword` : served at `/user/resetpassword`

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

- `forgotPassword`

```js
const forgotPassword = values => {};
```

```ts
/**
 * Values structure
 */
const values = {
	email: string,
};
```

<br>

- `resetPassword`

```js
const resetPassword = values => {
	/**
	 * At the end of the action, use the
	 * email and password to log the user in
	 * and redirect to dashboard or such
	 *
	 */
};
```

```ts
/**
 * Values structure
 */
const values = {
	email: string,
	token: string,
	newPassword: string,
	confirmPassword: string,
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
