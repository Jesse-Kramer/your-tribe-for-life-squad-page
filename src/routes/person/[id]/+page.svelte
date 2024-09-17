<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../../../components/header.svelte';
</script>

<Header {data}/>

<!-- Only render if we have people in the data -->
{#if data.person.name}
    <h1>{data.person.name}</h1>
    <p>{data.person.bio}</p>
    <img 
        alt="Foto van {data.person.name}" 
        src="{data.person.imageUrl}"
        on:error={(event) => event.target.src = data.person.placeholderImage}
    />
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}
