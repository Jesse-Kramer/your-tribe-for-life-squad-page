<script>
    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../components/header.svelte'; // Voorbeeld header import
    import Footer from '../components/footer.svelte'; // Voorbeeld footer import
    import Card from '$lib/card.svelte'; // Voorbeeld footer import

    let squadsWithPersons = [];

    onMount(() => {
        if (data.squads && data.people) {
            // Maakt een nieuwe class aan en zet deze in de variabele squadIdsWithPersons
            const squadIdsWithPersons = new Set(data.people.map(person => person.squad_id));

            // Filtert de squads die in de squadIdsWithPersons zitten en zet deze in de variabele squadsWithPersons
            squadsWithPersons = data.squads.filter(squad => squadIdsWithPersons.has(squad.id));
        }
    });
  </script>

<section class="navigation">
    <h1>FDND</h1>
    <ul class="classes-list">
        {#if squadsWithPersons.length > 0}
            {#each squadsWithPersons as squad}
                <li>
                    <a href="/squad/{squad.id}">{squad.name}</a>
                </li>
            {/each}
        {:else}
            <!-- Als hij leeg is -->
            <p>??</p>
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
            <p>??</p>
        {/if}

    </ul>
</section>

<section class="hero">
    <h2>Alle Studenten</h2>
</section>

<!-- Only render if we have people in the data -->
<section class="list">
    {#if data.people}
        {#each data.people as person}
        <Card {person}/>
        {/each}
    {:else}
        <!-- This will show if no people are available -->
        <p>No data available</p>
    {/if}
</section>

<Footer/> 
