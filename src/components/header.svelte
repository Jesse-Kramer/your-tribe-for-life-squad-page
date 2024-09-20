<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Toggle from '../routes/toggle.svelte'

    export let data;
    let squadsWithPersons = [];
    let filteredSquads = [];
    let isYearPage = false;
    let year = '';

    // Update squadsWithPersons and filteredSquads based on the URL
    $: {
        // Get the current path from the URL
        const path = $page.url.pathname;

        // Check if the path ends with /1 or /2
        if (path.endsWith("/1") || path.endsWith("/2")) {
            year = path.slice(-1); // Get the last character as the year
            isYearPage = true;
        } else {
            isYearPage = false;
            year = '';
        }

        // Filter squads based on the selected year
        if (data.squads && data.people) {
            const squadIdsWithPersons = new Set(data.people.map(person => person.squad_id));
            squadsWithPersons = data.squads.filter(squad => squadIdsWithPersons.has(squad.id));

            if (isYearPage && year) {
                filteredSquads = squadsWithPersons.filter(squad => squad.name.startsWith(year));
            } else {
                filteredSquads = squadsWithPersons; // No filtering if not on year page
            }
        }
    }
</script>

<header class="navigation">
    <h1><a href="/">FDND</a></h1>
    <ul class="classes-list">
        <!-- Always show all squads -->
        {#if data.squads.length > 0}
            {#each data.squads as squad}
                <li>
                    <a href="/squad/{squad.id}">{squad.name}</a>
                </li>
            {/each}
        {:else}
            <li>??</li>
        {/if}
    </ul>

    <ul class="year-list">
        <li><Toggle /></li>
    </ul>
</header>

<!-- Filtered content goes here, if needed -->
{#if isYearPage && filteredSquads.length > 0}
    <!-- Show filtered squads based on the year -->
    <section>
        <h2>Squads for year {year}</h2>
        <ul>
            {#each filteredSquads as squad}
                <li>{squad.name}</li>
            {/each}
        </ul>
    </section>
{/if}


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
