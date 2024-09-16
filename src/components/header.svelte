<script>
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