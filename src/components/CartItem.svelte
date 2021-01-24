<script>
  import {userStore} from '../store'
  import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'
  import Icon from 'fa-svelte'

  export let title = 'no passaran'
  export let subtitle = 'subheader'
  export let qty = 12
  export let unitPrice = 22.05
  export let productId = '1'
  export let img = 'camera2.jpg'

  // dynamic var
  $: totalPrice = qty * unitPrice

  function deleteHandler() {
    $userStore.cartList = $userStore.cartList.filter(item => item.productData.productId !== productId)
  }

</script>

<div class="flex flex-wrap py-6 border-b body-1 border-gray-400">
  <div class="w-1/3 md:w-24 text-center pl-3">
    <div class="w-16 h-16 rounded-full bg-gray-200 bg-cover img-placeholder"
         style={"background-image: url('img/" + img + "');"}>&nbsp
    </div>
  </div>

  <div class="text-left px-3 w-2/3 md:w-2/5">
    <div class="text-lg md:text-header4">{title}</div>
    <div class="text-lg md:text1">{subtitle}</div>
  </div>

  <div class="px-3 w-1/3 pt-4 md:w-1/6 md:pt-0">
    <div class="text-header4">{unitPrice.toFixed(2).replace('.', ',')} <span class="text-base">kr</span></div>
    <div class="text-header4">{qty} <span class="text-base">st.</span></div>
  </div>

  <div class="px-3 w-1/3 pt-4 md:w-1/6 md:pt-0">
    <div class="text-header4">{totalPrice.toFixed(2).replace('.', ',')} <span class="text-base">kr</span></div>
  </div>

  <div>
    <div class="cursor-pointer w-10 h-10 rounded-full hover:bg-gray-200
                flex items-center pt-6 justify-end
                md:pt-0 md:justify-center"
         on:click={deleteHandler}>
      <Icon icon={faTrashAlt}/>
    </div>
  </div>


</div>

<style>
  .img-placeholder {
    background-position-x: center;
    background-size: 115%;
    /*background-position-y: 2rem;*/
  }
</style>
