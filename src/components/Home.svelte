<script>
  import Cart from './Cart.svelte'
  import SlideContainer from './SlideContainer.svelte'
  import Header from './Header.svelte'
  import TopBanner from './TopBanner.svelte'
  import ArticleBanner from './ArticleBanner.svelte'
  import LinkBanner from './LinkBanner.svelte'
  import ProductCard from './ProductCard.svelte'


  let showCart = false

</script>

<Header/>

<TopBanner/>

<ArticleBanner/>

<LinkBanner title="Övervaka dina växter live" button="Visa mer"
            img="fullmoon3-b.jpg" link="/live-cam"/>


<!-- TODO:move these to ProductBanner component -->
<div class="flex">
  <ProductCard img="senap.jpg"/>
  <ProductCard img="redis.jpg"/>
  <ProductCard img="goroh.jpg"/>
<!--  <ProductCard img="clover.jpg"/>-->
  <ProductCard img="camera2.jpg"/>
</div>


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
