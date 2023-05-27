import { applyMiddleware, combineReducers, createStore } from "redux"
import { productsReducer } from "./productReducer"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({

  products: productsReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))