<script>
  import {onMount} from 'svelte'
  import {API} from '../api.js'
  import Icon from 'fa-svelte'
  import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
  import {faFileAlt} from '@fortawesome/free-regular-svg-icons'
  import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
  import {push} from 'svelte-spa-router'
  import {userStore} from '../store'
  import {setUserLoggedOut, checkIfUserLoggedIn} from '../authorization'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()
  let api = new API()

  let user = null
  $: userLoggedIn = $userStore.data != null

  onMount(async () => {
    await checkIfUserLoggedIn()
    console.log('userStore', $userStore)
  })

  function login() {
    dispatch('login')
    // setUserLoggedIn('bob@gmail.com')
  }

  function logout() {
    setUserLoggedOut()
  }

  function facebookHandler() {
    window.open('http://www.facebook.com','_blank')
  }

  function twitterHandler() {
    window.open('http://www.twitter.com','_blank')
  }
  function instagramHandler() {
    window.open('http://www.instagram.com','_blank')
  }

</script>

<div class="bg-gray-600 bg-opacity-75 fixed w-full z-50 select-none">
  <div class="header flex items-center justify-end wrapper">

    <nav class="flex flex-wrap items-center header4 text-gray-200 uppercase opacity-100">
      <div class="menu-item">Live kamera</div>
      <div class="menu-item">Butik</div>
      <div class="menu-item">Recept</div>
      <div class="menu-item">Artiklar</div>
      <div class="menu-item">Forum</div>

      {#if userLoggedIn}
        <div class="menu-item text-gray-500" on:click={logout}>logout</div>
      {:else}
        <div class="menu-item text-primary-200" on:click={login}>Login</div>
      {/if}
    </nav>

  </div>

  <div class="absolute social-icons text-center">
    <div class="mx-auto w-12 h-12 mb-3 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #88a8ee"
         on:click={facebookHandler}>
      <Icon icon={faFacebookF}/>
    </div>
    <div class="mx-auto w-12 h-12 mb-3 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #9ce4ef"
         on:click={twitterHandler}>
      <Icon icon={faTwitter}/>
    </div>
    <div class="mx-auto w-12 h-12 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #efa09c"
         on:click={instagramHandler}>
      <Icon icon={faInstagram}/>
    </div>
  </div>

  <div class="absolute right-icons text-center w-16">

    <div class="mx-auto w-12 h-12 mb-6 rounded-full bg-gray-200 text-gray-500 text-xl flex items-center
    justify-center {userLoggedIn ? 'active-cart': ''}">
      <Icon icon={faUser} class={userLoggedIn ? 'text-primary-900': ''}/>
    </div>

    <div class="mx-auto w-12 h-12 mb-6 rounded-full bg-gray-200 text-gray-500
                text-xl flex items-center justify-center relative
                {$userStore.cartList.length > 0 ? ' active-cart ' : ''}">

      {#if $userStore.cartList.length > 0}
        <div class="absolute rounded-full w-6 h-6 bg-red-500 text-white cart-badge">

          <!--
            Use reduce function to calculate sum of quantity of all items in cart
            ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
          -->
          {$userStore.cartList.reduce((sum, value) => {
            return sum + value.qty
          }, 0)}
        </div>
      {/if}

      <Icon icon={faShoppingCart} class="{$userStore.cartList.length > 0 ? 'text-primary-500' : ''}"/>
    </div>
  </div>
</div>

<style>
  .header {
    min-height: 3.5rem;
    /*padding-top: 0.5rem;*/
    /*padding-bottom: 0.5rem;*/
  }

  nav > div {
    margin-left: 1em;
  }

  .social-icons {
    left: 2rem;
    top: 15rem;
  }

  .social-icons > div {
    transition: all 0.1s ease-out;
  }

  .social-icons > div:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .right-icons {
    right: 2rem;
    top: 15rem;
  }

  .menu-item {
    cursor: pointer;
  }

  .menu-item:hover {
    transform: scale(1.03);
    color: white;
  }

  .active-cart {
    background-color: #f9f9f9;
    width: 3.8rem;
    height: 3.8rem;
    font-size: 2.1rem;
    transition: all .3s;
  }

  .active-cart:hover {
    transform: scale(1.1);
  }

  .cart-badge {
    top: -0.3rem;
    left: -0.3rem;
    font-size: 1rem;
    /*border: 0.15rem solid white;*/
  }

</style>
