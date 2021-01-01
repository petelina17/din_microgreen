<script>
  import {onMount} from 'svelte'
  import {API} from '../api.js'
  import Icon from 'fa-svelte'
  import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
  import {faFileAlt} from '@fortawesome/free-regular-svg-icons'
  import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

  let api = new API()

  let user = null

  onMount(async () => {
    user = await api.getUser('bob@gmail.com')
  })

</script>

<div class="bg-gray-600 bg-opacity-75 fixed w-full">
  <div class="header flex items-center justify-end wrapper">
    <nav class="flex header4 text-white uppercase opacity-100">
      <div>Live kamera</div>
      <div>Butik</div>
      <div>Recept</div>
      <div>Artiklar</div>
      <div>Forum</div>
    </nav>
  </div>
  <div class="absolute social-icons">
    <div class="w-12 h-12 mb-3 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #88a8ee">
      <Icon icon={faFacebookF} />
    </div>
    <div class="w-12 h-12 mb-3 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #9ce4ef">
      <Icon icon={faTwitter}/>
    </div>
    <div class="w-12 h-12 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #efa09c">
      <Icon icon={faInstagram}/>
    </div>
  </div>
  <div class="absolute right-icons">
    <div class="w-12 h-12 mb-3 rounded-full bg-gray-200 text-gray-500 text-xl flex items-center
    justify-center">
      <Icon icon={faUser} />
    </div>
    <div class="w-12 h-12 mb-3 rounded-full bg-gray-200 text-gray-500 text-xl flex items-center
    justify-center">
      <Icon icon={faShoppingCart} />
    </div>
  </div>
</div>

<style>
  .header {
    height: 3.5rem;
  }

  nav > div {
    margin-left: 1em;
  }

  .social-icons {
    left: 2rem;
    top: 15rem;
  }

  .right-icons {
    right: 2rem;
    top: 15rem;
  }
</style>
