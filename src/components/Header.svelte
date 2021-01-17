<script>
  import {API} from '../api.js'
  import {userStore} from '../store'
  import {setUserLoggedOut} from '../authorization'
  import {createEventDispatcher} from 'svelte'
  import {fade, fly, slide} from 'svelte/transition'
  import SocialBlock from './SocialBlock.svelte'
  import UserBlock from './UserBlock.svelte'
  import {faBars,} from '@fortawesome/free-solid-svg-icons'
  import Icon from 'fa-svelte'

  const dispatch = createEventDispatcher()
  let api = new API()

  let user = null
  $: userLoggedIn = $userStore.data != null


  function login() {
    console.log('login handler 2')
    dispatch('login')
    // setUserLoggedIn('bob@gmail.com')
  }

  function logout() {
    setUserLoggedOut()
  }

  function cartHandler() {
    console.log('cart handler 2')
    dispatch('cart')
  }

  let showHamburger = false
</script>

<div class="bg-white lg:bg-gray-600 lg:bg-opacity-75 fixed w-full z-20 select-none">

  <div class="header flex items-center text-header4 justify-between lg:justify-end wrapper shadow-md lg:shadow-none">

    <div class="flex items-center justify-center text-gray-800 text-left w-12 h-12 rounded lg:hidden"
         style="font-size: 1.6rem">
      {#if showHamburger === true}
        <div class="text-white" on:click={() => { showHamburger = !showHamburger }}>
          <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="#3A3A3A" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
      {:else}
        <div style="margin-top: -0.4rem" on:click={() => { showHamburger = !showHamburger }}>
          <Icon icon={faBars}/>
        </div>
      {/if}
    </div>

    <div class="lg:hidden">
      <SocialBlock/>
    </div>

    <div class="lg:hidden">
      <UserBlock on:login={login} on:cart={cartHandler}/>
    </div>

    <nav class="hidden lg:flex items-center text-gray-200 uppercase opacity-100">
      <div class="menu-item ml-5"><a href="/#/live-cam">Live kamera</a></div>
      <div class="menu-item ml-5"><a href="/#shop">Butik</a></div>
      <div class="menu-item ml-5"><a href="/#/recipes">Recept</a></div>
      <div class="menu-item ml-5"><a href="/#/articles">Artiklar</a></div>
      <div class="menu-item ml-5"><a href="/#/forum">Forum</a></div>
    </nav>

    {#if userLoggedIn}
      <div class="hidden lg:block uppercase menu-item text-gray-500 ml-5" on:click={logout}>logout</div>
    {:else}
      <div class="hidden lg:block uppercase menu-item text-primary-200 ml-5" on:click={login}>Login</div>
    {/if}
  </div>

  {#if showHamburger === true}
    <div class="bg-white text-gray-800 absolute origin-top-left text-header4 w-full text-left px-5 py-3 z-10"
         transition:slide>
      <div class="py-2"><a href="/#/live-cam">Live kamera</a></div>
      <div class="py-2"><a href="/#shop">Butik</a></div>
      <div class="py-2"><a href="/#/recipes">Recept</a></div>
      <div class="py-2"><a href="/#/articles">Artiklar</a></div>
      <div class="py-2"><a href="/#/forum">Forum</a></div>

      {#if userLoggedIn}
        <div class="py-2 text-red-600" on:click={logout}>Logga ut</div>
      {:else}
        <div class="py-2 text-red-600" on:click={login}>Logga in</div>
      {/if}

    </div>
  {/if}

  <div class="hidden lg:block absolute">
    <SocialBlock/>
  </div>

  <div class="hidden lg:block absolute right-0">
    <UserBlock on:login={login} on:cart={cartHandler}/>
  </div>

</div>

<style>
  .header {
    min-height: 3.5rem;
    /*padding-top: 0.5rem;*/
    /*padding-bottom: 0.5rem;*/
  }

  /*
  .social-icons {
    left: 0.5rem;
    top: 15rem;
  }
   */


  .menu-item {
    cursor: pointer;
  }

  .menu-item:hover {
    transform: scale(1.03);
    color: white;
  }


</style>
