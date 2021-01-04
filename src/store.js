import { writable } from 'svelte/store'

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
