<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../components/header.svelte'; // Voorbeeld header import
    import Footer from '../components/footer.svelte'; // Voorbeeld footer import
  </script>

<Header {data}/>

<section class="hero">
    <h2>Alle Studenten</h2>
</section>

<!-- Only render if we have people in the data -->
<section class="list">
    {#if data.people}
        {#each data.people as person}
        <a href="/person/{person.id}">
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
        <p>No data available</p>
    {/if}
</section>

<Footer/>
