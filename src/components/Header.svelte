<script>
  import {onMount} from 'svelte'
  import {API} from '../api.js'
  import Icon from 'fa-svelte'
  import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
  import {faFileAlt} from '@fortawesome/free-regular-svg-icons'
  import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
  import {push} from 'svelte-spa-router'

  let api = new API()

  let user = null

  onMount(async () => {
    user = await api.getUser('bob@gmail.com')
  })

</script>

<div class="bg-gray-600 bg-opacity-75 fixed w-full z-50 select-none">
  <div class="header flex items-center justify-end wrapper">
    <nav class="flex flex-wrap header4 text-gray-200 uppercase opacity-100">
      <div class="menu-item">Live kamera</div>
      <div class="menu-item">Butik</div>
      <div class="menu-item">Recept</div>
      <div class="menu-item">Artiklar</div>
      <div class="menu-item">Forum</div>
    </nav>
  </div>

  <div class="absolute social-icons text-center">
    <div class="mx-auto w-12 h-12 mb-3 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #88a8ee">
      <Icon icon={faFacebookF}/>
    </div>
    <div class="mx-auto w-12 h-12 mb-3 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #9ce4ef">
      <Icon icon={faTwitter}/>
    </div>
    <div class="mx-auto w-12 h-12 rounded-full text-white text-xl flex items-center justify-center"
         style="background-color: #efa09c">
      <Icon icon={faInstagram}/>
    </div>
  </div>
  <div class="absolute right-icons">
    <div class="w-12 h-12 mb-6 rounded-full bg-gray-200 text-gray-500 text-xl flex items-center
    justify-center">
      <Icon icon={faUser} />
    </div>
    <div class="w-12 h-12 mb-6 rounded-full bg-gray-200 text-gray-500 text-xl flex items-center
    justify-center">
      <Icon icon={faShoppingCart} />
    </div>
  </div>
</div>

<style>
  .header {
    min-height: 3.5rem;
      /*padding-top: 0.5rem;*/
      /*padding-bottom: 0.5rem;*/
  }

  nav > div {
    margin-left: 1em;
  }

  .social-icons {
    left: 2rem;
    top: 15rem;
  }
  .social-icons > div {
    transition: all 0.1s ease-out;
  }
  .social-icons > div:hover {
    transform: scale(1.1);
  }

  .right-icons {
    right: 2rem;
    top: 15rem;
  }

  .menu-item {
    cursor: pointer;
  }
  .menu-item:hover{
    transform: scale(1.03);
    color: white;
  }
</style>
