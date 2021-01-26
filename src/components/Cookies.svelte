<script>
  import {fade, slide} from 'svelte/transition'
  import Logo from './Logo.svelte'
  import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'
  import {onMount} from 'svelte'
  import {cookiesAccepted} from '../store'

  let show = false

  onMount(()=>{
    const essential = getCookie('essential')
    if (essential == null) {
      show = true
    }
  })

  function closeHandler() {
    show = false
  }

  function allCookiesHandler() {
    $cookiesAccepted = true
    essentialCookiesHandler()
  }

  function essentialCookiesHandler() {
    const now = new Date()
    now.setDate(now.getDate() + 30)
    setCookie('essential', 'true', {path: '/', expires: now.toGMTString(), secure: true})
    closeHandler()
  }

</script>

{#if show}
  <div class="fixed bottom-0 w-full bg-gray-700 z-50"
       out:slide="{{delay: 250, duration: 300}}">
    <div class="h-108 wrapper text-offwhite
                md:h-56">
      <div class="text-xl pt-4 pb-3">Cookie-inställningar</div>
      <div class="text-left">
        Vi använder cookies för att ge dig den bästa upplevelsen på vår webbplats.
        Några cookie är nödvändiga för att websidan ska kunna fungera. Andra bidrar
        till att du ska få en skräddarsydd upplevelse. Om du trycker på "Acceptera alla cookies"
        samtycker du till användandet av cookies.
      </div>

      <div class="my-5">
      <div class="bg-gray-500 py-3 px-6 font-medium inline-block mb-3 md:mr-3"
           on:click={essentialCookiesHandler}>
        ACCEPTERA NÖDVÄNDIGA COOKIES
      </div>

      <div class="bg-blue-300 py-3 px-6 font-medium inline-block"
           on:click={allCookiesHandler}>
        ACCEPTERA ALLA COOKIES
      </div>
    </div>

    </div>

    <div class="absolute right-0 top-0 w-16 h-16 flex items-center justify-center text-offwhite
                md:w-24 md:h-24"
         on:click={closeHandler}>
      <svg class="h-6 w-6 cursor-pointer
                  md:w-10 md:h-10"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
  </div>
{/if}
