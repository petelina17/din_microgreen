<script>
  import Logo from './Logo.svelte'
</script>


<div class="w-full footer select-none">
  <div class="wrapper h-full flex flex-row relative">

    <div class="absolute left-0 px-1 bottom-0 pl-8 pb-8 text-gray-500 text-sm
               md:text-base">
      &copy Natalia Petelina. Utbildningsproject 2020-2021
    </div>


    <div class="w-2/3 text-left mt-6">
      <Logo class="logo"/>
    </div>

    <div class="w-1/3 text-left flex mt-6 select-none">
      <nav class="flex flex-col text-header5 md:text-header4  text-gray-200 uppercase opacity-100">
        <div class="menu-item"><a href="/#/live-cam">Live kamera</a></div>
        <div class="menu-item"><a href="/index.html#shop">Butik</a></div>
        <div class="menu-item"><a href="/#/recipes">Recept</a></div>
        <div class="menu-item"><a href="/#/articles">Artiklar</a></div>
        <div class="menu-item"><a href="/#/forum">Forum</a></div>
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
