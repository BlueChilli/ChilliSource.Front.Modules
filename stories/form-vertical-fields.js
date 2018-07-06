import React from 'react';
import {Field} from 'redux-form';
import {storiesOf} from '@storybook/react';
import ReduxFormProviderDecorator from "./helpers/ReduxFormProviderDecorator";

// Components we're basically testing
import TextField from "../modules/ReduxFormComponents/lib/Vertical/TextField/TextField";
import SimpleCheck from "../modules/ReduxFormComponents/lib/Vertical/CheckSimple/CheckSimple";
import CheckArrayInline from "../modules/ReduxFormComponents/lib/Vertical/CheckArrayInline/CheckArrayInline";
import Radio from "../modules/ReduxFormComponents/lib/Vertical/Radio/Radio";
import CheckArrayVertical from "../modules/ReduxFormComponents/lib/Vertical/CheckArrayVertical/CheckArrayVertical";
import RadioVertical from "../modules/ReduxFormComponents/lib/Vertical/RadioVertical/RadioVertical";
import TextFieldWithSubmit from "../modules/ReduxFormComponents/lib/Vertical/TextFieldWithSubmit/TextFieldWithSubmit";

// Validators
import ticked from "../modules/ReduxFormComponents/lib/validators/ticked";
import required from "../modules/ReduxFormComponents/lib/validators/required";
import tickedArray from "../modules/ReduxFormComponents/lib/validators/tickedArray";

// CSS
import "../modules/ReduxFormComponents/lib/themes/default.css";
import DatePicker from "../modules/ReduxFormComponents/lib/Vertical/Datepicker/DatePicker";


const genericOptions1 = [
  {
    label: "Apple",
    id: "apple",
  },
  {
    label: "Banana",
    id: "banana",
  },
  {
    label: "Pear",
    id: "pear",
  },
  {
    label: "Orange",
    id: "orange",
  },
  {
    label: "Pineapple",
    id: "pineapple",
  },
];


storiesOf('Vertical Form Fields', module)
  .addDecorator(getStory => <ReduxFormProviderDecorator story={getStory()}/>)
  .add('Everything', () => (
    <div>
      <Field label="First Name" name="firstName" component={TextField}/>
      <Field label="Birthday" name="birthday" dateFormat="DD/MM/YYYY" component={DatePicker} validate={required}/>
      <Field label="I am awesome" name="isAwesome" component={SimpleCheck}/>
      <Field label="Choose some fruit" name="shoppingBasket" component={CheckArrayInline} options={genericOptions1}/>
      <Field label="Preferred Fruit" name="preferedFruit" component={Radio} options={genericOptions1}/>
    </div>
  ))
  .add('TextField', () => (
    <div>
      <Field label="First Name" name="firstName" className="moo" component={TextField} validate={required}/>
      <Field label="Last Name" name="lastName" component={TextField} validate={required}/>
      <Field label="Strange Question" name="strangeQuestion"
             component={TextField} validate={required}
             helperText="This is helper text, to cope with strange questions, and things."/>
    </div>
  ))
  .add('TextFieldWithSubmit', () => (
    <div>
      <Field label="First Name" name="firstName" className="moo" component={TextFieldWithSubmit} validate={required}/>
      <Field label="Last Name" name="lastName" component={TextFieldWithSubmit} validate={required}/>
      <Field label="Strange Question" name="strangeQuestion"
             component={TextFieldWithSubmit} validate={required}
             helperText="This is helper text, to cope with strange questions, and things."/>
    </div>
  ))
  .add('DatePicker', () => (
    <div>
      <Field label="Birthday" name="birthday" dateFormat="DD/MM/YYYY" component={DatePicker} validate={required}/>

      <Field
        helperText="This includes the time"
        label="Time of Thing" name="timeOfThing" component={DatePicker} showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="LLL"
        timeCaption="time"/>


    </div>
  ))
  .add('Simple Check', () => (
    <div>
      <Field label="I like brocolli" name="doesLikeBrocolli"
             helperText="Careful ticking this, you may regret it!"
             component={SimpleCheck}/>
      <Field label="I am awesome" name="isAwesome" component={SimpleCheck}/>
      <Field label="Checked by Default" name="defaultCheck" component={SimpleCheck} checked/>
      <Field label="I've read the terms & conditions (required)" name="readTerms" component={SimpleCheck}
             validate={ticked}/>
    </div>
  ))
  .add("Check Array Inline", () => {
    return (
      <div>
        <Field name="shoppingBasket" component={CheckArrayInline} options={genericOptions1} validate={tickedArray}/>
        <Field label="With Label" name="shoppingBasket2" component={CheckArrayInline} options={genericOptions1}
               validate={tickedArray}
               helperText="It's important that you eat your fruit and vegetables."
        />
      </div>
    )
  })
  .add("Check Array Vertical", () => {
    return (
      <div>
        <Field name="shoppingBasket" component={CheckArrayVertical} options={genericOptions1} validate={tickedArray}/>
        <Field label="With Label" name="shoppingBasket2" component={CheckArrayVertical} options={genericOptions1}
               validate={tickedArray}
               helperText="It's important that you eat your fruit and vegetables."
        />
      </div>
    )
  })
  .add("Radio", () => {
    return (
      <div>
        <Field label="Select Something" name="preferedFruit" component={Radio} options={genericOptions1}/>
        <Field label="Prefered Fruit" name="preferedFruit2" component={Radio} options={genericOptions1}
               validate={tickedArray}
               helperText="I know you only need to choose one"
        />
      </div>
    )
  })
  .add("Radio Vertical", () => {
    return (
      <div>
        <Field label="Select Something" name="preferedFruit" component={RadioVertical} options={genericOptions1}/>
        <Field label="Prefered Fruit" name="preferedFruit2" component={RadioVertical} options={genericOptions1}
               validate={tickedArray}
               helperText="I know you only need to choose one"
        />
      </div>
    )
  });

