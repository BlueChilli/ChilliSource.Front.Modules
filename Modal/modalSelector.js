import {createSelector} from "reselect";

const selectModal = (state) => state.get("modal");

const modalSelector = createSelector(selectModal, state => {

  return {
    isAnyModalOpen: () => {
      return state.some(foo => foo.get("isOpen"))
    }
  }

});


export default modalSelector;
