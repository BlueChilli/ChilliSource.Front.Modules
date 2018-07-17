# Google Analytics

This module adds GA, and autotracking if you want it (although autotrack only supports default
options at time of writing). You also have access to `window.ga` if you
want to explictly log events. 

## Quick Start

You just need to declare it as a chillifront module.

```js
  new GoogleAnalytics({
        debug: true,
        trackingId: "UA-MY_TRACKING_ID",
        require: ['eventTracker', 'outboundLinkTracker', 'urlChangeTracker']
      })
```

Please note, in order to use 'require', you need to install the autotrack inside 
your `public/index.html`.

`  <script src="https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js"></script>`

More info on Autotrack is available at [https://github.com/googleanalytics/autotrack](https://github.com/googleanalytics/autotrack)











