# `Swagger.ApiRequest`

This is a utility object to allow developers to make API request manually without being coupled to a view component. This utility object exposes six methods:

- `Get`
- `Post`
- `Put`
- `Patch`
- `Delete`
- `Base`

`Base` is the master request method and the other five methods are specialised aliases. You can use `Base` and one of the named methods and achieve exactly the same result.

<br >

> ## Importing

There are 3 different ways to import this component. I've only shown it for `Get` but its the same for others.

Take your pick.

- Object Spread

```js
import { ApiRequest: { Get }} from '../components/Swagger'

// Use it like this
Get(...).then().catch()
```

- Spread and Chain

```js
import { ApiRequest } from '../components/Swagger'

// Use it like this
ApiRequest.Get(...)
          .then()
          .catch()
```

- Chaining

```js
import Swagger from '../components/Swagger'

// Use it like this
Swagger.ApiRequest
          .Get(...)
          .then()
          .catch()
```

<br>

> ## Usage

Each of them has the same syntax but slightly different params. Just slightly:

### Syntax

```js
ApiRequest.<METHOD_NAME>(apiPath, {
  query: {...},
  path: {...},
  body: {...},
})
```

- `apiPath` : The URL for the API request(see examples below)
- `query`, `path`, `body` : Objects

<br>

#### `Get`

```js
ApiRequest.Get('/chapters/27');
```

```js
ApiRequest.Base('get/api/v1/chapters/{chapterId}', {
	path: {
		chapterId: 27,
	},
});
```

<br>

#### `Post`

```js
ApiRequest.Post('/account/login', {
  body: {
    email: ...,
    password: ...
  }
});
```

```js
ApiRequest.Base('post/api/v1/account/login', {
  body: {
    email: ...,
    password: ...
  }
});
```

<br>

#### `Put`

```js
ApiRequest.Put('/user/current', {
  body: {
    firstName: ...,
    lastName: ...
  }
});
```

```js
ApiRequest.Base('put/api/v1/user/current', {
  body: {
    firstName: ...,
    lastName: ...
  }
});
```

<br>

#### `Patch`

```js
ApiRequest.Patch('/user/current', {
  body: {
    password: ...,
    newPassword: ...,
    currentPassword: ...
  }
});
```

```js
ApiRequest.Base('patch/api/v1/user/current', {
  body: {
    password: ...,
    newPassword: ...,
    currentPassword: ...
  }
});
```

<br>

#### `Delete`

```js
ApiRequest.Delete('/users/16/sessions/current?summary=true');
```

```js
ApiRequest.Base('delete/api/v1/users/{id}/sessions/current', {
	path: {
		id: 16,
	},
	query: {
		summary: true,
	},
});
```
