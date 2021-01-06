import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'
import {userStore} from './store'
import { get } from 'svelte/store'

// create cookie and update store
export function setUserLoggedIn(email) {
  const now = new Date()
  now.setDate(now.getDate() + 1)
  setCookie('userId', email, {path: '/', expires: now.toGMTString()})
  checkIfUserLoggedIn()
}


// remove cookies and update store
export function setUserLoggedOut() {
  removeCookie('userId')
  checkIfUserLoggedIn()
}

// function connects store and cookie
export function checkIfUserLoggedIn() {
  const cookie = getCookie('userId')
  const user = get(userStore)

  if (cookie == null) {
    user.data = null
  } else {
    user.data = {}
  }
  // and put updated user object to store
  userStore.set(user)
}
