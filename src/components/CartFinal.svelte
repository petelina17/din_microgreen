<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore, orderNumber, clearCart} from '../store'
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
  import Button from 'smelte/src/components/Button'
  import {push} from 'svelte-spa-router'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher();

  clearCart()

  function close() {
    dispatch('close')
  }
</script>


<SimpleHeader noClose={true} title="Order information" icon={faShoppingCart}
              bgColor="bg-primary-700"
/>

<div class="p-20">
  <div class="text-header2 text-primary-500">
    TACK {$userStore.data.firstName}!
  </div>

  <div class="py-5 text-header4 text-gray-700">
    Din ordernummer är: <span class="text-offblack">{$orderNumber}.</span>
    &nbsp;Nu är dina webbkameror aktiverade!
  </div>

  <div class="w-full text-center pb-12">
    <div class="w-48 h-48 bg-cover bg-center inline-block"
         style="background-image: url('/img/forum4.jpg')">
      &nbsp
    </div>
  </div>

  <div class="text-center hover:underline text-blue-500 cursor-pointer text-xl"
       on:click={close}>
    Till hemsidan
  </div>
</div>

