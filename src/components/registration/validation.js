// https://www.codespot.org/javascript-email-validation/
import {address, city, email, firstName, secondName, zip} from './RegistrationInfoForm.svelte'

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

export function isRegistrationInputError(values, errors) {
  let isError = false

  // verify email
  const isEmailValid = validateEmail(values.email)
  if (!isEmailValid) {
    errors.emailError = 'e-mail är inte korrekt'
    isError = true
  } else {
    errors.emailError = false
  }

  // verify first name
  if (values.firstName === '') {
    errors.firstNameError = 'vänligen skriv ditt namn'
    isError = true
  } else {
    errors.firstNameError = false
  }

  // verify second name
  if (values.secondName === '') {
    errors.secondNameError = 'vänligen skriv ditt efternamn'
    isError = true
  } else {
    errors.secondNameError = false
  }

  // verify address
  if (values.address === '') {
    errors.addressError = 'vänligen skriv ditt adress'
    isError = true
  } else {
    errors.addressError = false
  }

  // verify city
  if (values.city === '') {
    errors.cityError = 'vänligen ange ditt ort'
    isError = true
  } else {
    errors.cityError = false
  }

  // verify zip-code
  if (values.zip === '') {
    errors.zipError = 'vänligen ange ditt postort'
    isError = true
  } else {
    errors.zipError = false
  }

  return isError
}
