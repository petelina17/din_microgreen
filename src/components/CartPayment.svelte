<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore} from '../store'
  import CartItem from './CartItem.svelte'
  import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
  import Button from 'smelte/src/components/Button'
  import Checkbox from 'smelte/src/components/Checkbox/Checkbox.svelte'
  import {createEventDispatcher} from 'svelte'
  import {ProgressCircular, TextField} from 'smelte'

  const dispatch = createEventDispatcher()

  let progress = 0
  let spinner = false

  $: cartTotal = $userStore.cartList.reduce((sum, item) => {
    return sum + item.productData.price * item.qty
  }, 0)

  const deliveryOptions = [
    {title: 'Kurir Din Microgreen', price: 39, checked: true},
    {title: 'Hämta i butik', price: 0, checked: false}
  ]

  $: deliveryFound = deliveryOptions.find(x => x.checked === true)

  $: totalSumma = cartTotal + (deliveryFound != null ? deliveryFound.price : 0)

  let swish = false
  let visa = false

  let swishData = {
    mobil: ''
  }

  let visaData = {
    number: '',
    month: '',
    year: '',
    holder: '',
    cvv: ''
  }

  function finishHandler() {
    spinner = true
    setTimeout(() => {
      spinner = false
      dispatch('success')
    }, 4000)

  }

  // Make possible one check box active in a time
  // Set all the other check boxes to unchecked
  function deliveryCheckHandler({detail}, i) {
    if (detail === true) {
      deliveryOptions.forEach((item, j) => {
        if (j !== i) {
          deliveryOptions[j].checked = false
        }
      })
    }
  }

</script>

<div class="w-full h-full main">
  <SimpleHeader noClose={true} title="Kassa" icon={faShoppingCart}
                bgColor="bg-gray-700"
  />

  <div class="flex flex-wrap pt-12 select-none">

    <!--   -->
    <div class="lg:w-2/3 w-full px-5">

      <div class=" kassa header4">Beställningsuppgifter</div>

      {#each $userStore.cartList as item}
        <CartItem title={item.productData.title}
                  subtitle={item.productData.subtitle}
                  qty={item.qty}
                  unitPrice={item.productData.price}
                  productId={item.productData.productId}
                  img={item.productData.img}
        />
      {/each}

      <div class="kassa header4 mt-8">Välj leveranssätt</div>

      {#each deliveryOptions as item, i}
        <div class="pl-6 text-left flex py-3">
          <div class="w-2/3">
            <Checkbox class="header4" color="primary"
                      label={item.title}
                      bind:checked={item.checked}
                      on:change={(checked) => { deliveryCheckHandler(checked, i) }}
            />
          </div>

          <div class="w-1/3 header4 text-right" style="padding-right: 4.3rem">
            {item.price.toFixed(2)} <span class="text-base">kr</span>
          </div>
        </div>
      {/each}

      <div class="kassa header4">Välj betalsätt</div>

      <div class="pl-6 text-left flex py-3">
        <Checkbox class="header4" color="primary"
                  label="Betala direkt - SWISH"
                  bind:checked={swish}
                  on:change={() => { visa = false }}
        />
      </div>
      {#if swish === true}
        <div class="py-3 w-full p-8">
          <TextField bind:value={swishData.mobil} label="Mobilnummer" outlined />
        </div>
      {/if}

      <div class="pl-6 text-left flex py-3">
        <Checkbox class="header4" color="primary"
                  label="Betalkort - VISA"
                  bind:checked={visa}
                  on:change={() => { swish = false }}
        />
      </div>
      {#if visa === true}
        <div class="py-3 w-full px-8">
          <div>
            <TextField bind:value={visaData.number} label="Kortnummer" outlined />
          </div>
          <div class="flex">
            <TextField class="mr-8" bind:value={visaData.month} label="Månad" outlined />
            <TextField bind:value={visaData.year} label="År" outlined />
          </div>
          <div>
            <TextField bind:value={visaData.number} label="Kortenehavare" outlined />
          </div>
          <div>
            <TextField bind:value={visaData.number} label="CVV" outlined />
          </div>
        </div>
      {/if}

    </div>

    <div class="text-center lg:w-1/3 w-full">

      <div class="header3 mb-8">

        <div>Total:</div>

        {totalSumma.toFixed(2)} kr

      </div>


      <div>
        <Button remove="text-sm uppercase"
                add="rounded-full w-64 h-16 header4 mb-4"
                disabled={spinner === true}
                on:click={finishHandler}>
          Slutför köp
        </Button>

        <!-- https://smeltejs.com/components/progress-indicators-->
        {#if spinner === true}
          <div class="spinner">
            <ProgressCircular/>
          </div>
        {/if}

      </div>

    </div>
  </div>
</div>

<style>

  .kassa {
    background-color: oldlace;
  }

  .spinner {
    /*background-color: blue;*/
    width: 5rem;
    margin-left: 9.5rem;
    margin-top: 2rem;
  }

</style>
