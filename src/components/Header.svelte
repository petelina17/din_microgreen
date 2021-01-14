<script>
  import {API} from '../api.js'
  import Icon from 'fa-svelte'
  import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
  import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
  import {userStore} from '../store'
  import {setUserLoggedOut} from '../authorization'
  import {createEventDispatcher} from 'svelte'
  import { fade, fly, slide } from 'svelte/transition'


  const dispatch = createEventDispatcher()
  let api = new API()

  let user = null
  $: userLoggedIn = $userStore.data != null


  function login() {
    dispatch('login')
    // setUserLoggedIn('bob@gmail.com')
  }

  function logout() {
    setUserLoggedOut()
  }

  function facebookHandler() {
    window.open('http://www.facebook.com', '_blank')
  }

  function twitterHandler() {
    window.open('http://www.twitter.com', '_blank')
  }

  function instagramHandler() {
    window.open('http://www.instagram.com', '_blank')
  }

  function cartHandler() {
    dispatch('cart')
  }

  let showHamburger = false
</script>

<div class="bg-gray-600 bg-opacity-75 fixed w-full z-20 select-none">

  <div class="header flex items-center header4 justify-end wrapper">

    <div class="flex-grow text-left sm:hidden">
      {#if showHamburger === true}
        <div class="text-white" on:click={() => { showHamburger = !showHamburger }}>
          CLOSE
        </div>
      {:else}
        <div on:click={() => { showHamburger = !showHamburger }}>
          MENU
        </div>
      {/if}
    </div>

    <nav class="hidden md:flex items-center text-gray-200 uppercase opacity-100">
      <div class="menu-item ml-5"><a href="/#/live-cam">Live kamera</a></div>
      <div class="menu-item ml-5"><a href="/#shop">Butik</a></div>
      <div class="menu-item ml-5"><a href="/#/recipes">Recept</a></div>
      <div class="menu-item ml-5"><a href="/#/articles">Artiklar</a></div>
      <div class="menu-item ml-5"><a href="/#/forum">Forum</a></div>
    </nav>

    {#if userLoggedIn}
      <div class="uppercase menu-item text-gray-500 ml-5" on:click={logout}>logout</div>
    {:else}
      <div class="uppercase menu-item text-primary-200 ml-5" on:click={login}>Login</div>
    {/if}
  </div>

  {#if showHamburger === true}
    <div class="bg-white text-gray-800 absolute origin-top-left header4 w-full text-left px-5 py-3"
    transition:slide>
      <div class="py-2"><a href="/#/live-cam">Live kamera</a></div>
      <div class="py-2"><a href="/#shop">Butik</a></div>
      <div class="py-2"><a href="/#/recipes">Recept</a></div>
      <div class="py-2"><a href="/#/articles">Artiklar</a></div>
      <div class="py-2"><a href="/#/forum">Forum</a></div>
    </div>
  {/if}

  <!--
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
  -->

  <!--
    ICON USER ========================================
  -->

  <!--
    <a href="/#/account">
      <div class="mx-auto w-12 h-12 mb-6 rounded-full bg-gray-200 text-gray-500 text-xl flex items-center
                 justify-center {userLoggedIn ? 'active-cart': ''}">
        <Icon icon={faUser} class={userLoggedIn ? 'text-primary-900': ''}/>
      </div>
    </a>
  -->
  <!--
    ICON CART ========================================
  -->
  <!--
      <div class="mx-auto w-12 h-12 mb-6 rounded-full bg-gray-200 text-gray-500
                text-xl flex items-center justify-center relative
                {$userStore.cartList.length > 0 ? ' active-cart ' : ''}"
      on:click={cartHandler}>

        {#if $userStore.cartList.length > 0}
          <div class="absolute rounded-full w-6 h-6 bg-red-500 text-white cart-badge">
-->
  <!--
    Use reduce function to calculate sum of quantity of all items in cart
    ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  -->
  <!--
              {$userStore.cartList.reduce((sum, value) => {
                return sum + value.qty
              }, 0)}
            </div>
          {/if}

          <Icon icon={faShoppingCart} class="{$userStore.cartList.length > 0 ? 'text-primary-500' : ''}"/>

        </div>
    </div>

  -->
</div>

<style>
  .header {
    min-height: 3.5rem;
    /*padding-top: 0.5rem;*/
    /*padding-bottom: 0.5rem;*/
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
