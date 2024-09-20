<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../../../components/header.svelte';
    import Footer from '../../../components/footer.svelte';
</script>

<Header {data}/>

<!-- Only render if we have people in the data -->
<section class="person-block">
    {#if data.person.name}
    <article class="person-container">
        <article class="Name">
            <h3>{data.person.name || "Naam?"}</h3>
        </article>
        <article class="description">
            <h4>Front-end Developer</h4>
        </article>
        <article class="bio">
            <h5>Over {data.person.name},</h5>
            <p>{data.person.bio || "Ik heb geen bio!"}</p>
            {#if data.person.github_handle}
                {#if data.person.github_handle.startsWith('https://')}
                    <a href="{data.person.github_handle}" target="_blank" rel="noopener noreferrer"><img src=/github_logo.png alt="github logo">Github</a>
                {:else}
                    <a href="https://github.com/{data.person.github_handle}" target="_blank" rel="noopener noreferrer"><img src=/github_logo.png alt="github logo">Github</a>
                {/if}
            {/if}
        </article>
        <div class="image">
            <picture>
                <img alt="" src={`/mugshots/${data.person.id}.png`} onerror="this.src= '/placeholder-error-white.png'">
            </picture>
        </div>
    </article>

    {:else}
        <!-- This will show if no people are available -->
        <p>No data available</p>
    {/if}
</section>

<Footer/>

<style>
    .person-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, auto);
        gap: 0px 8px;
    }
    .Name {grid-area: 2 / 1 / 3 / 5;}
    .description {grid-area: 3 / 1 / 4 / 5;}
    .bio {
        grid-area: 5 / 1 / 6 / 5;
        margin-top: 1em;
    }
    .image {grid-area: 4 / 1 / 5 / 5;}
    section.person-block {
        column-gap: 1rem;
        padding: .5rem;
        row-gap: .4rem;
        margin-bottom: 3em;
    }
    .person-block .image:hover img {
        filter: grayscale(0);
        transition: 1 ease-in-out;
    }
    h3 {
        font-size: 52px;
        margin: 0;
        float: inline-end;
    }

    h4 {
        font-size: 32px;
        font-weight: 100;
        margin: 0;
        float: inline-end;
    }

    h5 {
        font-size: 32px;
        margin: 0;
    }

    p {
        font-size: 20px;
        font-weight: 100;
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
    .person-container .bio a {
        border: 2px solid black;
        border-radius: 4px;
        font-size: 20px;
        padding: 0.3em 0.5em;
        text-decoration: none;
        color: black;
        font-weight: bold;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    .person-container .bio a:hover {
        transform: translate(10px, -10px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.6);
    }
    .person-container .bio a img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 5px;
        margin-bottom: 3px;
    }
    article {
        display: block;
    }

    .person-block img {
        filter: grayscale(0);
    }
    @media (min-width: 800px) {
        section.person-block {
            padding: 0 3.5rem;
        }
        h3 {
        font-size: 72px;
    }
        h4 {
            font-size: 52px;
        }
        picture {
            height: 400px;
        }
        picture::after {
            height: calc(100% - 50%);
        }
        picture img {
        height: 140%;
        object-fit: contain;
        }
    }
    @media (min-width: 1024px) {
        .person-container {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(8, minmax(0px, 100px));
            gap: 0px 16px;
        }

        .Name { grid-area: 2 / 6 / 3 / 11; }
        .description {
            grid-area: 3 / 1 / 4 / 11;
        }
        .bio {
            grid-area: 5 / 7 / 6 / 11;
            margin: 0;
        }
        .image {
            grid-area: 4 / 2 / 7 / 6;
        }
        picture::after {
            height: calc(100% - 20%);
        }
    }
</style>
