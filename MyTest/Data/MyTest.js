import {createSelector} from 'reselect'

const myTestSelector = state => state.get("MyTestState");

export default createSelector(
  myTestSelector,
  (list) => {
    return list;
  }
)

