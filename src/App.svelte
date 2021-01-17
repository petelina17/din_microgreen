<script>
	import 'smelte/src/tailwind.css'
	import {onMount} from 'svelte'
	import Icon from 'fa-svelte'
	import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle'
	import {Button, Snackbar} from 'smelte'
	import {userStore, loadCartFromCookie} from './store'
	import Header from './components/Header.svelte'
	import Home from './components/Home.svelte'
	import LiveCam from './components/LiveCam.svelte'
	import Router from 'svelte-spa-router'
	import Registration from './components/Registration.svelte'
	import MyAccount from './components/MyAccount.svelte'
	import Recipes from './components/Recipes.svelte'
	import RecipeForm from './components/RecipeForm.svelte'
	import UnderConstruction from './components/UnderConstruction.svelte'
	import Cart from './components/Cart.svelte'
	import {checkIfUserLoggedIn} from './authorization'

  // Routs for website
	const routes = {
		'/': Home,
		'/live-cam': UnderConstruction,
		'/registration': Registration,
		'/account': UnderConstruction,
		'/cart': Cart,
		'/recipes': UnderConstruction,
		'/recipe/new': RecipeForm,
		'/recipe/:id': RecipeForm,
		'/articles': UnderConstruction,
		'/articles/:id':UnderConstruction,
		'/forum':UnderConstruction
	}

	let showAlert = false

	onMount(async () => {
		showAlert = true
		await checkIfUserLoggedIn()
		loadCartFromCookie()
		console.log('userStore', $userStore)
	})
</script>

<!--
<Snackbar color="alert" top timeout={10000} bind:value={showAlert} noAction={false}
					class="pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto
      rounded items-center elevation-2 h-32 px-10">
	<div class="text-lg text-offblack" >
		OBS! Detta är demoprojekt skapat för utbildningsändamål och är inte avsett för annat bruk
	</div>
	<div slot="action">
		<Button  text on:click={() => (showAlert = false)}>Stäng</Button>
	</div>
</Snackbar>
-->

<main class="text-offblack">
	<Router {routes}/>
</main>

<style>
	:global(body) {
		font-family: "Rubik", sans-serif;
		/*background-color: lightgray;*/
	}
	main {
		text-align: center;
		margin: 0 auto;
	}

	:global(.user-avatar) {
		font-size: 1.6rem;
		color: #888888;
		margin-right: 0.5rem;
	}
	:global(.wrapper) {
		max-width: 1280px;
		margin: auto;
	}

	/*
	:global(.header1) {
		font-size: 4rem;
	}
	:global(.header2) {
		font-size: 3rem;
	}
	:global(.header3) {
		font-size: 2.25rem;
	}
	:global(.header4) {
		font-size: 1.5rem;
	}

	 */
	:global(.text1) {
		font-size: 1.5rem;
	}
	:global(.text2) {
		font-size: 1rem;
	}
	:global(.bg-logo) {
		background-color: #9BE400;
	}
	:global(.logo) {
		color: #9BE400;
		font-family: "Prosto One", sans-serif;
		/*font-size: 3rem;*/
	}
	:global(.text-offwhite) {
		color: #FDFDFD;
	}
	:global(.text-offblack) {
		color: #303030;
	}
	:global(.titleA) {
		font-size: 7.625rem;
		font-family: "Rubik", sans-serif;
		line-height: 1;
	}


	@media (max-width: 1320px) {
		:global(.wrapper) {
			padding-right: 1.5rem;
			padding-left: 1.5rem;
		}
		/*
		:global(.titleA) {
			font-size: 3.625rem;
			font-family: "Rubik", sans-serif;
			line-height: 1;
		}
	 */
	}


</style>
