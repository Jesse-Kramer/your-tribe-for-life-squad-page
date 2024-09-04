<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- Renderd alleen de data als er personen zijn -->
{#if data.people && data.people.length > 0}
    {#each data.people as person}
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
    {/each}
{:else}
    <!-- Dit wordt laten zien als er geen personen zijn -->
    <p>Geen personen gevonden</p>
{/if}

<style>
    p {
        text-wrap: pretty;
        max-width: 50ch;
    }
</style>
