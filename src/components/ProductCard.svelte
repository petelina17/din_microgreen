<script>
  import Button from 'smelte/src/components/Button'
  import Icon from 'fa-svelte'
  import {faHeart} from '@fortawesome/free-regular-svg-icons'
  import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import {userStore,addToCart} from '../store'

  export let img = ''
  export let title = 'produkt A'
  export let subtitle = 'förpakning'
  export let price = '99.00 kr'
  export let button = 'Lägg till'
  export let productId = ''

  export let heartSelected = false

  let productData = {
    img: img,
    title: title,
    subtitle: subtitle,
    price: price,
    productId: productId,
  }

  function cartHandler() {
    addToCart(productData)
    console.log('cart', $userStore.cartList)
  }

  // Add or delete favorite product from favorite list
  function favoritesHandler() {
    if (!$userStore.favoriteList.includes(productId)) {
      $userStore.favoriteList.push(productId)
      $userStore.favoriteNumber = $userStore.favoriteList.length
      heartSelected = true
    } else {
      $userStore.favoriteList = $userStore.favoriteList.filter(x => x !== productId)
      $userStore.favoriteNumber = $userStore.favoriteList.length
      heartSelected = false
    }
  }

  function goToDetails() {
    // URL parameter to open pop-up with product details
    push('/?productId=' + productId)
  }

</script>

<div class="product-box text-center mx-2 my-4 bg-gray-50 select-none">
  <div class="m-auto rounded-full h-64 w-64 bg-cover img-placeholder mt-12"
       style={"background-image: url('img/" + img + "');"}>
    &nbsp
  </div>

  <div class="header4 mt-12 mb-2">{title}</div>

  <div class="text2">{subtitle}</div>

  <div class="header3 mt-5 mb-4">{price}</div>

  <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mb-4"
          on:click={cartHandler}>
    {button}
  </Button>

  <div class="flex justify-center">
    <div class="w-16 h-16 mb-6 rounded-full bg-gray-200 text-2xl flex items-center
                justify-center text-gray-400 mx-2" on:click={favoritesHandler}>
      <Icon icon={faHeart} class="{heartSelected ? 'text-red-400' : ''}"/>
    </div>

    <div class="w-16 h-16 mb-6 rounded-full bg-gray-200 text-2xl flex items-center
    justify-center text-blue-500 mx-2">
      <Icon icon={faInfoCircle}/>
    </div>
  </div>

</div>

<style>
  .product-box {
    height: 673px;
    width: 300px;
    /*background: lightblue;*/
  }

  .img-placeholder {
    background-position-x: center;
    background-size: 115%;
    /*background-position-y: 2rem;*/
  }

  .active-favorite {
    color: red;
  }

</style>
