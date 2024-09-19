<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../../../components/header.svelte';
    import Footer from '../../../components/footer.svelte';
    import Card from '../../../components/card.svelte';
</script>

<Header {data}/>

<!-- Only render if we have people in the data -->


<section class="hero">
{#if data.squad.id}
        <h2>Squad {data.squad.name}</h2>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}
</section>

<!-- Only render if we have people in the data -->
<Card {data}/>

<Footer/>
