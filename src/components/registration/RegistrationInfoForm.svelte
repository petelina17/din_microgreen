<script>
  import {TextField} from 'smelte'

  export let values = {
    email: '',
    firstName: '',
    secondName: '',
    address: '',
    city: '',
    zip: ''
  }

  export let errors = {
    emailError: false,
    firstNameError: false,
    secondNameError: false,
    addressError: false,
    cityError: false,
    zipError: false
  }

</script>

<TextField outlined label="E-mail" bind:value={values.email}
           bind:error={errors.emailError}/>

<TextField outlined label="Namn" bind:value={values.firstName}
           bind:error={errors.firstNameError}/>

<TextField outlined label="Efternmn" bind:value={values.secondName}
           bind:error={errors.secondNameError}/>

<TextField outlined label="Adress" bind:value={values.address}
           bind:error={errors.addressError}/>

<TextField outlined label="Ort" bind:value={values.city}
           bind:error={errors.cityError}/>

<TextField outlined label="Postort" bind:value={values.zip}
           type="number" max="99999" min="0"
           bind:error={errors.zipError}/>
