import App from './App.svelte';
import axios from 'axios'

axios.defaults.withCredentials = true

export function getURL (path) {
	return `${baseURL}/${path}`
}

const app = new App({
	target: document.body,
	props: {
	}
});

export default app;
