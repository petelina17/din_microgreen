<script>
	import axios from 'axios'
	import 'smelte/src/tailwind.css'
	import {get} from 'tiny-cookie'
	import {onMount} from 'svelte'
	import Icon from 'fa-svelte'
	import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle'
	import {Button} from 'smelte'
	import {getURL} from './main'
	import {userStore} from './store'
	import Header from './components/Header.svelte'
	import Home from './components/Home.svelte'
	import LiveCam from './components/LiveCam.svelte'
	import Router from 'svelte-spa-router'
	import Registration from './components/Registration.svelte'
	import MyAccount from './components/MyAccount.svelte'
	import Recipes from './components/Recipes.svelte'
	import RecipeForm from './components/RecipeForm.svelte'



	const routes = {
		'/': Home,
		'/live-cam': LiveCam,
		'/registration': Registration,
		'/account': MyAccount,
		'/recipes': Recipes,
		'/recipe/new': RecipeForm,
		'/recipe/:id': RecipeForm,



	}
</script>

<main>
	<Router {routes}/>
</main>

<style>
	:global(body) {
		font-family: "Rubik", sans-serif;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(.user-avatar) {
		font-size: 1.6rem;
		color: #888888;
		margin-right: 0.5rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
