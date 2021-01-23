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
  import Registration from './Registration.svelte'
  import CartPayment from './CartPayment.svelte'
  import CartFinal from './CartFinal.svelte'
  import {checkIfUserLoggedIn} from '../authorization'
  import {userStore} from '../store'
  import MyAccount from './MyAccount.svelte'

  let showCart = false
  let showLoginForm = false

  let article = {
    img: 'redis.jpg',
    title: 'Mikrogrönt - guide till ett friskare & smalare liv',
    text: ` Mikrogrönt är små hälsobomber man kan odla enkelt hemma i köksfönstret
           och skotten börjar ofta växa på bara några dagar. Skott är fullproppade med
           vitaminer och mineraler. De unga små plantorna är extra näringsrika eftersom plantan
          behöver all näringen den kan få för att kunna gro växa sig stor. När vi skördar
          plantan när den är så pass ung är all näringen koncentrerad och ett litet skott
          kan innehålla upp till 40 gånger mer näring än om plantan skulle få växa sig stor.

    `,
    buttonPrimary: {label: 'Läs mer', link: '/articles/1'},
    buttonSecondary: {label: 'Till artiklar', link: '/articles'}
  }

  let forum = {
    img: 'forunNew.jpg',
    title: 'Din Microgreen forum',
    text: `1/11, 2020 kl. 22:06

         "Carl, Skåne:   Min erfarenhet av odling... valt att satsa på vertikal inomhusodling med främsta
          odlingsmetod som hydroponi. I februari 2019 startade jag på riktigt med odlingen och har aven sålt en del till lokala restauranger!
          Är det nån som vet..." `,
    buttonPrimary: {label: 'Till forum', link: '/forum'}
  }

  async function cartNextHandler() {
    // const loggedIn = await checkIfUserLoggedIn()

    $userStore.buyProcess = 'payment'
  }

</script>


<Header on:login={() => {showLoginForm = true}}
        on:cart={()=> {$userStore.buyProcess = 'cart'}}/>

<TopBanner/>


<ExpoBanner img={article.img} title={article.title} text={article.text}
            buttonPrimary={article.buttonPrimary}
            buttonSecondary={article.buttonSecondary}
/>

<LinkBanner title="Övervaka dina växter live" button="Visa mer"
            img="fullmoon3-b.jpg" link="/live-cam"/>


<div id="shop">
  <ProductBanner/>
</div>


<LinkBanner title="" button="Receptbok"
            img="smoky.jpg" link="/recipes"/>

<ExpoBanner img={forum.img} title={forum.title} text={forum.text}
            buttonPrimary={forum.buttonPrimary} orient="right"/>



{#if $userStore.buyProcess != null}
  <SlideContainer on:close={() => {$userStore.buyProcess = null}}>

    {#if $userStore.buyProcess === 'cart'}

      <Cart on:next={cartNextHandler}/>

    {:else if $userStore.buyProcess === 'registration'}

      <Registration on:success={()=>{$userStore.buyProcess = 'payment'}}/>

    {:else if $userStore.buyProcess === 'payment'}

      <CartPayment on:success={()=>{$userStore.buyProcess = 'final'}}/>

    {:else if $userStore.buyProcess === 'final'}

      <CartFinal on:close={() => {$userStore.buyProcess = null}}/>
    {/if}

  </SlideContainer>
{/if}


<Footer/>



<Login bind:showDialog={showLoginForm}/>


