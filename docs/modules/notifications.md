# Notifications

A simple module which shows a component, and then hides it after a
defined number of milliseconds.

## Quick Start

1. Declare Module in ChilliFront Stack

` new Notification()`

2. Do some markup

```js
import Notification from "../../modules/Notification/Notification";
//
<Notification id="testNotification">
  <div>I AM A NOTIFICATION!</div>
</Notification>
```     

If you want to debug, the `show={true}` attribute will show the module
regardless of state.

3. To show, dispatch an action

```js
import {showNotification} from "../../modules/Notification/actions";
//
<button onClick={() => {
  this.props.dispatch(showNotification("testNotification", 1000));
}}>
  Click Me To Show a Notification!
</button>
```


## Extending functionality

By default, the notification component is wrapped using a component
called `WrapperSimple` (located in the modules directory)

To wrap it in a new component, create a new component (using `Wrappersimple`
as your guide), and use it as a prop like this:

`<notification id="mynotification" wrapper={MyNewWrapper}>`

This is good if you want to create a toast, or something cool.
