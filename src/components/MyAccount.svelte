<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {userStore} from '../store'
  import {faUser} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import Button from 'smelte/src/components/Button'
  import Login from './Login.svelte'


  $: showLoginForm = $userStore.data == null

  function closeHandler() {
    push('/')
  }
</script>

<Login bind:showDialog={showLoginForm} on:close={closeHandler}/>


{#if $userStore.data != null}

<SimpleHeader title="Mitt konto" icon={faUser} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>

<div class="flex flex-col bg-gray-200">

  <div class="bg-alert-50">
    <div class="">
      Orderhistorik
    </div>

    <div>1</div>
    <div>1</div>
    <div>1</div>

  </div>

  <div class="bg-blue-50">
    <div class="">
      Mina webbkameror
    </div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>

  <div class="bg-alert-500">
    <div class="">
      Mina favoriter
    </div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>

</div>

<div class="bg-alert-300">
  <div class="">
    Personal info
  </div>
  <div class="">
    <Button remove="text-sm uppercase"
            add="rounded-full w-full h-12 text-base mb-4
                  md:w-48 md:mr-8
                  lg:h-16 lg:w-64 lg:text-header4"
            on:click="">
      Spara ändringar
    </Button>
  </div>
</div>
  {/if}
