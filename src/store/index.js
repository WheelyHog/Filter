import { applyMiddleware, combineReducers, createStore } from "redux"
import { productsReducer } from "./productReducer"
import thunk from 'redux-thunk'
import { cartReducer } from "./cartReducer"

const rootReducer = combineReducers({

  products: productsReducer,
  cart: cartReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))