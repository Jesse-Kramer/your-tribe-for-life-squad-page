<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../../components/header.svelte';
</script>

<Header {data}/>

<!-- Only render if we have people in the data -->
<section class="hero">
    {#if data.tribe.id}
            <h2>{data.tribe.name}</h2>
    {:else}
        <!-- This will show if no people are available -->
        <p>No data available</p>
    {/if}
</section>

<!-- Only render if we have tribes in the data -->
<section class="list">
    {#if data.squads}
    {#each data.squads as squad}
    <ul>
        <li><a href="/squad/{squad.id}">Ga naar squad {squad.name}</a></li>
    </ul>

    {/each}
    {:else}
        <!-- This will show if no tribes are available -->
        <p>No data available</p>
    {/if}
</section>

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 0;
    }

    ul {
        margin-left: 1rem;
        list-style-type:square;
    }
</style>
