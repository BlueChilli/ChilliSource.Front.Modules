import React from "react";
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
  return () => models.map((Modal, key) => {

    // override wrapper
    const NewWrapper = Modal.modalWrapper ? Modal.modalWrapper : Wrapper;

    const options = Modal.opts || {};

    const ComponentInsideModal = (props) => {
      return (
        <NewWrapper closeHandler={props.closeHandler} key={key} promises={Modal.promises} meta={getMeta(props)}>
          <Modal.component closeHandler={props.closeHandler} id={props.modal.get("id")} meta={getMeta(props)}/>
        </NewWrapper>
      );
    };

    const Component = createModalComponent(Modal.id, Modal.promise, options)(ComponentInsideModal);

    return (
      <Component key={key}/>
    )
  });

};