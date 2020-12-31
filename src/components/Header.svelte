<script>
  import {onMount} from 'svelte'
  import {API} from '../api.js'

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
    <div class="w-12 h-12 mb-3 rounded-full bg-gray-200">fb</div>
    <div class="w-12 h-12 mb-3 rounded-full bg-gray-200">twitter</div>
    <div class="w-12 h-12 rounded-full bg-gray-200">insta</div>
  </div>
  <div class="absolute right-icons">
    <div class="w-12 h-12 mb-3 rounded-full bg-gray-200">konto</div>
    <div class="w-12 h-12 mb-3 rounded-full bg-gray-200">basket</div>
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
