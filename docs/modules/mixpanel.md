# Mixpanel

Mixpanel is little bit of a tricky one because autotracking [doesn't work anymore](https://help.mixpanel.com/hc/en-us/articles/115004613366-Autotrack-Overview).

The solution is to declare as a chillifront module and then programmatically call events.

Thankfully it's [pretty easy](../logging.md) via the `ReduxBCLog` module and is encouraged.

## Quick Start

Add something like this as a chillifront declaration.

```js
new Mixpanel({
  token: process.env.REACT_APP_MIXPANEL_TOKEN
})
```

Use [ReduxBCLog](reduxbclog.md) to dispatch log actions which are picked up by its middleware.
