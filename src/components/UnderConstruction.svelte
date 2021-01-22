<script>
  import {pop} from 'svelte-spa-router'
  import SimpleHeader from './SimpleHeader.svelte'
  // import {faSmileWink, faUser} from '@fortawesome/free-solid-svg-icons'
  import {faSmileWink} from '@fortawesome/free-regular-svg-icons'
  import {push} from 'svelte-spa-router'


  function closeHandler() {
    push('/')
  }

  function goBackHandler() {
    pop()
  }
</script>

<SimpleHeader title="Kommer snart!" icon={faSmileWink} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>

<!--<div class="my-10 text-header4">-->
<!--  Kommer snart!-->
<!--</div>-->


<!--<div class="mx-auto" style="max-width: 60rem;">-->
<!--  <div class="flex flex-row flex-wrap mt-32 mb-12 text-center bg-primary-300">-->
<!--    <div class="w-1/3 bg-center-->
<!--                sm:w-1/3 sm:bg-cover sm:bg-center"-->
<!--         style="background-image: url('/img/forum4.jpg')">-->
<!--      &nbsp-->
<!--    </div>-->
<!--    <div class="w-2/3 py-32 text-center text-header4 sm:text-xl sm:text-header3 text-white">Kommer snart!</div>-->
<!--  </div>-->

  <div class="py-8 text-center text-xl text-blue-500 underline
              sm:hover:underline  cursor-pointer "
       on:click={goBackHandler}>
    Tillbaka
  </div>

<!--</div>-->
