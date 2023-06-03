const storage = JSON.parse(localStorage.getItem('cart'))

const defaultState = storage ? storage : [];

const updateLocalStorage = (tempState) => localStorage.setItem('cart', JSON.stringify(tempState))

const ADD_TO_CART = 'ADD_TO_CART';

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const tempState = [...state, action.payload]
      updateLocalStorage(tempState)
      return tempState

    default:
      return state;
  }
}

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })