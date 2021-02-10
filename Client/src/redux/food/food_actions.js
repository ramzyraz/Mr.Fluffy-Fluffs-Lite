import * as foodTypes from './food_types';

export const addToCart = (items) => {
    return {
        type: foodTypes.ADD_TO_CART,
        payload: items
    };
}

export const removeFromCart = (pancakeItem) => {
    return {
        type: foodTypes.REMOVE_FROM_CART,
        payload: pancakeItem
    };
}
