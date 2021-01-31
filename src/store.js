import {get, writable} from 'svelte/store'
import {isCookieEnabled, getCookie, setCookie, removeCookie} from 'tiny-cookie'
import {API} from './api'

const api = new API()

let user = {
  data: null,
  cartNumber: 0,
  favoriteNumber: 0,
  favoriteList: [],
  cartList: [],
  buyProcess: null,
  isGuest: false
}

export let userStore = writable(user)

export let loadingUser = writable(true)

export let cookiesAccepted = writable(false)

let searchText = ''
export let search = writable(searchText)

let list = []
export let productList = writable(list)

export let selectedProduct = writable({})

export let orderNumber = writable('')

export function saveCartToCookie() {
  if (get(cookiesAccepted)) {
    const user = get(userStore)
    const now = new Date()
    now.setDate(now.getDate() + 1)
    setCookie('cartList', JSON.stringify(user.cartList), {path: '/', expires: now.toGMTString(), secure: true})
  }
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

export function saveFavorites() {
  const user = get(userStore)
  if (user.data != null) {
    // setCookie('favorites', JSON.stringify(user.favoriteList))
    user.data.favorites = user.favoriteList
    api.updateUser(user.data)
  }
}

export function loadFavorites() {
  // const cookie = getCookie('favorites')
  // if (cookie == null) {
  //   return
  // }
  //
  // const favorites = JSON.parse(cookie)

  const user = get(userStore)
  user.favoriteList = []
  if (user.data != null && user.data.favorites != null) {
    user.favoriteList = user.data.favorites
  }
  userStore.set(user)
}

export function clearFavorites() {
  // 1. clear fav list in store
  const user = get(userStore)
  user.favoriteList = []
  userStore.set(user)

  // 2. clear cookie with  fav list
  removeCookie('favorites')
}
