<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- Only render if we have people in the data -->
{#if data.squad.id}
        <h1>{data.squad.id}</h1>
        <p>{data.squad.name}</p>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}