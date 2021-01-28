<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {push} from 'svelte-spa-router'
  import {faUtensils } from '@fortawesome/free-solid-svg-icons'
  import {faNewspaper} from '@fortawesome/free-regular-svg-icons'
  import Button from 'smelte/src/components/Button'
  import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
  import Icon from 'fa-svelte'
  import {API} from '../api'
  import {onMount} from 'svelte'

  const api = new API()

  let articles = []

  // check if product already exists in favorite list in global state
  // $: isFavorite = $userStore.favoriteList.findIndex(x => x === productId) > -1

  onMount(async () => {
    articles = await api.getArticles()

    articles.forEach((r, i) => {
      articles[i].show = false
    })
  })

  function closeHandler() {
    push('/')
  }
</script>

<SimpleHeader title="Artiklar" icon={faNewspaper} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>



<div class="wrapper flex flex-wrap px-8 py-12 flex flex-col items-start">

  {#if articles != null}
    {#each articles as item}

      <div class="w-full bg-white mb-5 shadow-lg">

        <div class="w-full flex flex-wrap">
          <div class="w-full
                      md:w-1/3">
            <div class="h-full bg-center bg-cover"
                 style={"background-image: url(" + item.img + "); min-height:16rem"}>
              &nbsp;
            </div>

          </div>

          <div class="w-full pl-6 pr-3 py-3 text-left
                      md:w-2/3">
            <div class="text-header3 leading-tight pt-2 pb-1 md:text-header3">{item.title}</div>

            <div class="text-lg pb-1 md:text-header4">{item.description}</div>

            <div class="text-base text-gray-500 leading-3 font-light">
              <div>Publicerad:&nbsp;{item.date.slice(0, 10)}</div>

              <div>Författare:&nbsp;{item.authorName}, Foto:{item.authorPhoto}</div>

              {#if item.source != null}
                <div>Källa: <a href="{item.source}">{item.source.slice(0,12) + ' ...'}</a></div>
              {/if}
            </div>

            <div class="flex flex-wrap mt-2 items-center pb-5">
              <div class="h-10 w-48 bg-primary-500 py-1 text-center rounded-full text-white
                          text-lg font-medium cursor-pointer mr-3"
                   on:click={() => item.show = !item.show}>
                {item.show ? 'Visa mindre' : 'Läsa mer'}
              </div>

              {#each item.tags as tag, i}
                <div class="text-primary-400 text-xl pr-2 py-2">#{tag}{i < item.tags.length-1 ? ', ': ''}</div>
              {/each}

              <!--
              <div class="cursor-pointer text-lg -mt-1" on:click="">
                <Icon icon={faHeart} class=""/>
              </div>
              -->
            </div>

          </div>
        </div>

        {#if item.show}
          <div class="mt-3 pt-5 pb-10 px-6
                      md:px-12">

            <div class="text-left text-lg">{@html item.text}</div>


          </div>
        {/if}

      </div>
    {/each}
  {/if}

</div>


