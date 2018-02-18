import React, {Fragment} from "react";
import {createModalComponent} from "./createModalComponent";
import {Iterable, fromJS} from "immutable";

// Turns to immutable object, as source of truth can
// come from both declaration or state
const getMeta = (props) => {
  if (Iterable.isIterable(props.meta)) {
    return props.meta
  } else {
    return fromJS(props.meta);
  }
};

export default (models, Wrapper) => {
  return () => models.map((Model, key) => {
    const ComponentInsideModal = (props) => {
      return (
        <Wrapper closeHandler={props.closeHandler} key={key} promises={Model.promises} meta={getMeta(props)}>
          <Model.component closeHandler={props.closeHandler} id={props.modal.get("id")} meta={getMeta(props)}/>
        </Wrapper>
      );
    };

    const Component = createModalComponent(Model.id, Model.promise)(ComponentInsideModal);

    return (
      <Component key={key}/>
    )
  });

};