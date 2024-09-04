/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);

	try {
		return {
			tribe: await directus.request(readItem('tribe', params.id)),
		};
	} catch (err) {
		throw error(404, 'Page not found');
	}
}