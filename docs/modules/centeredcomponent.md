# Centered Component

Many a projects often have content that centered in the page and doesn't expand as the screen width expands. As such, having to do it for every page or for every project is tedious and I wanted to use it across projects. Plus, since you get the source files anyways, you can edit it to suit your use case.

In the future, I'll extend the component to allow inclusion of more scenarios through props rather than having to modify the source itself.

This module has one default component and 3 other helper components:

- `CenteredComponent`
- `Container`
- `Row`
- `Col`

## `CenteredComponent`

#### Usage

`import CenteredComponent from '..modules/CenteredComponent`

Then in your component,

```js
<CenteredComponent>
	{/* Your render code goes here */}
	{children}
</CenteredComponent>
```

#### Properties

This component can be used for the use case I mentioned just above. It accepts two props apart from the `children` and both are optional: <br>
| Property | Type | Description |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| `centerContent` | `boolean` | This is like justify center. All the children will arranged in the center of the container |
| `removeTopOffset` | `boolean` | By default, this HOC has a top offset of `48px` to separate children from whatever might be above this component. |

## `Container`, `Row`, `Col`

These components allow you to create a grid system in vanilla JS. It based on `react-grid-system` which is a wonderful nifty little library. The original components are simple and need no further simplification. The reason for exposing the components from here is that I have used `setConfiguration` utility from the library and modified the `gutters` and `containerWidths` to align it with what our BC designers use. You can read more about the components on the <a href="https://jsxmachina.github.io/react-grid-system/" target="_blank">library's website</a>.

#### Usage

`import { Container, Row, Col } from '../modules/CenteredComponent'`

Then, in your component, you can do something like this:

```js
<Container>
  <Row>
    <Col xs={3} md={5}>
      {/* Something in here */}
    </Col>
  </Row>
<Container>
```

Again, refer to the <a href="https://jsxmachina.github.io/react-grid-system/" target="_blank">library's website</a> to see more examples and demos.
