# Modal Component

## Quick Start

### Implementation

1. Declare your modals in a file somewhere. You can have more than one file.

```js
import React, {Fragment} from "react";

import ModalWrapper from "../../modules/Modal/ModalWrapper";
import createModals from "../../modules/Modal/createModals";

export default createModals([{
    // Id of the modal (referred to elsewhere)
    id: "ModalId",
    // What goes inside the component
    component: MyComponent,
    // Run this promise before showing modal
    promise: (meta) => {
      return getSkill(meta.id);
    }
  }],
  // This is the modal template
  ModalWrapper);
```

2. Import the above file to the root of your app.

```js
import Modals from "{Location of Above File}";

<Modals/>

```


3. This is how you trigger it

```js
<button onClick={() => {
                  this.props.dispatch(showModal("ModalId", {
                    // Metadata to inject into views and promises
                    id: item.get("id"),
                  }))
                }}>               
    Click Me
</button>
```



## API



