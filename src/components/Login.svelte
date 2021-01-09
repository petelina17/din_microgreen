<script>
  // https://smeltejs.com/components/dialogs
  import {Dialog, Button, TextField} from 'smelte'
  import {API} from '../api.js'
  import {setUserLoggedIn, getHash} from '../authorization'
  import {link, push} from 'svelte-spa-router'

  export let showDialog = false

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
    push('/registration')
  }

  // https://www.codespot.org/javascript-email-validation/
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
  }
</script>


<Dialog bind:value={showDialog}>
  <h5 slot="title">Login form</h5>

  <div class="text-red-500">{loginError}</div>

  <div class="text-center px-12" style="width: 22rem;">
    <TextField bind:value={email}
               label="e-mail"
               outlined
               type="email"
               error={isEmailValid? false : 'Please check e-mail input'}/>

    <TextField bind:value={password} label="password" outlined type="password"/>

    eller

    <div class="text-blue-500 underline cursor-pointer">
      <div on:click={registrationHandler}>Registrera dig</div>
    </div>
  </div>

  <div slot="actions" class="text-center w-full">
      <Button text on:click={loginHandler}>Logga in</Button>
      <Button text on:click={() => showDialog = false}>Stäng</Button>
  </div>
</Dialog>
