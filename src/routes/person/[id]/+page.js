/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem, readItems } from '@directus/sdk';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);

    try {
        const person = await directus.request(readItem('person', params.id));
        const tribes = await directus.request(readItems('tribe'));
        const squads = await directus.request(readItems('squad', {
			sort: ['name'],
		}));

        return {
            person,
            tribes,
            squads
        };
    } catch (err) {
        throw error(404, 'Page not found');
    }
}
