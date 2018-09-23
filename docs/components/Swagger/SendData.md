# `Swagger.SendData`

This component is basically a form wrapper built with `redux-form`. The wrapper, initially is a container for your form fields and the submit button. Once submission is complete, it injects the component with the response from the API, just like [`FetchData`](FetchData.md).

There are two ways you can use this component:

## Providing `children` or child component(s)

This method will inject the following props into your child component(s):

- `response`
- `modifiedData`

The `response` object is what you'll be interested in the most. It consists of the following:

- `isSending` : boolean
- `hasSentSuccessfully` : boolean
- `data` : any
- `error` : any

Have a look at the following example to understand what you can do.

```js
class Login extends React.Component {
	render() {
		const {
			response: { isSending, hasSentSuccessfully, data, error },
		} = this.props;

		if (hasSentSuccessfully && hasSentSuccessfully === true) {
			return (
				<React.Fragment>
					<h1>Login</h1>
					<p>You've been logged in!</p>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
				<h1>Login</h1>
				<TextField name="email" type="email" label="Email" required />
				<TextField name="password" type="password" label="Password" required />

				{hasSentSuccessfully === false && (
					<p className="error">{error.response.data.errorMessage}</p>
				)}

				<button className="margin-top-2">{isSending ? 'Logging in ...' : 'Login'}</button>
			</React.Fragment>
		);
	}
}

/************************************************************/

// Where you'd like to use it
return (
	<SendData apiPath="/account/login" type="POST">
		<Login />
	</SendData>
);

// OR
return (
	<SendData apiPath="post/api/v1/account/login">
		<Login />
	</SendData>
);
```

<br />

## Providing a child render function

This method consist of providing a function that'll render once the request has been completed.

> **NOTE** <br /><br />
> This method causes your provided function to be called every time it is re-rendered. > If you are going to be rendering something complex, you'd be better off using the > method above where you can have more control over rendering.

```js
<SendData apiPath="/user/current" type="PUT">
	{(response, modifiedData) => {

    // IT IS IMPORTANT TO RETURN A VALID REACT NODE
    // AT ALL TIMES
    return ...
  }}
</SendData>
```

```js
<SendData apiPath="put/api/v1/user/current">
	{(response, modifiedData) => {

    // IT IS IMPORTANT TO RETURN A VALID REACT NODE
    // AT ALL TIMES
    return ...
  }}
</SendData>
```

The `response` and `modifiedData` objects are the same as in [method 1](#providing-children-or-child-components) above.
