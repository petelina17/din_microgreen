<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore, loadingUser} from '../store'
  import {faUser, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import Button from 'smelte/src/components/Button'
  import Login from './Login.svelte'
  import {productId} from './ProductCard.svelte'
  import {API} from '../api'
  import {onMount} from 'svelte'
  import {slide} from 'svelte/transition'
  import {faChevronUp, faChevronDown, faHistory, faVideo} from '@fortawesome/free-solid-svg-icons'
  import Icon from 'fa-svelte'
  import {ProgressCircular} from 'smelte'

  const api = new API()

  let allCameras = [
    {name: 'camera1', img: 'webkam5.jpg', id: '1'},
    {name: 'camera2', img: 'webkam11.jpg', id: '2'},
    {name: 'camera3', img: 'webkam3.jpg', id: '3'},
    {name: 'camera4', img: 'webkam7.jpg', id: '4'},
    {name: 'camera5', img: 'webkam1.jpg', id: '5'},
    {name: 'camera6', img: 'webkam6.jpg', id: '6'},
    {name: 'camera7', img: 'webkam7.jpg', id: '7'},
    {name: 'camera8', img: 'webkam10.jpg', id: '8'}
  ]

  let lastOrder = null

  let cameras = []


  // time from start to complete the order(24 hours)
  let processingTime = 24 * 60 * 60 // seconds

  $: getCamerasForLastOrder($userStore.data)
  $: setFavorites($userStore.favoriteList)

  $: showLoginForm = $loadingUser === false && $userStore.data == null

  let products = api.getProducts()
  let favoriteProducts = []

  let showOrdersDetails = false
  let showCameras = true
  let showFavorites = false
  let showPersonalDetails = false

  // seconds since order
  let runningTime = 0
  $: days = Math.floor(runningTime / 60 / 60 / 24)
  $: hours = Math.floor((runningTime - days * 24 * 60 * 60) / 60 / 60)
  $: minutes = Math.floor((runningTime - days * 24 * 60 * 60 - hours * 60 * 60) / 60)
  $: seconds = runningTime - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

  // https://stackoverflow.com/questions/1050720/adding-hours-to-javascript-date-object
  let today = new Date()
  today.setSeconds(0)

  onMount(() => {
    const intervalId = setInterval(() => {
      runningTime += 1
      if (runningTime > processingTime) {
        // https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript
        clearInterval(intervalId)
        closeOrder()
      }
    }, 1000)
  })

  function setFavorites(favoriteList) {
    favoriteProducts = products.filter(product => favoriteList.includes(product.productId))
  }

  // data == $userStore.data
  function getCamerasForLastOrder(data) {
    if (data == null) {
      return
    }

    if (data.orders != null && data.orders.length > 0) {
      lastOrder = data.orders[data.orders.length - 1]

      const orderDate = new Date(lastOrder.date)
      // https://futurestud.io/tutorials/get-number-of-seconds-since-epoch-in-javascript
      const secondsFromOrderDate = Math.round(new Date().getTime() / 1000 - orderDate.getTime() / 1000)

      runningTime = secondsFromOrderDate
      console.log('secondsFromOrderDate', secondsFromOrderDate)

      const orderItems = lastOrder.items
      const orderProductIdList = orderItems.map(item => item.productData.productId)

      cameras = allCameras.filter(camera => orderProductIdList.includes(camera.id))
    }
  }

  function closeOrder() {
    lastOrder.closed = true
    api.updateUser($userStore.data)
  }

  function closeHandler() {
    push('/')
  }
</script>

<Login bind:showDialog={showLoginForm} on:close={closeHandler}/>


{#if $userStore.data != null}

  <SimpleHeader title="Mitt konto" icon={faUser} bgColor={"bg-primary-500"}
                on:close={closeHandler}/>


  <div class="custom-wrapper">
    <!--
      User orders =================================================
    -->
    <div class="flex flex-col">
      <div class="px-4 ">
        <div class="flex py-4 border-b">
          <div class="text-header4 flex-grow text-left">
            Mina ordrar <span class="text-text2 font-light leading-loose">({$userStore.data.orders.length})</span>
          </div>

          <div class="pt-1" on:click={() => {showOrdersDetails = !showOrdersDetails}}>
            <Icon icon={showOrdersDetails === true ? faChevronUp : faChevronDown}/>
          </div>
        </div>

        {#if showOrdersDetails === true}
          <div class="py-3" in:slide>
            {#each $userStore.data.orders as order}
              <div class="flex justify-center text-left">
                <div class="w-64">#{order.number}</div>
                <div class="w-64">{new Date(order.date).toLocaleDateString()}</div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <!--
      User cams =================================================
     -->
    <div class="bg-white">
      <div class="px-4">

        <div class="flex bg-gray-200 py-4 -mx-4 px-4">
          <div class="text-header4 flex-grow text-left">
            Mina webbkameror
          </div>

          <div class="pt-1" on:click={() => {showCameras = !showCameras}}>
            <Icon icon={showCameras === true ? faChevronUp : faChevronDown}/>
          </div>
        </div>

        {#if showCameras === true}
          {#if lastOrder != null && lastOrder.closed}
            <div class="text-5 py-5 text-gray-500">#{lastOrder.number} Levererad</div>
          {:else}

            <div>
              {#if cameras.length === 0}
                <ProgressCircular/>
              {/if}

              <div class="w-full mx-auto py-4 font-light">
                Snart kommer växtlådor med ditt mikrogrönt visas här och du få
                bevaka din-microgreens utväxt när som helst inom 7 dagar.&nbsp; Ha det roligt!
              </div>
              <div class="text-lg text-blue-300">
                Tillväxt pågår
              </div>
              <div class="text-header3 pb-5 font-light text-blue-300">
                {days} dagar {hours}:{('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
              </div>
            </div>

            <!--
              GRID =================================================
            -->
            <div class="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {#each cameras as item}
                <div class="uppercase text-center">
                  <div class="w-full h-84 bg-cover bg-center mx-auto bg-alert-300 relative"
                       style={"background-image: url('./img/"+ item.img +"')"}>

                    {#if item.img !== "camera2.jpg"}
                      <div class="absolute bottom-0 right-0 pb-5 pr-5">
                        <div class="p-1 text-alert-900 font-mono italic font-bold">
                          {today.toLocaleString()}
                        </div>
                      </div>
                    {/if}

                  </div>

                  <div class="py-2 text-gray-600 text-lg">{item.name}</div>
                </div>
              {/each}
            </div>

          {/if} <!-- order delivered ? -->
          <!--          </div>-->
        {/if} <!-- show cameras ? -->

      </div>
    </div>

    <!--
      User favs =================================================
     -->
    <div class="px-4">
      <div class="flex py-4 border-b">
        <div class="text-header4 flex-grow text-left">
          Mina favoriter
        </div>

        <div class="py-1" on:click={() => {showFavorites = !showFavorites}}>
          <Icon icon={showFavorites === true ? faChevronUp : faChevronDown}/>
        </div>
      </div>

      {#if showFavorites === true}
        <div class="pb-4">

          {#if favoriteProducts.length === 0}
            <div class="text-lg pt-3 text-gray-400">Du har inga favoriter ännu</div>
          {/if}

          {#each favoriteProducts as item}
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-full bg-cover img-placeholder mr-4"
                   style={"background-image: url('img/" + item.img + "');"}>
                &nbsp
              </div>
              <div class="pt-2 text-lg text-gray-700">
                {item.title}
              </div>
            </div>
          {/each}

        </div>
        <!--        </div>-->
      {/if}
    </div>

    <!--
      User details =================================================
    -->
    <div class="px-4 text-left pb-5">
      <div class="flex py-4 bg-gray-200 -mx-4 px-4">
        <div class="text-header4 flex-grow pb-2">
          Personal info
        </div>
        <div class="pt-1" on:click={() => {showPersonalDetails = !showPersonalDetails}}>
          <Icon icon={showPersonalDetails === true ? faChevronUp : faChevronDown}/>
        </div>
      </div>

      {#if showPersonalDetails === true}
        {#if $userStore.data != null}

          <div class="py-3">
            <div class="flex py-1">
              <div class="w-1/2">Email:</div>
              <div class="w-1/2 font-light">{$userStore.data.email}</div>
            </div>

            <div class="flex py-1">
              <div class="w-1/2">Namn:</div>
              <div class="w-1/2 font-light">{$userStore.data.firstName}</div>
            </div>

            <div class="flex py-1">
              <div class="w-1/2">Efternamn:</div>
              <div class="w-1/2 font-light">{$userStore.data.secondName}</div>
            </div>

            <div class="flex py-1">
              <div class="w-1/2">Adress:</div>
              <div class="w-1/2 font-light">{$userStore.data.address}</div>
            </div>

            <div class="flex py-1">
              <div class="w-1/2">Ort:</div>
              <div class="w-1/2 font-light">{$userStore.data.city}</div>
            </div>

            <div class="flex py-1">
              <div class="w-1/2">Postort:</div>
              <div class="w-1/2 font-light">{$userStore.data.zip}</div>
            </div>
          </div>
        {/if}
      {/if}
    </div> <!-- end of User details --></div>


{/if}

<style>
  .custom-wrapper {
    max-width: 1280px;
    margin: auto;
  }
</style>
