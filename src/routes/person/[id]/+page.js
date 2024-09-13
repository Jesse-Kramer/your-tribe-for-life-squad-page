/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';

export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);

    try {
        const person = await directus.request(readItem('person', params.id));

        // Construct image URLs and determine fallback options
        const name = person.name || '';
        const surname = person.surname || '';
        const prefix = person.prefix || '';
        const avatar = person.avatar || '';

        const slugifiedName = name.replace(/\s+/g, '-');
        const slugifiedSurname = surname.replace(/\s+/g, '-');
        const slugifiedPrefix = prefix.replace(/\s+/g, '-');

        let imageUrl = '';
        if (name && surname) {
            if (prefix) {
                imageUrl = `/mugshots/${slugifiedName}_${slugifiedPrefix}_${slugifiedSurname}.png`;
            } else {
                imageUrl = `/mugshots/${slugifiedName}_${slugifiedSurname}.png`;
            }
        } else if (avatar && avatar.includes('https://')) {
            imageUrl = avatar;
        } else {
            imageUrl = '/placeholder.png';
        }

        return {
            person: {
                ...person,
                imageUrl,
                placeholderImage: '/placeholder.png'
            }
        };
    } catch (err) {
        throw error(404, 'Page not found');
    }
}
