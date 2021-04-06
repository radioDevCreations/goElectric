import { AnyAction } from "redux";
import { APP_CHANGE_PAGE } from "../actions/appActions";

const appReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case APP_CHANGE_PAGE:
      return action.payload;
    default:
      console.warn(`Action ${action.type} doesn't exist or is not available`);
      return state;
  }
};
