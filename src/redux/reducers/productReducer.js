import { SET_CATEGORIES } from "../constants/actionTypes";
import { SET_FEATURED_PRODUCTS } from "../constants/actionTypes";

const initialCategoriesState = {
    categories: []
}

export const categoriesReducer = (state = initialCategoriesState, action={}) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.payload};   
        default:
            return state;
    }
}

const initialProductState = {
    products: [] 
}

export const productsReducer = (state=initialProductState, action={}) => {
    switch (action.type) {
        case SET_FEATURED_PRODUCTS:
            return {...initialProductState, products: action.payload};
        default:
            return state;
    }
}