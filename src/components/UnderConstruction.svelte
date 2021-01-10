<script>
  import {pop} from 'svelte-spa-router'

  function goBackHandler() {
    pop()
  }
</script>

<div class="mx-auto" style="max-width: 60rem;">
  <div class="flex flex-row flex-wrap mt-32 mb-12 text-center bg-primary-300">
    <div class="w-1/3 bg-cover bg-center"
         style="background-image: url('/img/forum4.jpg')">
      &nbsp
    </div>
    <div class="w-2/3 py-32 text-center header3 text-white">Kommer snart!</div>
  </div>

  <div class="text-center hover:underline text-blue-500 cursor-pointer text-xl"
       on:click={goBackHandler}>
    Gå tillbaka
  </div>
</div>
