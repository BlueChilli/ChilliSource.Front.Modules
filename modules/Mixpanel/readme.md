# chillifront.mixpanel

usage:

```js
new Mixpanel({
  token: <token>
})
```

Use `.env` to store keys, like this:

`REACT_APP_MIXPANEL_TOKEN="m4k4j3j4j34234"`

And then in your declaration:

```
new Mixpanel({
    token: process.env.REACT_APP_MIXPANEL_TOKEN
})
```