<script>
    export let data;
</script>

<section class="list">
    {#if data.people && data.people.length > 0}
        {#each data.people as person}
        <a class="person" href="/person/{person.id}">
            <picture>
                <img alt="" src={`/mugshots/${person.id}.png`} onerror="this.src= '/placeholder-error-white.png'">
            </picture>

            <article>
                <h3>{person.name || "Naam?"}</h3>
                <p>{person.bio || "Ik heb geen bio!"}</p>
            </article>
        </a>
        {/each}
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zitten geen studenten in deze squad</p>
    {/if}
</section>
