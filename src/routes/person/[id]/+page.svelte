<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- Only render if we have people in the data -->
{#if data.person.name}
    <picture>
        <img alt="" src={`/mugshots/${data.person.id}.png`} onerror="this.src= '/placeholder-error-white.png'">
    </picture>

    <article>
        <h3>{data.person.name || "Naam?"}</h3>
        <p>{data.person.bio || "Ik heb geen bio!"}</p>
    </article>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}
