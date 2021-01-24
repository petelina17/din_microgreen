<script>
  // https://smeltejs.com/components/dialogs
  import {Dialog, Button, TextField} from 'smelte'
  import {API} from '../api.js'
  import {setUserLoggedIn, getHash} from '../authorization'
  import {link, push} from 'svelte-spa-router'
  import {userStore} from '../store'
  import {createEventDispatcher} from 'svelte'

  export let showDialog = false

  const dispatch = createEventDispatcher()

  let api = new API()
  let email = ''
  let password = ''
  let isEmailValid = true
  let firebaseUserData = {
    email: null
  }

  let loginError = ''

  async function loginHandler() {
    // check firebase
    firebaseUserData = await api.getUser(email)
    console.log('firebaseUserData from firebase', firebaseUserData)

    if (firebaseUserData.email == null) {
      loginError = 'Användare eller lösenord är fel, prova igen, tack.'
      return
    }

    // check password
    if (firebaseUserData.hash !== getHash(password)) {
      loginError = 'Användare eller lösenord är fel, prova igen, tack.'
      return
    }

    // update store
    setUserLoggedIn(email, firebaseUserData)

    showDialog = false
  }

  function registrationHandler () {
    if ($userStore.buyProcess === 'cart') {
      $userStore.buyProcess = 'registration'
      showDialog = false
      return
    }
    push('/registration')
  }

  function closeHandler() {
    showDialog = false
    dispatch('close')
  }

  // https://www.codespot.org/javascript-email-validation/
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
  }
</script>


<Dialog bind:value={showDialog}>
  <h5 slot="title" class="relative pt-2">

    <div class="absolute right-0 top-0 w-8 h-8 flex items-center justify-center text-gray-500"
         on:click={closeHandler}>
      <svg class="h-6 w-6 cursor-pointer"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>

    Logga in

  </h5>

  <div class="text-red-500">{loginError}</div>

  <div class="text-center px-12" style="width: 22rem;">
    <TextField bind:value={email}
               label="e-mail"
               outlined
               type="email"
               error={isEmailValid? false : 'Please check e-mail input'}/>

    <TextField bind:value={password} label="lösenord" outlined type="password"/>

    <Button add="rounded-full w-full h-12 mb-4"
        on:click={loginHandler}>
      Logga in
    </Button>

    eller

    <div class="text-blue-500 underline cursor-pointer">
      <div on:click={registrationHandler}>Bli medlem</div>
    </div>
  </div>

  <!--
  <div slot="actions" class="text-center w-full">
      <Button text on:click={loginHandler}>Logga in</Button>
      <Button text on:click={closeHandler}>Stäng</Button>
  </div>
  -->
</Dialog>
