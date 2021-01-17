<script>
  import Button from 'smelte/src/components/Button'
  import {push} from 'svelte-spa-router'

  export let img = ''
  export let title = 'default text'
  export let button = 'button'
  export let link = ''

  function linkHandler() {
    push(link)
  }
</script>

<!-- make style dynamic for background image from props -->
<div class="banner h-120 lg:h-140 select-none text-center bg-cover bg-center"
     style={"background-image: url('img/" + img + "')"}>

  <div class="h-full wrapper flex flex-col

              lg:wrapper lg:h-full lg:flex lg:flex-col">
    <div class="text-header3 text-offwhite flex-grow flex items-center
                sm:text-header1">
      <div class="w-full">
        {title}
      </div>
    </div>
    <div class="h-32 text-header4">
      <Button remove="text-sm uppercase"
              add="rounded-full w-48 h-12 text-base mb-4
              md:mr-8
              lg:h-16 lg:w-64 lg:text-header4"
              on:click={linkHandler}>
        {button}
      </Button>
    </div>
  </div>


</div>

<style>
  .banner {
    /*min-height: 43.75rem;*/
    background-color: #4d823c;
    /*background-attachment: fixed;*/
    /*background-repeat: no-repeat;*/
    /*border-bottom: 1px solid #a0aec0;*/
  }
</style>
