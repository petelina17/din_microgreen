import { writable } from 'svelte/store'
import {img, price, productId, subtitle, title} from './components/ProductCard.svelte'

let user = {
  name: '',
  cartNumber: 0,
  favoriteNumber:0,
  favoriteList: [],
  cartList: []
};
export let userStore = writable(user)

let searchText = ''
export let search = writable(searchText)

let list = []
export let productList = writable(list)

export let selectedProduct = writable({})


// export function addToCart(productData) {
//   const cartItem = {
//     productData: productData,
//     qty: 1
//   }
//   // Find cart item index that has the same product id that has our product
//   // in this product cart. If not found, index would be -1
//   const foundIndex = user.cartList
//       .findIndex(cartListItem => cartListItem.productData.productId === productData.productId)
//   if (foundIndex === -1) {
//     user.cartList.push(cartItem)
//   }else {
//     user.cartList[foundIndex].qty += 1
//   }
//
//   // update quantity of items in cart
//   user.cartNumber = user.cartList.length
// }
