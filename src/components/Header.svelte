<script>
  import {onMount} from 'svelte'
  import {API} from '../api.js'

  let api = new API()

  let user = null

  onMount(async () => {
    user = await api.getUser('bob@gmail.com')
  })

</script>


<div class="h-24 bg-gray-200">
  {#if user != null}
    <div>User name: {user.firstName}, surname: {user.secondName}</div>
  {/if}
</div>
