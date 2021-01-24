<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore} from '../store'
  import CartItem from './CartItem.svelte'
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
  import Button from 'smelte/src/components/Button'
  import {createEventDispatcher} from 'svelte'
  import Login from './Login.svelte'
  import {Checkbox} from 'smelte'

  const dispatch = createEventDispatcher()

  let showLoginForm = false

  $: cartTotal = $userStore.cartList.reduce((sum, item) => {
    return sum + item.productData.price * item.qty
  }, 0)

  function nextHandler() {
    dispatch('next')
  }

  function guestHandler(checked) {
    $userStore.isGuest = checked.detail

  }
</script>

<div class="w-full h-full main">
  <SimpleHeader noClose={true} title="Du är på rätt väg!" icon={faShoppingCart}
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

      <div class="text-header2 mb-8">{cartTotal.toFixed(2).replace('.', ',')} kr</div>

      {#if $userStore.data == null}
        <Button remove="text-sm uppercase"
                add="rounded-full w-64 h-16 text-header4 mb-4"
                disabled={$userStore.isGuest === true}
                on:click={()=>{showLoginForm = true}}>
          Logga in
        </Button>

        <Checkbox class="text-lg" color="primary"
                  label={"Fortsätt som gäst"}
                  checked={false}
                  on:change={(checked) => { guestHandler(checked) }}
        />

        <!--
        <Button remove="text-sm uppercase"
                color="secondary"
                add="rounded-full w-64 h-16 text-header4 mb-4"
                on:click={guestHandler}>
          Som gäst
        </Button>
        -->

      {/if}

      <Button remove="text-sm uppercase"
              add="rounded-full w-64 h-16 text-header4 mb-4"
              disabled={($userStore.data == null || $userStore.cartList.length === 0) && $userStore.isGuest === false}
              on:click={nextHandler}>
        Till kassan
      </Button>
    </div>

  </div>


</div>

<Login bind:showDialog={showLoginForm}/>

<style>
    .main {
        margin: auto;
        /*background-color: #eafafc;*/
    }

</style>
