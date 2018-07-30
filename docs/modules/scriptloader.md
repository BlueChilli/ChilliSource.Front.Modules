# Facebook Pixel

This module adds Custom Script Loader

## Quick Start

You just need to declare it as a chillifront module and pass an object as below. Scripts should be the array of strings which is the files you want to load.

```js
import ScriptLoader from 'modules/FacebookPixel';

new ScriptLoader({
	scripts: ['https://js.stripe.com/v3/'],
});
```
