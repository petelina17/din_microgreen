<script>
  import {fade, slide} from 'svelte/transition'

  let show = true
</script>

{#if show}
  <div class="fixed bottom-0 w-full bg-gray-700" out:slide="{{delay: 250, duration: 300}}">
    <div class="wrapper h-48">
      COOKIE


      <div class="bg-alert-300" on:click={() =>{show=false}}>123</div>
    </div>


  </div>
{/if}
