<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {saveFavorites, userStore} from '../store'
  import {faUtensils } from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import {faHeart} from '@fortawesome/free-regular-svg-icons'
  import Button from 'smelte/src/components/Button'
  import {API} from '../api'
  import {onMount} from 'svelte'
  import {slide} from 'svelte/transition'
  import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
  import Icon from 'fa-svelte'


  const api = new API()

  let recipes = []

  // check if product already exists in favorite list in global state
  // $: isFavorite = $userStore.favoriteList.findIndex(x => x === productId) > -1

  onMount(() => {
    recipes = api.getRecipes()
  })

  function closeHandler() {
    push('/')
  }

  // saveFavorites()

</script>

<SimpleHeader title="Receptbok" icon={faUtensils} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>

<div class="wrapper flex flex-wrap px-8 py-12 flex flex-col items-start bg-gray-200">

  {#if recipes != null}
    {#each recipes as item}


<div class="flex flex-row">
      <div class="py-8 w-1/3">
        <img src={item.img} alt="image">
        <span>Foto:{item.authorPhoto}</span>
      </div>

      <div class="w-2/3">

      <div class=" text-header3">{item.title}</div>

      <div class="py-1">publicerad:&nbsp;{item.date}</div>

      <div class="py-1">författare:&nbsp;{item.authorName}</div>

      <div class="py-1 italic">{item.author}</div>

      <div class="text-header4 py-2 italic">{item.description}</div>

      <div class="text-left">{@html item.text}</div>

      <div class="flex flex-row m-auto">
        <div class="bg-gray-500 my-2">read more</div>
        <div class="bg-gray-500 my-2 px-4 mx-8 cursor-pointer" on:click=''>
          <Icon icon={faHeart} class=""/>
        </div>
        <div class="bg-gray-500 my-2">add new</div>
      </div>

      </div>
</div>
    {/each}
  {/if}

</div>
