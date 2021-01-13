import {get, writable} from 'svelte/store'
import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'

let user = {
  data: null,
  cartNumber: 0,
  favoriteNumber:0,
  favoriteList: [],
  cartList: [],
  buyProcess: null,
}

export let userStore = writable(user)

let searchText = ''
export let search = writable(searchText)

let list = []
export let productList = writable(list)

export let selectedProduct = writable({})

export let orderNumber = writable('')

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

export function clearCart() {
  // 1. clear cart list in store
  const user = get(userStore)
  user.cartList = []
  userStore.set(user)

  // 2. clear cookie with cart list
  removeCookie('cartList')
}
