/** Libraries */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Field, reduxForm } from "redux-form";

/** Components */
import TextField from "../modules/ReduxFormComponents/lib/Vertical/TextField/";
import TextFieldWithSubmit from "../modules/ReduxFormComponents/lib/Vertical/TextFieldWithSubmit/";
import SimpleCheck from "../modules/ReduxFormComponents/lib/Vertical/CheckSimple/CheckSimple";

import { DemoFormDecorator } from "./helpers/";

import "../sass-helpers/index.css";

/** Rendering Components */
storiesOf("Style Helpers", module)
  .add("Text", () => {
    return (
      <React.Fragment>
        <h1>Text Styles</h1>

        <br />
        <h1>This is an h1 heading</h1>

        <br />
        <h2>This is an h2 heading</h2>

        <br />
        <h3>This is an h3 heading</h3>

        <br />
        <h4>This is an h4 heading</h4>

        <br />
        <h5>This is an h5 heading</h5>

        <br />
        <h6>This is an h6 heading</h6>

        <br />
        <p>This is a paragraph text</p>
      </React.Fragment>
    );
  })
  .addDecorator(getStory => <DemoFormDecorator story={getStory()} />)
  .add("Forms Components", () => {
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

        <Field
          label="Label"
          name="textField"
          component={TextFieldWithSubmit}
          helperText="This is some helper text"
          className="margin-top-2"
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
