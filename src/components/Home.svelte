<script>
  import Cart from './Cart.svelte'
  import SlideContainer from './SlideContainer.svelte'
  import Header from './Header.svelte'
  import TopBanner from './TopBanner.svelte'


  let showCart = false

</script>

<Header/>

<TopBanner/>

<!--
<div style="height: 600px; background-color: #728e30">Home</div>

<div style="height: 2000px; background-color: white">
  <div on:click={() => {showCart = true}}>show cart</div>

  <div>{showCart}</div>

  {#if showCart === true}
    <SlideContainer on:close={() => {showCart = false}}>
      <Cart/>
    </SlideContainer>
  {/if}

</div>
-->
