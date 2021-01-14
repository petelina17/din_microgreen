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

<div class="banner select-none bg-offwhite">
  <!-- dynamic style to show left or right orientation of the block on homepage-->
  <div class="wrapper h-full flex items-center {orient === 'left' ? 'flex-row' : 'flex-row-reverse'}">

    <div class="w-2/3 text-left">
      <div class="header1 mb-6">
        {title}
      </div>

      <div class="text1">
        {text}
      </div>

      <div class="header4 mt-12">
        <!-- show button if only prop for button is defined-->
        {#if buttonPrimary != null}
          <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mr-8 mb-4"
          on:click={()=> {push(buttonPrimary.link)}}>
            {buttonPrimary.label}
          </Button>
        {/if}

        {#if buttonSecondary != null}
          <Button light color="colorC"
                  remove="text-sm text-white uppercase"
                  add="rounded-full w-64 h-16 header4 text-offblack mb-4"
                  on:click={()=> {push(buttonSecondary.link)}}>
            {buttonSecondary.label}
          </Button>
        {/if}

      </div>
    </div>

    <div class="w-1/3 text-center">
      <img class="m-auto" src="./img/{img}" alt="bild" height="292" width="320">
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
