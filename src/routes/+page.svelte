<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../components/header.svelte'; // Voorbeeld header import
    import Footer from '$lib/footer.svelte';
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

<Header {data}/>

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
