# `Swagger.FetchData`

This component is basically a wrapper that **injects** data from the API into your component. There's two ways you can use this component:

## Providing `children` or child component(s)

This method will inject the following props into your child component(s):

- `response`
- `modifiedData`

The `response` object is what you'll be interested in the most. It consists of the following:

- `isFetching` : boolean
- `hasFetchedSuccessfully` : boolean
- `data` : any
- `error` : any

Have a look at the following example to understand what you can do.

```js
class Chapters extends React.Component {
	render() {
		const {
			response: { isFetching, hasFetchedSuccessfully, data, error },
    } = this.props;

    if(isFetching) {
      /**
       * Show some kind of a loading animation or
       * empty state here
       */
      return ...
    }

    if(hasFetchedSuccessfully) {
      // This means our `data` has been populated

      /**
       * Show some a list of chapters
       */
      return data.map(...)
    }

    // The last case is that there has been an error
    /**
     * Handle error here
     */
    return ...
	}
}

/************************************************************/

// Where you'd like to use it
<FetchData apiPath="/chapters" type="GET">
	<Chapters />
</FetchData>;
```

<br />

## 2. Providing a child render function

This method consist of providing a function that'll render once the request has been completed.

> **NOTE** <br /><br />
> This method causes your provided function to be called every time it is re-rendered. > If you are going to be rendering something complex, you'd be better off using the > method above where you can have more control over rendering.

```js
<FetchData apiPath="/chapters" type="GET">
	{(response, modifiedData, options) => {

    // IT IS IMPORTANT TO RETURN A VALID REACT NODE
    return ...
  }}
</FetchData>
```

The `response` and `modifiedData` objects are the same as in [method 1](#providing-children-or-child-components) above. The `options` object, as of now, provides one utility method - `refresh`.

You can use it follows

```js
<FetchData apiPath="/chapters" type="GET">
	{(response, modifiedData, options) => {
		// IT IS IMPORTANT TO RETURN A VALID REACT NODE
		return <button onClick={options.refresh}>Re-fetch Data</button>;
	}}
</FetchData>
```
