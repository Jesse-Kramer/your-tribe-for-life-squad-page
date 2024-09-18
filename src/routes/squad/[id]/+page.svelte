<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Card from '$lib/card.svelte'; // Voorbeeld footer import
    import Footer from '$lib/footer.svelte';
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
