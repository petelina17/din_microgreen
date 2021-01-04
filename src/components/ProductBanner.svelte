<script>
  import ProductCard from './ProductCard.svelte'
  import {API} from '../api.js'
  import Icon from 'fa-svelte'
  import {
    faChevronLeft,
    faChevronCircleLeft,
    faChevronRight,
    faChevronCircleRight
  } from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'

  const api = new API()
  const carouselSize = 4

  let products = api.getProducts()

  // make Products as endless loop to make carousel products always visible
  let carousel = products.slice(0, carouselSize)

  function back() {
    // move last element of products to start =>
    // remake products list as a new list where last element is moved to "head"
    products = [products[products.length - 1], ...products.slice(0, products.length - 1)]
    carousel = products.slice(0, carouselSize)
  }

  function next() {
    // move first element of products to end =>
    // remake products list as a new list where first element is moved to "tail"
    products = [...products.slice(1, products.length), products[0]]
    carousel = products.slice(0, carouselSize)
  }

</script>

<div class="">
  <div class="wrapper flex relative">

    <div class="h-16 w-16 rounded-full absolute bg-gray-100 hover:bg-gray-200
      text-xl flex items-center justify-center left-icon cursor-pointer"
         on:click={back}>
      <Icon class="text-gray-600" icon={faChevronLeft}/>
    </div>

    {#each carousel as product}
      <ProductCard img={product.img}
                   title={product.title}
                   subtitle={product.subtitle}
                   price={product.price}
                   button="Lägg till"
                   productId={product.productId}
      />
    {/each}

    <div class="h-16 w-16 rounded-full absolute bg-gray-100 hover:bg-gray-200
      text-xl flex items-center justify-center right-icon cursor-pointer"
         on:click={next}>
      <Icon class="text-gray-600" icon={faChevronRight}/>
    </div>

  </div>
</div>

<style>
  .left-icon {
    left: -5rem;
    top: 19rem;
    color: #0b0b0b;
  }

  .right-icon {
    right: -5rem;
    top: 19rem;
  }
</style>
