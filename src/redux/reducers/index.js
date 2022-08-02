import { combineReducers } from "redux";
import { categoriesReducer, productsReducer } from "./productReducer";

 const reducers = combineReducers({
     allCategories: categoriesReducer,
     allProducts: productsReducer,
 })

 export default reducers;