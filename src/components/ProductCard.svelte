<script>
  import Button from 'smelte/src/components/Button'
  import Icon from 'fa-svelte'
  import {faHeart} from '@fortawesome/free-regular-svg-icons'
  import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import {saveCartToCookie, saveFavorites, userStore} from '../store'
  import {Dialog, TextField} from 'smelte'
  import {fade} from 'svelte/transition'

  export let img = ''
  export let title = 'produkt A'
  export let subtitle = 'förpakning'
  export let price = '99.00'
  export let button = 'Lägg till'
  export let productId = ''

  let productDetails = false

  $: productData = {
    img: img,
    title: title,
    subtitle: subtitle,
    price: price,
    productId: productId,
  }

  // check if product already exists in favorite list in global state
  $: isFavorite = $userStore.favoriteList.findIndex(x => x === productId) > -1

  function cartHandler() {
    addToCart(productData)
    console.log('add id: ', productData.productId, productId)
    console.log('cart', $userStore.cartList)
  }

  function addToCart(productData) {
    const cartItem = {
      productData: productData,
      qty: 1
    }
    // Find cart item index that has the same product id that has our product
    // in this product cart. If not found, index would be -1
    const foundIndex = $userStore.cartList
        .findIndex(cartListItem => cartListItem.productData.productId === productData.productId)
    if (foundIndex === -1) {
      $userStore.cartList.push(cartItem)
    } else {
      $userStore.cartList[foundIndex].qty += 1
    }
    // update quantity of items in cart
    $userStore.cartNumber = $userStore.cartList.length
    saveCartToCookie()
  }

  // Add or delete favorite product from favorite list
  function favoritesHandler() {
    if (!$userStore.favoriteList.includes(productId)) {
      $userStore.favoriteList.push(productId)
      $userStore.favoriteNumber = $userStore.favoriteList.length
    } else {
      $userStore.favoriteList = $userStore.favoriteList.filter(x => x !== productId)
      $userStore.favoriteNumber = $userStore.favoriteList.length
    }

    saveFavorites()
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

  <div class="text-header4 mt-12 mb-2">{title}</div>

  <div class="text2">{subtitle}</div>

  <div class="text-header3 mt-5 mb-4">{price.toFixed(2).replace('.', ',')} kr</div>

  <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 text-header4 mb-4"
          on:click={cartHandler}>
    {button}
  </Button>

  <div class="flex justify-center">
    <div class="w-16 h-16 mb-6 rounded-full bg-gray-200 text-2xl flex items-center
                justify-center text-gray-400 mx-2 icon" on:click={favoritesHandler}>
      <Icon icon={faHeart} class="{isFavorite ? 'text-red-400' : ''}"/>
    </div>

    <div class="w-16 h-16 mb-6 rounded-full bg-gray-200 text-2xl flex items-center
    justify-center text-blue-500 mx-2 icon"
         on:click={() => {productDetails=true}}>
      <Icon icon={faInfoCircle}/>
    </div>
  </div>

  <Dialog bind:value={productDetails} class="overflow-y-auto max-h-screen lg:mx-10">
    <h5 class="mt-4" slot="title">{productData.title}</h5>

    <div class="flex flex-row flex-wrap text-center"  transition:fade>
      <div class="w-full sm:w-1/3">
        <div class="pb-5"><img src="./img/{productData.img}" alt="bild"></div>

      </div>

      <div class="w-full mb-4 text-left
                  sm:w-2/3 lg:pt-10 lg:flex lg:items-center lg:px-8">
        <div>Suspendisse eget turpis eu libero tempor dapibus. Nulla nunc justo, fermentum
          ac ultrices eu, volutpat nec dui. Nullam venenatis et sem ut rutrum. Donec maximus
          imperdiet nunc, ullamcorper facilisis ex interdum nec. Nulla efficitur quam tempus
          ex lacinia, non dapibus nisi ultricies.
          Phasellus dictum lorem nec bibendum rhoncus. Cras porttitor efficitur lorem
          nec scelerisque.
          Nulla efficitur quam tempus
          ex lacinia, non dapibus nisi ultricies.
          Phasellus dictum lorem nec bibendum rhoncus. Cras porttitor efficitur lorem
          nec scelerisque.</div>
      </div>

    </div>
    <Button text on:click={() => productDetails = false}>Stäng</Button>
  </Dialog>
</div>


<style>
  .product-box {
    height: 673px;
    width: 300px;
    /*background: lightblue;*/
    /*transition: all .1s;*/
  }

  .product-box:hover {
    /*transform: scale(1.02);*/
  }

  .img-placeholder {
    background-position-x: center;
    background-size: 115%;
    /*background-position-y: 2rem;*/
  }

  .icon {
    transition: all .1s;
  }

  .icon:hover {
    transform: scale(1.1);
  }

</style>
