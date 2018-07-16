import React from "react";
import { Field } from "redux-form";
import { storiesOf } from "@storybook/react";
import { ReduxFormProviderDecorator } from "./helpers/";

import TextField from "../Components/Vertical/TextField/";
import DatePicker from "../Components/Vertical/Datepicker/DatePicker";

import required from "../Components/validators/required";

import "../Components/themes/default.css";
import SimpleCheck from "../Components/Vertical/CheckSimple/CheckSimple";
import ticked from "../Components/validators/ticked";
import CheckArrayInline from "../Components/Vertical/CheckArrayInline/CheckArrayInline";

storiesOf("Validations", module)
  .addDecorator(getStory => <ReduxFormProviderDecorator story={getStory()} />)
  .add("Everything", () => (
    <div>
      <Field
        label="Required"
        name="textFldRequired"
        component={TextField}
        validate={required}
      />
      <Field
        label="Birthday"
        name="birthday"
        dateFormat="DD/MM/YYYY"
        component={DatePicker}
        validate={required}
      />
      <Field
        label="this must be ticked"
        name="isAwesome"
        component={SimpleCheck}
        validate={ticked}
      />
    </div>
  ));
