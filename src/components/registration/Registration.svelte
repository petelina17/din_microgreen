<script>
  import Icon from 'fa-svelte'
  import {faUser} from '@fortawesome/free-solid-svg-icons'
  import {push,location} from 'svelte-spa-router'
  import {createEventDispatcher} from 'svelte'
  import SimpleHeader from './../SimpleHeader.svelte'
  import Button from 'smelte/src/components/Button'
  import {TextField, Snackbar, Dialog, ProgressCircular} from 'smelte'
  import {setUserLoggedIn, getHash, createNewUser} from '../../authorization'
  import {userStore} from '../../store'
  import RegistrationInfoForm from './RegistrationInfoForm.svelte'
  import {isRegistrationInputError} from './validation'

  $:inSlider = $userStore.buyProcess === 'registration'

  const dispatch = createEventDispatcher()

  let values = {
    email: '',
    firstName: '',
    secondName: '',
    address: '',
    city: '',
    zip: ''
  }
  let password = ''
  let password2 = ''

  let passwordError = false
  let passwordError2 = false

  let registrationErrors = {
    emailError: false,
    firstNameError: false,
    secondNameError: false,
    addressError: false,
    cityError: false,
    zipError: false
  }

  let registrationInfoError = false

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

  function isUserInputError() {
    let isError = false

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

    // verify password and password2 are the same
    if (password !== password2) {
      passwordError2 = 'lösenord är inte samma'
      isError = true
    } else {
      passwordError2 = false
    }

    if (isRegistrationInputError(values, registrationErrors) === true) {
      isError = true
    }

    return isError
  }

  async function finishHandler() {

    // if any field is incorrect than stop and return
    if (isUserInputError() === true) {
      registrationErrors = {...registrationErrors}
      return
    }

    // put data in firebase
    const firebaseUserData = {
      email: values.email,
      firstName: values.firstName,
      secondName: values.secondName,
      address: values.address,
      city: values.city,
      zip: values.zip,
      hash: getHash(password),
      orders: []
    }

    // send to firebase ...
    const error = await createNewUser(firebaseUserData)
    if (error) {
      serverError = error
      return
    }
    serverError = ''

    // setUserLoggedIn (create cookie, put data in state)
    setUserLoggedIn(values.email, firebaseUserData)

    console.log('userStore', $userStore)

    // component Registration decides here the format of showing
    // registration form, based on path:
    if (inSlider) {
      dispatch('success')
    } else {
      // dialog.show = true
      push('/')
    }
  }

  function closeHandler() {
    // if ($userStore.buyProcess === 'cart') {
    //   $userStore.buyProcess = 'payment'
    // }
    //
    // dialog.show = false
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

<SimpleHeader title="Registrera dig" icon={faUser} bgColor={"bg-primary-500"} noClose={inSlider}
              on:close={closeHandler}/>

<div class="">
  <div class="wrapper">

    <div class="mx-auto w-84 pt-16 pb-8">
      <RegistrationInfoForm bind:values={values} bind:errors={registrationErrors} />

      <TextField outlined label="Lösenord" type="password" bind:value={password}
      error={passwordError}/>

      <TextField outlined label="Bekräfta lösenord" type="password" bind:value={password2}
      error={passwordError2}/>

    </div>

    <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 text-header4 mb-12"
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
