<script>
    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    import Logo from '../components/logo.svelte';
    import Header from '../components/header.svelte';

    let squadsWithPersons = [];

    onMount(() => {
        if (data.squads && data.people) {
            // Maakt een nieuwe class aan en zet deze in de variabele squadIdsWithPersons
            const squadIdsWithPersons = new Set(data.people.map(person => person.squad_id));

            // Filtert de squads die in de squadIdsWithPersons zitten en zet deze in de variabele squadsWithPersons
            squadsWithPersons = data.squads.filter(squad => squadIdsWithPersons.has(squad.id));
        }
    });
  </script>

<section class="navigation">
    <h1>FDND</h1>
    <ul class="classes-list">
        {#if squadsWithPersons.length > 0}
            {#each squadsWithPersons as squad}
                <li>
                    <a href="/squad/{squad.id}">{squad.name}</a>
                </li>
            {/each}
        {:else}
            <!-- Als hij leeg is -->
            <p>??</p>
        {/if}
    </ul>
    <ul class="year-list">
        {#if data.tribes}
            {#each data.tribes as tribe}
                <li>
                    <a href="/{tribe.id}">{tribe.name}</a>
                </li>
            {/each}
        {:else}
            <!-- Als hij leeg is -->
            <p>??</p>
        {/if}

    </ul>
</section>

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

<style>
    section.list {
        column-gap: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        padding: 0 3.5rem;
        row-gap: .5rem;
    }

    h2 {
        color: #8C8C8C;
        margin: 0;
        padding: 1rem 3.5rem;
        font-size: 0.8rem;
        text-transform: uppercase;
    }


    h3 {
        margin-bottom: 0;
    }

    article {
        display: flex;
        flex-direction: column;
    }

    picture {
        align-items: center;
        display: flex;
        height: 400px;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    picture::after {
        background: #8C8C8C80;
        border-radius: 8px;
        bottom: 0;
        content: '';
        /* height: calc(100% - 8em); */
        height: calc(100% - 50%);
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 0;
    }

    picture img {
        transition: 1 ease-in-out;
        filter: grayscale(1);
        height: 100%;
        object-fit: contain;
        position: relative;
        width: 100%;
        z-index: 1;
    }

    .list a {
        border-radius: 8px;
        padding: .6em;
        text-decoration: none;
        color: black;
    }

    .list a:hover img {
        filter: grayscale(0);
        transition: 1 ease-in-out;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    .navigation {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem 3.5rem;
    }

    .navigation ul {
        display: flex;
        gap: 1rem;
    }

    .navigation ul a {
        color: black;
        text-decoration: none;
    }

    .navigation ul a:hover {
        text-decoration: underline;
    }

    @media (max-width: 800px) {
        section.list {
            padding: .5rem;
            row-gap: .4rem;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }

        picture {
            height: 200px;
        }


        picture::after {
            height: calc(100% - 4em);
        }

        .navigation {
            padding: 1rem;
            flex-direction: column;
        }
    }
</style>
