/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem, readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);

	try {
		// Fetch the squad details by params.id
		const tribe = await directus.request(readItem('tribe', params.id));

		// Fetch people from the same squad using squad_id filter
		const squads = await directus.request(readItems('squad', {
			filter: {
				tribe_id: {
					_eq: params.id
				}
			}
		}));

		return {
			tribe,
			squads,
		};
	} catch (err) {
		throw error(404, 'Page not found');
	}
}