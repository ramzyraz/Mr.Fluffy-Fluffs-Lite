import * as foodTypes from './food_types';

export const addToCart = (items) => {
    return {
        type: foodTypes.ADD_TO_CART,
        payload: items
    };
}

export const removeFromCart = (pancake) => {
    return {
        type: foodTypes.REMOVE_FROM_CART,
        payload: pancake
    };
}

export const adjustItemQty = (itemID, qty) => {
    return {
      type: foodTypes.ADJUST_ITEM_QTY,
      payload: {
        id: itemID,
        qty,
      },
    };
};
  
export const loadCurrentItem = (item) => {
    return {
      type: foodTypes.LOAD_CURRENT_ITEM,
      payload: item,
    };
};