<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- Only render if we have people in the data -->
{#if data.tribe.id}
        <h1>{data.tribe.id}</h1>
        <p>{data.tribe.name}</p>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}

<hr>

<!-- Only render if we have tribes in the data -->
{#if data.squads}
    {#each data.squads as squad}
        <a href="/squad/{squad.id}">Ga naar {squad.name}</a><br>
    {/each}
{:else}
    <!-- This will show if no tribes are available -->
    <p>No data available</p>
{/if}

<hr>