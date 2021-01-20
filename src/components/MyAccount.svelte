<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore} from '../store'
  import {faUser} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import Button from 'smelte/src/components/Button'
  import Login from './Login.svelte'
  import {productId} from './ProductCard.svelte'
  import {API} from '../api'
  import {onMount} from 'svelte'
  import {slide} from 'svelte/transition'
  import {faChevronUp,faChevronDown} from '@fortawesome/free-solid-svg-icons'
  import Icon from 'fa-svelte'

  const api = new API()

  $: showLoginForm = $userStore.data == null

  let products = api.getProducts()
  let favoriteProducts = []
  let showOrdersDetails = false

  onMount(() => {
    // TODO: if user is going to login - fix somehow favorites list
    // ...

    if ($userStore.data == null) {
      setTimeout(() => {
        favoriteProducts = products.filter(product => $userStore.favoriteList.includes(product.productId))
      }, 500)
    } else {
      favoriteProducts = products.filter(product => $userStore.favoriteList.includes(product.productId))
    }
  })

  function closeHandler() {
    push('/')
  }
</script>

<Login bind:showDialog={showLoginForm} on:close={closeHandler}/>


{#if $userStore.data != null}

  <SimpleHeader title="Mitt konto" icon={faUser} bgColor={"bg-primary-500"}
                on:close={closeHandler}/>

  <div class="flex flex-col bg-gray-200">

    <div class="bg-alert-50">
      <div class="text-header4">
        Orderhistorik ({$userStore.data.orders.length})
        <div on:click={() => {showOrdersDetails = !showOrdersDetails}}>
          <Icon icon={showOrdersDetails === true ? faChevronUp : faChevronDown}/>
        </div>

        {#if showOrdersDetails === true}
          <div transition:slide>
          {#each $userStore.data.orders as order}
            <div class="flex justify-center text-left">
              <div class="w-64">{order.number}</div>
              <div class="w-64">{new Date(order.date).toLocaleDateString()}</div>
            </div>
          {/each}
          </div>
        {/if}
      </div>

    </div>

    <div class="bg-blue-50">
      <div class="text-header4">
        Mina webbkameror
      </div>
      <div class="flex justify-center mx-auto bg-red-500">
        <div>CAMERA1</div>
        <div>CAMERA2</div>
      </div>
    </div>


    <div class="bg-gray-200">

      <div class="text-header4">
        Mina favoriter
      </div>

      <div class="">
        {#each favoriteProducts as item}
          <div class="w-16 h-16 rounded-full bg-gray-200 bg-cover img-placeholder"
               style={"background-image: url('img/" + item.img + "');"}>
            &nbsp
          </div>
          <div>{item.title}</div>
<!--          <div>{item.subtitle}</div>-->
        {/each}
      </div>
    </div>
  </div>

  <div class="bg-alert-300">
    <div class="text-header4">
      Personal info
    </div>
    <div class="">
      <Button remove="text-sm uppercase"
              add="rounded-full w-full h-12 text-base mb-4
                  md:w-48 md:mr-8
                  lg:h-16 lg:w-64 lg:text-header4"
              on:click="">
        Spara ändringar
      </Button>
    </div>
  </div>
{/if}
