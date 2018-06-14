## Quick Start


### Configuration

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


### Ways to get data

1. Grabbing it programmatically.

```js
import {apiGet} from "ReduxFormSwagger";

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
(adding `debug={true}` will log to the console)

```js
<SwaggerData id="get/api/v1/thing/{id}" data={{id: 58}} debug={true}>
  {context => {
    return (
      <div>{context.name}</div>
    )
  }}
</SwaggerData>
```

Please note that the `data` prop in `SwaggerData` will try to magically determine if your swagger id needs to apply a *path* or a *query string*, and will act accordingly.

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

So rather than mutating context, you create a new object.


#### Utilities

The 3rd parameter in the child function is a utility object which allows you modify things directly.
A handy use-case is for optimistic updates

```js
<SwaggerData id="get/api/v1/thing" modifyData={myDataModifier}>
  {(context, modified, utils) => {
    return {
       <button onClick={()=> utils.refresh()}>foo</button>
       <button onClick={()=> utils.set("user.age", 99)}>foo</button>
       ....
```

[Documentation for this coming soon]


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







