/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem, readItems } from '@directus/sdk';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);

	try {
		// Fetch the squad details by params.id
		const squad = await directus.request(readItem('squad', params.id));
		
		// Fetch people from the same squad using squad_id filter
		const people = await directus.request(readItems('person', {
			filter: {
				squad_id: {
					_eq: params.id
				}
			}
		}));

		return {
			squad,
			people,
		};
	} catch (err) {
		throw error(404, 'Page not found');
	}
}
