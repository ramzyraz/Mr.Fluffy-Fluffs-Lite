import { combineReducers } from 'redux';
import foodReducer from './food/food_reducers';
import uiReducer from './ui/ui_reducers';

const appReducer = combineReducers({
    ui: uiReducer,
    food: foodReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }

export default rootReducer;