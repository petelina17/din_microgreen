<script>
  import Cart from './Cart.svelte'
  import SlideContainer from './SlideContainer.svelte'


  let showCart = false

</script>

<div>Home</div>

<div on:click={() => {showCart = true}}>show cart</div>

<div>{showCart}</div>

{#if showCart === true}
  <SlideContainer on:close={() => {showCart = false}}>
    <Cart />
  </SlideContainer>
{/if}


