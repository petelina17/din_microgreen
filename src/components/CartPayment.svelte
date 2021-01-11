<script>
  import {createEventDispatcher} from 'svelte'

const dispatch = createEventDispatcher()

  function finishHandler() {
    dispatch('success')
  }

</script>


<h5>
  Cart Payment
</h5>
<div on:click={finishHandler}>Slutför köp</div>
