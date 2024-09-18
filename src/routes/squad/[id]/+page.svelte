<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../../../components/header.svelte';
</script>

<Header {data}/>

<!-- Only render if we have people in the data -->
{#if data.squad.id}
        <h1>{data.squad.id}</h1>
        <p>{data.squad.name}</p>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}

<!-- Only render if we have people in the data -->
{#if data.people}
    {#each data.people as person}
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
        <a href="/person/{person.id}">Ga naar de pagina van {person.name}</a>
    {/each}
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}