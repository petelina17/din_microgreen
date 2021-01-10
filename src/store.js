import {get, writable} from 'svelte/store'
import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'

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

export function saveCartToCookie() {
  const user = get(userStore)
  setCookie('cartList', JSON.stringify(user.cartList))
}

export function loadCartFromCookie() {
  const cookie = getCookie('cartList')
  if (cookie == null) {
    return
  }

  const cartList = JSON.parse(cookie)

  const user = get(userStore)
  user.cartList = cartList
  userStore.set(user)
}
