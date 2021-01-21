<script>
  import SimpleHeader from './SimpleHeader.svelte'
  import {faUser, faPencilAlt, faVideo} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'


  // https://stackoverflow.com/questions/1050720/adding-hours-to-javascript-date-object
  let today = new Date()
  today.setSeconds(0)

  function closeHandler() {
    push('/')
  }


</script>


<SimpleHeader title="Webbkamera Din-Microgreen" icon={faVideo} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>


<div class="bg-alert-300 py-8 h-auto text-center mi-align-vertical-center">
  När du slutför köpet hos oss blev webbkameror i ditt konto aktiverade&nbsp;
  och du få möjligheten bevaka inom 7 dagar hur din #superfood växer!
</div>

<div class="bg-cover bg-center mx-auto bg-gray-700">
  <img src="./img/webkam3.jpg" alt="bild">

  <div class="p-1 text-alert-900 font-mono italic font-bold">
    {today.toLocaleString()}
  </div>

</div>


<div class="mt-8 text-blue-600 text-center text-header4 underline cursor-pointer"
     on:click={closeHandler}> Till butik
</div>




