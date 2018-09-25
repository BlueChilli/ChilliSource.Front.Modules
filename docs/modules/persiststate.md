# PersistState

This `Mod` is used to ensure that your app's state remains constant across browser refreshes. If you intend to persist state this way, you should use this module. It uses `sessionStorage` under the hood.

This `Mod` allows you to store either the complete app state or slice(s) thereof in session storage so that they can persist across refreshes.

Note: If you specify a slice to persist and it doesn't exist in the store, then it'll be skipped.

## Usage

- **Basic**: Persisting the complete app state

```diff
const App = chillifront([
+    new PersistState()
  ], {...}
)(Entry)
```

<br>

- **Advanced**: Persisting specified state slices

```diff
const App = chillifront([
+   new PersistState({
+     states: ['Account', ...]
+   })
  ], {...}
)(Entry)
```
