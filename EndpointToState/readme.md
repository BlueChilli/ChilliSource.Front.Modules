# Endpoint to State

During app initialisation, retrieves an endpoint and puts the payload of that endpoint into Redux state.

Immutable JS required.

### Example Usage:

```js
new EndpointToState({
    // shows this below spinner when grabbing.
    fetchingText: "Grabbing Weather API", 
    // redux state node target
    id: "weatherbit", 
    // number of seconds that lives in cache.
    cacheLife: 300, 
    // target url
    endpoint: "https://api.apis.guru/v2/specs/weatherbit.io/2.0.0/swagger.json"
})
```
