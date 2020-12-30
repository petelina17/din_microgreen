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

	import Router from 'svelte-spa-router'

	const routes = {
		// '/': MyComponent
	}
</script>

<Header/>

<main>
	Eto e'st main

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
