import chillifront from "chillifront";
import configureStore from "./store/configureStore";
import Entry from "./App/Entry";
import ReduxForm from "./modules/ReduxForm/index";
import ReduxThunk from "./modules/ReduxThunk/index";
import ReduxSwagger from "./modules/ReduxSwagger/index";
import ReduxPromiseMiddleware from "./modules/ReduxPromiseMiddleware/index";
import ReduxSwaggerAccount from "./modules/ReduxSwaggerAccount/index";
import ReduxFormComponents from "./modules/ReduxFormComponents/index";
import PersistState from "./modules/PeristState/index";
import NotFoundPage from "./modules/404/index";
import Modal from "./modules/Modal/index";
import Theratrack from "./modules/Theratrak/index";
import ReduxBCLog from "./modules/ReduxBCLog/index";
import {logMiddleware} from "./App/logMiddleware";
import Mixpanel from "./modules/Mixpanel/index";

export default chillifront(
  [
    new PersistState(),
    new ReduxThunk(),
    new ReduxPromiseMiddleware(),
    new ReduxSwagger({
      apiBase: process.env.REACT_APP_API_BASE,
      apiKey: process.env.REACT_APP_API_KEY,
    }),
    new ReduxBCLog({
      middleware: [logMiddleware],
      logToConsole: false
    }),
    new ReduxForm(),
    new ReduxFormComponents(),
    new ReduxSwaggerAccount(),
    new NotFoundPage(),
    new Modal(),
    new Theratrack(),
    new Mixpanel({
      token: process.env.REACT_APP_MIXPANEL_TOKEN
    })
  ],
  configureStore
)(Entry);