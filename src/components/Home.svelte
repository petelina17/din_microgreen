<script>
  import Cart from './Cart.svelte'
  import SlideContainer from './SlideContainer.svelte'
  import Header from './Header.svelte'
  import TopBanner from './TopBanner.svelte'
  import ExpoBanner from './ExpoBanner.svelte'
  import LinkBanner from './LinkBanner.svelte'
  import ProductCard from './ProductCard.svelte'
  import ProductBanner from './ProductBanner.svelte'
  import Footer from './Footer.svelte'
  import Login from './Login.svelte'


  let showCart = false
  let showLoginForm = false

  let article = {
    img: 'redis.jpg',
    title: 'Lorem ipsum',
    text: `Donec volutpat enim nibh, sit amet eleifend velit congue ac. Suspendisse maximus
           felis sed nulla cursus facilisis. Vivamus sollicitudin augue vel nisi rutrum,
           non varius ipsum molestie. Proin auctor est sit amet justo laoreet,
           ultricies faucibus libero tincidunt. Praesent elementum tellus sit amet ligula
           fermentum, eu tempus purus commodo. Nunc nibh sapien.`,
    buttonPrimary: {label: 'Läs mer', link: '/articles/1'},
    buttonSecondary: {label: 'Till artiklar', link: '/articles'}
  }

  let forum = {
    img: 'forunNew.jpg',
    title: 'Fusce laoreet',
    text: `Volutpat enim nibh, sit amet eleifend velit congue ac. Suspendisse maximus
           felis sed nulla cursus facilisis. Vivamus sollicitudin augue vel nisi rutrum,
           non varius ipsum molestie. Proin auctor est sit amet justo laoreet,
           ultricies faucibus libero tincidunt. Praesent elementum tellus sit amet ligula
           fermentum, eu tempus purus commodo.`,
    buttonPrimary: {label: 'Till forum', link: '/forum'}
  }

</script>

<Header on:login={() => {showLoginForm = true}}/>

<TopBanner/>

<ExpoBanner img={article.img} title={article.title} text={article.text}
            buttonPrimary={article.buttonPrimary}
            buttonSecondary={article.buttonSecondary}
            />

<LinkBanner title="Övervaka dina växter live" button="Visa mer"
            img="fullmoon3-b.jpg" link="/live-cam"/>

<div id="shop"><ProductBanner/></div>

<LinkBanner title="" button="Receptbok"
            img="smoky.jpg" link="/recipes"/>

<ExpoBanner img={forum.img} title={forum.title} text={forum.text}
            buttonPrimary={forum.buttonPrimary} orient="right" />

<Footer/>

<Login bind:showDialog={showLoginForm} />


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
