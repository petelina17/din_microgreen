<script>
  import Icon from 'fa-svelte'
  import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'


  function facebookHandler() {
    window.open('http://www.facebook.com', '_blank')
  }

  function twitterHandler() {
    window.open('http://www.twitter.com', '_blank')
  }

  function instagramHandler() {
    window.open('http://www.instagram.com', '_blank')
  }
</script>

<!--
    SOCIAL ICONS ========================================
  -->
<div class="flex items-center h-full lg:hidden text-center
            text-gray-400 text-xl sm:text-xl">
  <div class="mx-1 lg:mx-auto w-10 h-1 sm:w-12 sm:h-12 rounded-full
              flex items-center justify-center"
       on:click={facebookHandler}>
    <Icon icon={faFacebookF}/>
  </div>
  <div class="mx-1 lg:mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full
              flex items-center justify-center"
       on:click={twitterHandler}>
    <Icon icon={faTwitter}/>
  </div>
  <div class="mx-1 lg:mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full
              flex items-center justify-center"
       on:click={instagramHandler}>
    <Icon icon={faInstagram}/>
  </div>
</div>

<!-- SOCIAL ICONS FOR DESKTOP -->
<div class="hidden lg:flex flex-col justify-end items-center h-120 w-16 text-center
            text-white text-xl ml-6 social-icons">
  <div class="mx-auto w-12 h-12 rounded-full flex items-center justify-center mt-3
              sm:opacity-75"
       style="background-color: #88a8ee"
       on:click={facebookHandler}>
    <Icon icon={faFacebookF}/>
  </div>
  <div class="mx-auto w-12 h-12 rounded-full flex items-center justify-center mt-3
             sm:opacity-75"
       style="background-color: #9ce4ef"
       on:click={twitterHandler}>
    <Icon icon={faTwitter}/>
  </div>
  <div class="mx-auto w-12 h-12 rounded-full flex items-center justify-center mt-3
              sm:opacity-75"
       style="background-color: #efa09c"
       on:click={instagramHandler}>
    <Icon icon={faInstagram}/>
  </div>
</div>

<style>
  .social-icons > div {
    transition: all 0.1s ease-out;
  }

  .social-icons > div:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
</style>
