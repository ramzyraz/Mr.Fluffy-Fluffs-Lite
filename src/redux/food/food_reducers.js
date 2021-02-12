import * as foodTypes from './food_types';

const INITIAL_STATE = {
    items: [],
}

const checkToppings = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

const foodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case foodTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case foodTypes.REMOVE_FROM_CART:
            const findPancake = (item) => {
                return item.pancakes.name !== action.payload.pancakes.name ? true : false
            }
            return {
                ...state,
                items: state.items.filter((item) => (findPancake(item) && !(checkToppings(item.toppings.name, action.payload.toppings.name))))
            };
        case foodTypes.EMPTY_CART:
                return INITIAL_STATE;
        default:
            return state;
    }
}

export default foodReducer;