<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- Only render if we have people in the data -->
{#if data.person.name}
        <h1>{data.person.name}</h1>
        <p>{data.person.bio}</p>
        {#if data.person.name && data.person.surname}
                {#if data.person.prefix}
                <img alt="Foto van {data.person.name}" 
                    src={`/mugshots/${data.person.name.replace(/\s+/g, '-')}_${data.person.prefix.replace(/\s+/g, '-')}_${data.person.surname.replace(/\s+/g, '-')}.png`}
                    on:error={(event) => event.target.src = data.person.avatar && data.person.avatar.includes("https://") ? data.person.avatar : '/placeholder.png'}>
            {:else}
                <img alt="Foto van {data.person.name}" 
                    src={`/mugshots/${data.person.name.replace(/\s+/g, '-')}_${data.person.surname.replace(/\s+/g, '-')}.png`}
                    on:error={(event) => event.target.src = data.person.avatar && data.person.avatar.includes("https://") ? data.person.avatar : '/placeholder.png'}>
            {/if}
        {:else if data.person.avatar && data.person.avatar.includes("https://")}
            <img alt="Foto van {data.person.name}" src="{data.person.avatar}">
        {:else}
            <img alt="Placeholder" src="/placeholder.png">
        {/if}
    
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}