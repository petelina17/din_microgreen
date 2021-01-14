import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'
import {userStore} from './store'
import { get } from 'svelte/store'
import { API } from './api'

// create cookie and update store
export function setUserLoggedIn(email, firebaseUserData) {
  // create cookie with email
  const now = new Date()
  now.setDate(now.getDate() + 1)
  setCookie('userId', email, {path: '/', expires: now.toGMTString()})

  // update firebaseUserData data in store from firebaseUserData
  const user = get(userStore)
  user.data = firebaseUserData
  userStore.set(user)
}


// remove cookies and update store
export function setUserLoggedOut() {
  removeCookie('userId')
  removeCookie('cartList')
  checkIfUserLoggedIn()
}

// function connects store and cookie
export async function checkIfUserLoggedIn() {
  const cookie = getCookie('userId')
  const user = get(userStore)

  // if there is no cookie, clean store
  if (cookie == null) {
    user.data = null
    user.cartList = []
    user.favoriteList = []
  } else {
    // if cookie exists, get firebaseUserData data from firebase
    const api = new API()
    user.data = await api.getUser(cookie)
  }

  // and put updated firebaseUserData object to store
  userStore.set(user)
  return user.data != null
}

export async function createNewUser(userData) {
  const api = new API()
  console.log('sending new user to firebase:', userData)
  const result = await api.setUser(userData)
  return result
}

export async function updateUser(userData) {
  const api = new API()
  console.log('sending update user to firebase:', userData)
  const result = await api.updateUser(userData)
  return result
}


// crypto-js -- JavaScript library of crypto standards.
// https://github.com/brix/crypto-js
//
// SHA-256 is a cryptographic (one-way) hash function,
// so there is no direct way to decode it
//
export function getHash(password) {
  const hash = CryptoJS.SHA256(password).toString()
  return hash
}
