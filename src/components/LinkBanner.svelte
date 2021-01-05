<script>
  import Button from 'smelte/src/components/Button'
  import {link, push} from 'svelte-spa-router'
  export let img = ''
  export let title = 'default text'
  export let button = 'button'

  function linkHandler() {
    push(link)
  }
</script>

<!-- make style dynamic for background image from props -->
<div class="banner select-none text-center bg-cover bg-center"
     style={"background-image: url('img/" + img + "')"}>

  <div class="wrapper h-full flex flex-col">
    <div class="header1 text-offwhite flex-grow flex items-center">
      <div class="w-full">
        {title}
      </div>
    </div>
    <div class="header4 pb-8">
      <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mr-8 mb-4"
      on:click={linkHandler}>
        {button}
      </Button>
    </div>
  </div>


</div>

<style>
    .banner {
        height: 43.75rem;
        background-color: #4d823c;
      /*background-attachment: fixed;*/
      /*background-repeat: no-repeat;*/
        /*border-bottom: 1px solid #a0aec0;*/
    }
</style>
