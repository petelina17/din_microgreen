import App from './App.svelte';
import axios from 'axios'

axios.defaults.withCredentials = true

// path to backend
export const baseURL = 'http://localhost:8110'

export function getURL (path) {
	return `${baseURL}/${path}`
}

const app = new App({
	target: document.body,
	props: {
	}
});

export default app;
