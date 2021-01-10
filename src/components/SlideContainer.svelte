<script>
  import {slide,blur,fly} from 'svelte/transition'
  import {quintInOut} from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import Button from 'smelte/src/components/Button'

  const width = 1280

  const dispatch = createEventDispatcher();

  function close() {
    console.log('slide close')
    dispatch('close')
  }
</script>

<!--
  This HTML code is customized component example from tailwind.css library
  https://tailwindui.com/components/application-ui/overlays/slide-overs
 -->
<div class="fixed inset-0 overflow-auto z-30">
  <div class="absolute inset-0 overflow-auto">
    <div in:blur="{{ duration: 100 }}" out:blur="{{ duration: 1000 }}"
         class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
         aria-hidden="true">
    </div>

    <section
        transition:fly="{{ duration: 1000, x: width, easing: quintInOut }}"
        class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading">

      <div class="relative w-screen my-slide" >

        <!--
          icon CLOSE=====================================
        -->
        <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
          <button class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  on:click={close}>
            <span class="sr-only">Close panel</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="h-full flex flex-col bg-white shadow-xl overflow-y-auto">

          <!--
            Svelte will replace tag "slot" with SlideContainer's tag body, which is defined in parent component
            https://svelte.dev/docs#slot
          -->
          <slot></slot>

        </div>

      </div>
    </section>
  </div>
</div>

<style>
  .my-slide {
    max-width: 1280px;
  }
</style>
