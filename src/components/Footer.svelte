<script>
  import Logo from './Logo.svelte'
</script>


<div class="w-full footer select-none">
  <div class="wrapper h-full flex flex-row relative">

    <div class="absolute left-0 bottom-0 pb-8 text-gray-500">&copy Natalia Petelina. Utbildningsproject 2020-2021</div>


    <div class="w-2/3 text-left mt-6">
      <Logo class="logo"/>
    </div>

    <div class="w-1/3 text-left flex mt-6">
      <nav class="flex flex-col header4 text-gray-200 uppercase opacity-100">
        <div class="menu-item">Live kamera</div>
        <div class="menu-item">Butik</div>
        <div class="menu-item">Recept</div>
        <div class="menu-item">Artiklar</div>
        <div class="menu-item">Forum</div>
      </nav>
    </div>
  </div>
</div>

<style>
  .footer {
    background-color: #393939;
    height: 17.5rem;
  }
  .menu-item {
    cursor: pointer;
  }

  .menu-item:hover {
    transform: scale(1.03);
    color: white;
  }

</style>
