# Logging

If you need to intercept specific application-related events for things like Mixpanel, or
Google Analytics (or whatever), it is best to use the logger, and intercept using a middleware
pattern.

Modules like `ReduxSwaggerAccount` already make use of the logger so there is no need to reason about
the account workflow. It is recommended for scalability and general sanity, to dispatch a log messages
rather than calling your target API directly.

## Simple Example:

1. Ensure you have `ReduxBCLog` declared in `App.js`.

```js
new ReduxBCLog({
  logToConsole: true
})
```

Within the `ReduxBCLog` component directory, there's a Redux action called `log`.

`this.props.dispatch(log("something-happened", {something: "happened"}));`

The 2nd parameter is optional.

This doesn't do anything except dispatch a Redux message.

## Adding Middleware

The real power of logging comes when you combine it with middleware.

```js
new ReduxBCLog({
  middleware: [myMiddleware],
  logToConsole: false
})
```

An example Mixpanel implementation of this middleware could look like this:

```js
import mixpanel from 'mixpanel-browser';

const myMiddleware = {
  'account-sessioncreated': (payload) => {
    mixpanel.identify(payload.accountId);
    mixpanel.track("SignIn");
  },
  'something-happened': (data) => {
    const {something} = data;
    mixpanel.track("Something Happened", {something});
  }
};
```




