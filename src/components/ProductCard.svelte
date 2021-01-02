<script>
  import Button from 'smelte/src/components/Button'
  import Icon from 'fa-svelte'
  import {faHeart} from '@fortawesome/free-regular-svg-icons'
  import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

  export let img = ''
  export let title = 'produkt A'
  export let subtitle = 'förpakning'
  export let price = '99.00 kr'
  export let button = 'Lägg till'
  export let productId = ''

</script>

<div class="product-box text-center">
  <div class="m-auto rounded-full h-64 w-64 bg-cover img-placeholder"
       style={"background-image: url('img/" + img + "');"}>
    &nbsp
  </div>

  <div>{title}</div>

  <div>{subtitle}</div>

  <div>{price}</div>


    <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mr-8 mb-4">
      {button}
    </Button>


  <div class="flex justify-center">
    <div class="w-16 h-16 mb-6 rounded-full bg-gray-200 text-2xl flex items-center
    justify-center text-gray-400 mx-2">
      <Icon icon={faHeart} />
    </div>
    <div class="w-16 h-16 mb-6 rounded-full bg-gray-200 text-2xl flex items-center
    justify-center text-blue-500 mx-2">
      <Icon icon={faInfoCircle} />
    </div>
  </div>

</div>

<style>
.product-box {
    height: 603px;
    width: 300px;
    /*background: lightblue;*/
}
.img-placeholder {
    background-position-x: center;
    background-size: 115%;
    /*background-position-y: 2rem;*/
}

</style>
