## Quick Start


### Configuration


#### The non-chillifront method

Throw this somewhere in your initialisation code:

```js

import {setApiKey, setBaseURL, setSwaggerEndpoint} from "ReduxFormSwagger";

// eg. https://foo.whatever.dev/swagger/docs/v1?flatten=true
setSwaggerEndpoint(fullSwaggerEndpointUrl);

// eg. 84774-ANANA-WOOT-BLAH
setApiKey(apiKey);

// https://foo.whatever.dev
setBaseURL(baseURL);

```

#### The chillifront method

In `app.js`, put these modules in your declaration:

```js
export default chillifront(
  [
    new PersistState(),
    new ReduxThunk(),
    new ReduxPromiseMiddleware(),
    new ReduxSwagger({
      apiBase: process.env.REACT_APP_API_BASE,
      apiKey: process.env.REACT_APP_API_KEY,
    }),
    new ReduxBCLog({
      middleware: [logMiddleware],
      logToConsole: false
    })
  ]
);
```

The above code snippet makes use of `.env`.

```
REACT_APP_API_BASE=https://project.azurewebsites.net
REACT_APP_API_KEY=A0A5D50D-4034-4BB2-8C5F-97CE869CAE5E
```

The `ReduxSwagger` module creates an embedded route, which will indicate if the Swagger definition is
working: [https://localhost:3000/bcswagger](https://localhost:3000/bcswagger)


### Ways to get data

1. Grabbing it programmatically.

```js
import {apiGet} from "ReduxSwagger";

apiGet("get/api/v1/currentuser").then(payload => {
  console.log(payload);
});
```

Using data:

```js
apiCreator(
  "get/api/v1/currentuser/{id}", 
  {
    path: {id: 4},
    queryString: {foo: 45}
  }
  ).then(payload => {
    console.log(payload);
  }
);
```

You can post as well.

```js
apiCreator(
  "post/api/v1/currentuser/{id}", 
  {
    body: {name: "John Doe"},
    path: {id: 4},
    queryString: {foo: 45}
  }
  ).then(payload => {
    console.log(payload);
  }
);
```


2. Using JSX

```js

import {SwaggerData} from "ReduxFormSwagger";

<SwaggerData id="get/api/v1/currentuser">
  {context => {
    return (
      <div>{context.name}</div>
    )
  }}
</SwaggerData>
```

If your api call requires some params:
(adding `debug={true}` will log context to the console)

```js
<SwaggerData id="get/api/v1/thing/{id}" data={{id: 58}} debug={true}>
  {context => {
    return (
      <div>{context.name}</div>
    )
  }}
</SwaggerData>
```

Please note that the `data` prop in `SwaggerData` will try to magically determine
if your swagger id needs to apply a *path* or a *query string*, and will act accordingly.

If your API call requires both a *path* and a *queryString* you can be more explicit by using them as props.

```js
<SwaggerData id="get/api/v1/thing/{id}"
             path={{id: 58}}
             queryString={{foo: 1}}>
```

#### Modifying/Normalising data

You might want to modify your data.

```js
<SwaggerData id="get/api/v1/thing" modifyData={myDataModifier}>
  {(context, modified) => (
     <div>{modified.formattedDate}</div>


const myDataModifier = (context) => {
     return {
       formattedDate: moment(context.date).format('MMMM Do YYYY')
    }
}
```

So rather than mutating context, it will create a whole new object.


#### Utilities

The 3rd parameter in the child function is a utility object which allows you act directly.
A handy use-case is for optimistic updates

```js
<SwaggerData id="get/api/v1/thing" modifyData={myDataModifier}>
  {(context, modified, utils) => {
    return {
       <button onClick={()=> utils.refresh()}>foo</button>
       <button onClick={()=> utils.set("user.age", 99)}>foo</button>
       ....
```

[More documentation for this coming soon...]


### Using Redux Forms

ReduxSwagger 

```js

import {SwaggerForm} from "ReduxFormSwagger";

// Payload is the submitted form data
// dispatch is the Redux dispatch function
// formData is the redux forms object.
const success = (payload, dispatch, formData)=> {
 console.log(payload, dispatch, formData);
}


<SwaggerForm id="post/api/v1/web/usersession" onSuccess={success}>
  {context => {
    return (
      <div>
        <Field name="email" label="Email Address" component={TextField} validate={email} autoFocus={true}/>
        <Field name="password" label="Password" component={Password}
               labelRight={<a href="#">Forgot password?</a>}
               validate={required}/>
        <SubmitButton {...context} value="Log in"/>
        <FormError {...context}/>
      </div>
    )
  }}
</SwaggerForm>
```







