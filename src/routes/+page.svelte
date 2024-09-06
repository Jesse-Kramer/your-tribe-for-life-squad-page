<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);

    import Logo from '../components/logo.svelte'; // Voorbeeld logo import
    import Header from '../components/header.svelte'; // Voorbeeld header import
</script>
<Header/> // Voorbeeld header import

<Logo/> // Voorbeeld logo import

<a href="/person/8">Ga naar een persoon (id:8)</a><br>

<hr>
<!-- Only render if we have tribes in the data -->
{#if data.tribes}
    {#each data.tribes as tribe}
        <a href="/{tribe.id}">Ga naar {tribe.name}</a><br>
    {/each}
{:else}
    <!-- This will show if no tribes are available -->
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

<!-- Only render if we have people in the data -->
{#if data.people}
    {#each data.people as person}
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
    {/each}
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}