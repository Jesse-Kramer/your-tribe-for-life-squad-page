import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_APIURL } from '$env/static/public';

function getDirectusInstance(fetch) {
	const customFetch = async (url, options) => {
		//! Tijdelijke log methode om te zien wat er gebeurt
		console.log('Fetching URL:', url);
		console.log('Options:', options);

		// Fetcht de data en returned het
		const response = await fetch(url, options);
		return response;
	};

    // Als er een fetch functie is meegegeven, gebruik deze dan
	const options = fetch ? { globals: { fetch: customFetch } } : {};
	const directus = createDirectus(PUBLIC_APIURL, options).with(rest());
	return directus;
}

export default getDirectusInstance;
