import * as foodTypes from './food_types';

const INITIAL_STATE = {
    items: [],
    currentItem: null
}

const foodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case foodTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case foodTypes.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.pancakes.name !== action.payload)
            };
        case foodTypes.ADJUST_ITEM_QTY:
            return [];
        case foodTypes.LOAD_CURRENT_ITEM:
            return [];
        default:
            return state;
    }
}

export default foodReducer;