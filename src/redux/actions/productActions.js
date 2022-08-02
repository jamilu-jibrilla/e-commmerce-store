import { SET_CATEGORIES } from "../constants/actionTypes"
import { SET_FEATURED_PRODUCTS } from "../constants/actionTypes"

export const setCategories = () => (dispatch) => {
    fetch("https://fakestoreapi.com/products/categories", { method: "get" })
    .then(res => res.json())
    .then(data => dispatch({type: SET_CATEGORIES, payload: data}))
}

export const setFeaturedProducts = () => (dispatch) => {
    fetch('https://fakestoreapi.com/products', {method : "get"})
    .then(res => res.json())
    .then(data => dispatch({type: SET_FEATURED_PRODUCTS, payload: data}))
}