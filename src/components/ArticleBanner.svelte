<script>
import Button from 'smelte/src/components/Button'
</script>

<div class="banner select-none">
  <div class="wrapper h-full flex items-center">
    <div class="w-2/3 text-left">
      <div class="header1 mb-6">
        Lorem ipsum
      </div>

      <div class="text1">
        Donec volutpat enim nibh, sit amet eleifend velit congue ac. Suspendisse maximus
        felis sed nulla cursus facilisis. Vivamus sollicitudin augue vel nisi rutrum,
        non varius ipsum molestie. Proin auctor est sit amet justo laoreet,
        ultricies faucibus libero tincidunt. Praesent elementum tellus sit amet ligula
        fermentum, eu tempus purus commodo. Nunc nibh sapien.
      </div>

      <div class="header4 mt-12">
        <Button remove="text-sm uppercase" add="rounded-full w-64 h-16 header4 mr-8 mb-4">
          Läs mer
        </Button>
        <Button light color="colorC"
                remove="text-sm text-white uppercase"
                add="rounded-full w-64 h-16 header4 text-offblack mb-4">
          Till artiklar
        </Button>
      </div>
    </div>

    <div class="w-1/3 text-center">
     <img class="m-auto" src="./img/mikrogrin-redis-rozovyj.jpg" alt="rädisa mikrogrönt bild" height="292" width="320">
    </div>

  </div>
</div>

<style>
    .banner {
        height: 43.75rem;
        /*background-color: #f2f2f2;*/
        border-bottom: 1px solid #a0aec0;
    }
</style>
