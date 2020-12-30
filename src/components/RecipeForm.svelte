<script>
  // Get route vars in address line into params
  export let params = {}

  // Dynamically calculate var id, set "new" if id undefined
  $: id = params.id != null ? params.id : 'new'
</script>

<div>ny recept</div>
<div>id: {id}</div>
