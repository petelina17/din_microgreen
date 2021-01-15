<script>
  import Button from 'smelte/src/components/Button'
  import {push} from 'svelte-spa-router'

  export let img = 'img'
  export let title = 'title'
  export let text = 'text'
  export let buttonPrimary = null
  export let buttonSecondary = null
  export let orient = 'left'

</script>

<div class=" select-none bg-white">
  <!-- dynamic style to show left or right orientation of the block on homepage-->
  <div class="wrapper banner flex flex-wrap items-center">

    <div class="w-full sm:w-1/3 text-center">
      <img class="m-auto" src="./img/{img}" alt="bild" width="80%">
    </div>

    <div class="w-full sm:w-2/3 text-left">
      <div class="text-header3 mb-2 mt-3 mb-6
                 lg:text-header1">
        {title}
      </div>

      <div class="text-lg lg:text-text1">
        {text}
      </div>

      <div class="text-header4 w-full mt-12">
        <!-- show button if only prop for button is defined-->
        {#if buttonPrimary != null}
          <Button remove="text-sm uppercase"
                  add="rounded-full w-full h-10 text-base mb-4
                  md:w-48 md:mr-8
                  lg:h-16 lg:w-64 lg:text-header4"
          on:click={()=> {push(buttonPrimary.link)}}>
            {buttonPrimary.label}
          </Button>
        {/if}

        {#if buttonSecondary != null}
          <Button light color="colorC"
                  remove="text-sm text-white uppercase"
                  add="rounded-full w-full h-10 text-base
                  md:w-48
                  lg:h-16 lg:w-64 lg:text-header4
                  text-offblack mb-4"
                  on:click={()=> {push(buttonSecondary.link)}}>
            {buttonSecondary.label}
          </Button>
        {/if}

      </div>
    </div>

  </div>
</div>

<style>
  .banner {
    min-height: 43.75rem;
    /*background-color: #f2f2f2;*/
    /*border-bottom: 1px solid #a0aec0;*/
  }
</style>
