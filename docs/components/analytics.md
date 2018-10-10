# Analytics

We, at BlueChilli, generally use the following services for analytics:

- Google Analytics
- Mixpanel
- HotJar
- Heap Analytics

Each of the above services have their own way and syntax for gathering analytics for a page. If we continue as we do now, we'll have scores of different implementations for each of the above services which means, everytime a new developer is asked to work on the project, he/she will have to learn how its implemented. That's not very efficient, at all.

Enter `Analytics`!

## General

All of the above four analytics services have already been bundled in with the component. Just plug-n-play. The only one step you are required to do is specify the following keys in your `.env-cmdrc` config file as follows:

```json
"REACT_APP_GA_TRACKING_CODE": "YOUR_KEY_HERE",
"REACT_APP_MIXPANEL_KEY": "YOUR_KEY_HERE",
"REACT_APP_HOT_JAR_KEY": "YOUR_KEY_HERE",
"REACT_APP_HEAP_KEY": "YOUR_KEY_HERE",
```

You don't have to specify all of them. You don't have to specify one of them. The component automatically determines which frameworks you want to use depending on the keys provided and auto-includes them in your build.

## Usage

`Analytics` component exposes two methods - `trackPageView` and `trackEvent`. Each of them does exactly what their name specifies and nothing more, nothing less.

### Tracking Page Views

```js
// Import it like this
import Analytics from '../component/Analytics';

// Use it like this
Analytics.trackPageView(URL_YOU_WANT_TO_TRACK);
```

### Tracking Events

```js
// Import it like this
import Analytics from '../component/Analytics';

// Use it like this
Analytics.trackEvent(EVENT_CATEGORY, EVENT_NAME);
```
