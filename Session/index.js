import { Mod } from 'chillifront';
import * as allActions from './actions';
import reducer from './reducer';
import Wrapper from './Wrapper';

export default class Session extends Mod {
  reducers() {
    return { session: reducer };
  }

  wrapApp() {
    return Wrapper;
  }


  mapStateToProps() {
    return state => ({
      sessionIsAuthenticated: state.getIn(['session', 'authenticated']),
    });
  }


  mapDispatchToProps() {
    return dispatch => ({
      sessionLogin: () => dispatch(allActions.login()),
      sessionLogout: () => dispatch(allActions.logout()),
    });
  }
}
