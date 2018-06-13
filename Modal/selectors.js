import {createSelector} from 'reselect';

const modalState = state => state.modal;

export const modalIsOpen = createSelector(modalState,
  modalState => id => {
    if (modalState[id] === undefined) return false;
    return modalState[id].isOpen === true;
  }
);
