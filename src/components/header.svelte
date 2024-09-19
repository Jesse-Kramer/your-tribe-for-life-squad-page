<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Toggle from '../routes/toggle.svelte'

    export let data;
    let squadsWithPersons = [];
    let filteredSquads = [];
    let isYearPage = false;
    let year = '';

    // Update squadsWithPersons en filteredSquads op basis van de URL
    $: {
        // Verkrijg de huidige path van de URL
        const path = $page.url.pathname;

        // Controleer of de path eindigt met /1 of /2
        if (path.endsWith("/1") || path.endsWith("/2")) {
            year = path.slice(-1); // Verkrijg het laatste karakter als jaar
            isYearPage = true;
        } else {
            isYearPage = false;
            year = '';
        }

        // Filter squads op basis van het geselecteerde jaar
        if (data.squads && data.people) {
            const squadIdsWithPersons = new Set(data.people.map(person => person.squad_id));
            squadsWithPersons = data.squads.filter(squad => squadIdsWithPersons.has(squad.id));

            if (isYearPage && year) {
                filteredSquads = squadsWithPersons.filter(squad => squad.name.startsWith(year));
            } else {
                filteredSquads = squadsWithPersons; // Geen filtering als niet op jaar pagina
            }
        }
    }
</script>

<header class="navigation">
    <h1><a href="/">FDND</a></h1>
    <ul class="classes-list">
        {#if filteredSquads.length > 0}
            {#each filteredSquads as squad}
                <li>
                    <a href="/squad/{squad.id}">{squad.name}</a>
                </li>
            {/each}
        {:else}
            <!-- Als hij leeg is -->
            <li>??</li>
        {/if}
    </ul>
    <ul class="year-list">
        {#if data.tribes}
            {#each data.tribes as tribe}
                <li>
                    <a href="/{tribe.id}">{tribe.name}</a>
                </li>
            {/each}
        {:else}
            <!-- Als hij leeg is -->
            <li>??</li>
        {/if}
        <li><Toggle /></li>
    </ul>
</header>

<style>
    .navigation {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem 3.5rem;
    }

    .navigation ul {
        display: flex;
        gap: 1rem;
        list-style-type: none;
    }

    .navigation a {
        color: var(--text);
        text-decoration: none;
    }

    .navigation a:hover {
        text-decoration: underline;
    }

    @media (max-width: 800px) {
        .navigation {
            padding: 1rem;
            flex-direction: column;
        }
    }
</style>
