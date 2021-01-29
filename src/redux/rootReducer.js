import { combineReducers } from 'redux';
import foodReducer from './food/food_reducers';
import uiReducer from './ui/ui_reducers';

const rootReducer = combineReducers({
    ui: uiReducer,
    food: foodReducer,
});

export default rootReducer;