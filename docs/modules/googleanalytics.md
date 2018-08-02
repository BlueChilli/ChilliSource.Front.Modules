# Google Analytics

This module adds GA, using gtag manager.

## Quick Start

You just need to declare it as a chillifront module.

```js
  new GoogleAnalytics({
        trackingId: "UA-MY_TRACKING_ID",
      })
```

Don't forget to use the new gtag syntax if you want to send
events. Also, leveridge the [ReduxBCLog](reduxbclog.md)
module.

### Sending Events (quickstart)

```js
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('event', 'xyz');

```

More documentation here:
[https://developers.google.com/analytics/devguides/collection/gtagjs/events](https://developers.google.com/analytics/devguides/collection/gtagjs/events)
