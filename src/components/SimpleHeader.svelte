<script>
  import Icon from 'fa-svelte'
  import {createEventDispatcher} from 'svelte'

  export let title = 'no title'
  export let icon = null
  export let bgColor = 'bg-primary-600'
  export let noClose = false

  let dispatch = createEventDispatcher()

  function closeHandler() {
    dispatch('close')
  }
</script>

<div class={"h-32 text-offwhite " + bgColor}>
  <div class="wrapper h-full flex items-center pl-8 ">

    {#if icon != null}
      <div class="rounded-full w-16 h-16 bg-gray-200 flex items-center justify-center
                text-2xl text-gray-500 hover:bg-gray-50">
        <Icon icon={icon}/>
      </div>
    {/if}

    <div class="flex-grow text-header2">{title}</div>

    {#if noClose === false}
    <div class="rounded-full w-16 h-16 bg-gray-200 flex items-center justify-center
                text-2xl text-gray-500 hover:bg-gray-50"
         on:click={closeHandler}>
      <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
      {/if}

  </div>
</div>
