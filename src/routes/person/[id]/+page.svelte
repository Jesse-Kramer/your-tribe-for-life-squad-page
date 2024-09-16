<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section class="hero">
    <h2>Persoons pagina</h2>
</section>

<!-- Only render if we have people in the data -->
<section class="list">
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
    }
</style>
