<script>
  import Icon from 'fa-svelte'
  import {faUser} from '@fortawesome/free-solid-svg-icons'
  import {push} from 'svelte-spa-router'
  import {createEventDispatcher} from 'svelte'
  import SimpleHeader from './SimpleHeader.svelte'
  import Button from 'smelte/src/components/Button'
  import {TextField, Snackbar, Dialog, ProgressCircular} from 'smelte'
  import {setUserLoggedIn, getHash, saveUser} from '../authorization'
  import {userStore} from '../store'

  let email = ''
  let firstName = ''
  let secondName = ''
  let address = ''
  let city = ''
  let zip = ''
  let password = ''
  let password2 = ''

  let passwordError = false
  let passwordError2 = false
  let emailError = false
  let firstNameError =false
  let secondNameError = false
  let addressError = false
  let cityError = false
  let zipError = false

  let serverError = ''

  let snackbar = {
    show: false,
    text: 'some text',
    color: 'alert'
  }

  let dialog = {
    show: false
  }

  // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
  async function sleep (timeout) {
    await new Promise(r => setTimeout(r, 2000));
  }

  // https://www.codespot.org/javascript-email-validation/
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email.toLowerCase())
  }

  function isUserInputError() {
    let isError = false

    // verify email
    const isEmailValid = validateEmail(email)
    if (!isEmailValid) {
      emailError = 'e-mail är inte korrekt'
      isError = true
    } else {
      emailError = false
    }

    // verify password and password2 are the same
    if (password!== password2) {
      passwordError2 = 'lösenord är inte samma'
      isError = true
    } else {
      passwordError2 = false
    }

    // verify password field is not empty
    if (password === '') {
      passwordError = 'vänligen skriv ditt lösenord'
      isError = true
    } else {
      passwordError = false
    }

    // verify password2 field is not empty
    if (password2 === '') {
      passwordError2 = 'vänligen skriv ditt lösenord'
      isError = true
    } else {
      passwordError2 = false
    }

    // verify first name
    if (firstName === '') {
      firstNameError = 'vänligen skriv ditt namn'
      isError = true
    } else {
      firstNameError = false
    }

    // verify second name
    if (secondName === '') {
      secondNameError = 'vänligen skriv ditt efternamn'
      isError = true
    } else {
      secondNameError = false
    }

    // verify address
    if (address === '') {
      addressError = 'vänligen skriv ditt adress'
      isError = true
    } else {
      addressError = false
    }

    // verify city
    if (city === '') {
      cityError = 'vänligen ange ditt ort'
      isError = true
    } else {
      cityError = false
    }

    // verify zip-code
    if (zip === '') {
      zipError = 'vänligen ange ditt postort'
      isError = true
    } else {
      zipError = false
    }

    return isError
  }

  async function finishHandler() {
    // if any field is incorrect than stop and return
    if (isUserInputError() === true) {
      return
    }

    // put data in firebase
    const firebaseUserData = {
      email: email,
      firstName: firstName,
      secondName: secondName,
      address: address,
      city: city,
      zip: zip,
      hash: getHash(password)
    }

    // send to firebase ...
    const error = await saveUser(firebaseUserData)
    if (error) {
      serverError = error
      return
    }
    serverError = ''

    // setUserLoggedIn (create cookie, put data in state)
    setUserLoggedIn(email, firebaseUserData)

    console.log('userStore', $userStore)
    dialog.show = true
  }

  function closeHandler() {
    push('/')
  }

</script>

<Dialog bind:value={dialog.show}>
  <h5 slot="title">Tack!</h5>
  <div class="text-gray-700">Din registrering lyckades</div>

  <div slot="actions">
    <Button text on:click={closeHandler}>Fortsätt</Button>
  </div>
</Dialog>
<!--
<Snackbar noAction color={snackbar.color} timeout={2000} right top
          bind:value={snackbar.show}>
  <div>{snackbar.text}</div>
  <div slot="action" />
</Snackbar>
-->

<SimpleHeader title="Registrera dig" icon={faUser} bgColor={"bg-primary-500"}
              on:close={closeHandler}/>

<div class="">
  <div class="wrapper">

    <div class="mx-auto w-84 pt-16 pb-8">
      <TextField outlined label="E-mail" bind:value={email}
      error={emailError}/>

      <TextField outlined label="Namn" bind:value={firstName}
      error={firstNameError}/>

      <TextField outlined label="Efternmn" bind:value={secondName}
      error={secondNameError}/>

      <TextField outlined label="Adress" bind:value={address}
      error={addressError}/>

      <TextField outlined label="Ort" bind:value={city}
      error={cityError}/>

      <TextField outlined label="Postort" bind:value={zip}
      error={zipError}/>

      <TextField outlined label="Lösenord" bind:value={password}
      error={passwordError}/>

      <TextField outlined label="Bekräfta lösenord" bind:value={password2}
      error={passwordError2}/>

    </div>

    <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mb-12"
            on:click={finishHandler}>
      Bekräfta
    </Button>

    <div class="text-red-600 text-lg w-full text-center pt-5">{serverError}</div>

  </div>
</div>

<style>
  .icon {

  }

  .icon:hover {
    color: black;
  }
</style>
