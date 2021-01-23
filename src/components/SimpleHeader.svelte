<script>
  import Icon from 'fa-svelte'
  import {createEventDispatcher} from 'svelte'

  export let title = 'no title'
  export let icon = null
  export let bgImage = 'fullmoon3-b.jpg'
  export let noClose = false

  let dispatch = createEventDispatcher()

  function closeHandler() {
    dispatch('close')
  }
</script>

<div class="h-24 text-offwhite font-medium bg-cover bg-center bg-opacity-25"
     style={"background-image: url('/img/" + bgImage + "')"}>
<!--<div class={"h-32 text-offwhite " + bgColor}>-->
  <div class="wrapper h-full flex items-center pl-8 ">

    {#if icon != null}
      <div class="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center
                text-lg text-gray-500 hover:bg-gray-50
                md:w-16 md:h-16 md:text-2xl ">
        <Icon icon={icon}/>
      </div>
    {/if}

    <div class="flex-grow text-header4 sm:text-header2">{title}</div>

    {#if noClose === false}
    <div class="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center
                text-2xl text-gray-500 hover:bg-gray-50
                md:w-16 md:h-16"
         on:click={closeHandler}>
      <svg class="h-6 w-6
                  md:w-10 md:h-10"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
      {/if}

  </div>
</div>
