# Hotjar

A module which magically registers [hotjar](https://www.hotjar.com/).

## Quickstart

Declare this in your chillifront entry point.

```js
new Hotjar({
  hotjarId: process.env.REACT_APP_HOTJAR_ID,
  hotjarSnippetVersion: process.env.REACT_APP_HOTJAR_SNIPPET_VERSION
})
```

Fairly automagic.
