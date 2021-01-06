import { writable } from 'svelte/store'
import {img, price, productId, subtitle, title} from './components/ProductCard.svelte'

let user = {
  data: null,
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

