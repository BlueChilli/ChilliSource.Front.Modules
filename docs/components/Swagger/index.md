# Swagger

This is unarguably one of the most of touchy topics for devs to agree upon. Everyone has their way of writing code and thus, different opinions. I consider myself neither experienced or opinionated enough to be able to decide on behalf of all devs so I'm gonna take the easy route and let the dev decide for himself.

This component exports two components - `FetchData` & `SendData` -  and one utility - `ApiRequest`. This was based on two different usecases - one as wrapper for React view components and another a way to manually execute API requests without being directly coupled with a view component.

<br />

## `FetchData`
This component is primarily intended as a way to fetch data and display it without involving the store. Websites that don't require registration or public websites can use this without having to complicate the state. [Read the docs](FetchData.md)

>  ## Importing

You can do either :
```js
import Swagger from '../components/Swagger'

...

<Swagger.FetchData ...>{...}</Swagger.FetchData>
```
or
```js
import { FetchData } from '../components/Swagger'

...

<FetchData ...>{...}</FetchData>
```

> ## Usage

### Basic
```js
<FetchData apiPath="/chapters">
  {...}
</FetchData>
```
<br />

### Basic with path arguments
```js
<FetchData apiPath="/chapters/27">
{...}
</FetchData>
```
or
```js
<FetchData apiPath="/chapters/{chapterId}" 
           pathArgs={{ chapterId: 27 }}>
{...}
</FetchData>
```
<br />

### Basic with path & query arguments
```js
<FetchData apiPath="/chapters/27?questions=false">
{...}
</FetchData>
```
or
```js
<FetchData apiPath="/chapters/{chapterId}" 
           pathArgs={{ chapterId: 27 }} 
           queryArgs={{ questions: false }}>
{...}
</FetchData>
```


<br />

## `SendData`
This component is primarily intended as a way to make API requests the React way - using components that can be inserted as and where you feel like.  Its a pure component and has nothing to with the store. [Read the docs](SendData.md)

>  ## Importing

You can do either :
```js
import Swagger from '../components/Swagger'

...

<Swagger.SendData ...>{...}</Swagger.SendData>
```
or
```js
import { SendData } from '../components/Swagger'

...

<SendData ...>{...}</SendData>
```

> ## Usage

### Basic
```js
<SendData apiPath="/account/login" type="POST">
{...}
</SendData>
```
or
```js
<SendData apiPath="post/account/login"> 
/**
 * You can copy this( ^ ) full path from the
 * SwaggerView(https://localhost:9009) or the
 * swagger docs for the project
 */
{...}
</SendData>
```
<br />

### Basic with path args
```js
<SendData apiPath="/chapters/27/lessons/149" type="PUT">
{...}
</SendData>
```
or
```js
<SendData apiPath="put/chapters/{chapterId}/lessons/{id}" 
          pathArgs={{ chapterId: 27, id: 149 }}>
{...}
</SendData>
```
<br />

### Basic with path args & queryArgs
```js
<SendData apiPath="/group/32/users/12?summary=true" type="DELETE">
{...}
</SendData>
```
or
```js
<SendData apiPath="delete/group/{groupId}/users/{id}" 
          pathArgs={{ groupId: 32, id: 12 }} 
          queryArgs={{ summary: true }}>
{...}
</SendData>
```


<br />

## `ApiRequest`
This a utility to make API request on your own. It always returns a Promise. If the request can not be made it returns a Promise that rejects with an error object.  [Read the docs](ApiRequest.md)

>  ## Importing

You can do either :
```js
import Swagger from '../components/Swagger'

...

Swagger.ApiRequest.Get(...)
```
or
```js
import { ApiRequest } from '../components/Swagger'

...

ApiRequest.Get(...)
```
<br />

>  ## Methods
- `ApiRequest.Get`
- `ApiRequest.Post`
- `ApiRequest.Put`
- `ApiRequest.Patch`
- `ApiRequest.Delete`

There is also one another method - `ApiRequest.Base` - which allows you to customise every part of a network request to your liking.

<br />

>  ## Usage

### Basic
```js
ApiRequest.Get("/chapters")
          .then(response => ...)
          .catch(error => ...)
```
```js
ApiRequest.Post("/account/login", {
            body: { email, password }
          })
          .then(response => ...)
          .catch(error => ...)
```
<br />

### Basic with path args
```js
ApiRequest.Get("/chapters/{chapterId}/lessons/{id}", {
            path: {
              chapterId: 27,
              id: 149
            }   
          })
          .then(response => ...)
          .catch(error => ...)
```
```js
ApiRequest.Post("/chapters/{chapterId}/lessons/{id}", {
            path: {
              chapterId: 27,
              id: 149
            },
            body: {
              completed: true
            }
          })
          .then(response => ...)
          .catch(error => ...)
```
<br />

### Basic with path & query args
```js
ApiRequest.Delete("/group/{groupId}/users/{id}", {
            path: {
              groupId: 32,
              id: 12
            },
            query: {
              summary: true
            }
          })
          .then(response => ...)
          .catch(error => ...)
```
<br />

>  ## `Base`
This base request method is like a master request for all the above methods and components. Under the hood, this base request is the one that actually gets executed. It works with full raw `apiPath` or in the way you use other methods above.

```js
ApiRequest.Base("get/chapters")
          .then(response => ...)
          .catch(error => ...)
```
```js
ApiRequest.Base("get/chapters/27/lessons/149")
          .then(response => ...)
          .catch(error => ...)
```
```js
ApiRequest.Base("post/chapters/{chapterId}/lessons/{id}", {
            path: {
              chapterId: 27,
              id: 149
            },
            body: {
                completed: true
            }
          })
          .then(response => ...)
          .catch(error => ...)
```
```js
ApiRequest.Base("delete/group/{groupId}/users/{id}", {
            path: {
              groupId: 32,
              id: 12
            },
            query: {
              summary: true
            }
          })
          .then(response => ...)
          .catch(error => ...)
```
