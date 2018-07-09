/** Libraries */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Field, reduxForm } from "redux-form";

/** Components */
import TextField from "../modules/ReduxFormComponents/lib/Vertical/TextField/";
import SimpleCheck from "../modules/ReduxFormComponents/lib/Vertical/CheckSimple/CheckSimple";

import { DemoFormDecorator } from "./helpers/";

import "../sass-helpers/index.css";

/** Rendering Components */
storiesOf("Style Helpers", module)
  .addDecorator(getStory => <DemoFormDecorator story={getStory()} />)
  .add("Forms", () => {
    return (
      <React.Fragment>
        <h1 className="margin-bottom-2">Form Components</h1>

        {/* TextField */}
        <Field
          label="Label"
          name="textField"
          component={TextField}
          helperText="This is some helper text"
        />

        {/* Simple Checkbox */}
        {/* <Field
          label="I like brocolli"
          name="doesLikeBrocolli"
          helperText="Careful ticking this, you may regret it!"
          component={SimpleCheck}
        /> */}
      </React.Fragment>
    );
  });
