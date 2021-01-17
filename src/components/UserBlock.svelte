<script>
  import Icon from 'fa-svelte'
  import {userStore} from '../store'
  import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()
  $: userLoggedIn = $userStore.data != null

  function cartHandler() {
    console.log('cart handler 1')
    dispatch('cart')
  }

  function login() {
    console.log('login handler 1')
    dispatch('login')
  }
</script>

<div class="flex items-center h-full text-center text-xl
            lg:w-16 lg:mr-6 lg:flex-col lg:justify-end lg:h-120 ">
  <!--
    ICON USER ========================================
  -->
  <a href="/#/account">
    <div class="flex justify-center items-center w-10 h-10 rounded-full mx-1
                lg:mx-auto lg:w-12 lg:h-12 lg:bg-gray-200 lg:mt-3
                {userLoggedIn ? ' text-primary-900': ' text-gray-400'}">
      <Icon icon={faUser}/>
    </div>
  </a>
  <!--
    ICON CART ========================================
  -->
  <div class="animate-none flex justify-center items-center w-10 h-10 rounded-full mx-1 mt-1 relative
              lg:mx-auto lg:w-12 lg:h-12 lg:mt-3 lg:bg-gray-200 cursor-pointer
              {$userStore.cartList.length > 0 ? ' lg:text-primary-600 md:animate-pulse ' : ' text-gray-400'}"
       on:click={cartHandler}>
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
    <Icon icon={faShoppingCart}/>
  </div>
  <div class="lg:bg-primary-500 lg:text-white h-px w-px">&nbsp;</div>
  <div class=" lg:bg-gray-600 lg:text-white h-px w-px">&nbsp;</div>

</div>

<style>
  /*
  .active-cart {
    background-color: #f9f9f9;
    transition: all .3s;
  }


  .active-cart:hover {
    transform: scale(1.1);
  }
  */

  .cart-badge {
    top: -0.3rem;
    left: -0.3rem;
    font-size: 1rem;
    /*border: 0.15rem solid white;*/
  }
</style>
