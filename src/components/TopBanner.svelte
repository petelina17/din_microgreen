<script>
  import Logo from './Logo.svelte'

</script>

<div class="banner">
  <div class="wrapper pt-20 text-offwhite">
    <Logo/>
    <div class="text-header3 mt-10 sm:text-header1 sm:mt-20">#Superfood på endast 6-10 dagar</div>

    <div class="px-4 text-lg mt-4 sm:mt-3 sm:text-header3 mb:mt-8">Odla själv hemma VS beställ hos oss och se det växa LIVE</div>

    <div class="flex flex-wrap mt-8 sm:justify-between pb-5 lg:px-16">
      <div class="w-full sm:w-auto mb-4">
        <div class="text-header3 md:text-header2 lg:text-titleA leading-none">20+</div>
        <div class="text-base sm:text-header4">typer av mikrogrönt</div>
      </div>
      <div class="w-full sm:w-auto mb-4">
        <div class="text-header3 md:text-header2 lg:text-titleA leading-none">4</div>
        <div class="text-base sm:text-header4">webbkameror</div>
      </div>
      <div class="w-full sm:w-auto mb-4">
        <div class="text-header3 md:text-header2 lg:text-titleA leading-none">76</div>
        <div class="text-base sm:text-header4">enkla recept</div>
      </div>
    </div>
  </div>
</div>

<style>
  .banner {
    min-height: 600px;
    background-color: #728e30;
  }
</style>
