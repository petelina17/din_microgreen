<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore} from '../store'
  import CartItem from './CartItem.svelte'
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
  import Button  from 'smelte/src/components/Button'

  $: cartTotal = $userStore.cartList.reduce((sum,item)=>{
    return sum + item.productData.price * item.qty
  }, 0)

  function nextHandler() {

  }
</script>

<div class="w-full h-full main">
  <SimpleHeader noClose={true} title="Din varukorg" icon={faShoppingCart}
    bgColor="bg-gray-700"
  />

  <div class="flex flex-wrap pt-12">

    <!--
      Tailwind CSS Responsive
      https://v1.tailwindcss.com/docs/width#responsive
    -->
    <div class="lg:w-2/3 w-full px-5">
      {#each $userStore.cartList as item}
        <CartItem title={item.productData.title}
                  subtitle={item.productData.subtitle}
                  qty={item.qty}
                  unitPrice={item.productData.price}
                  productId={item.productData.productId}
                  img={item.productData.img}
        />
      {/each}
    </div>
    <div class="text-center lg:w-1/3 w-full">

      <div class="header2 mb-8">{cartTotal.toFixed(2)} kr</div>

      <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mb-4"
              on:click={nextHandler}>
        Till kassan
      </Button>
    </div>

  </div>


</div>

<style>
  .main {
    margin: auto;
    /*background-color: #eafafc;*/
  }

</style>
