<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section class="navigation">
    <a href="/">&lt; Terug</a>
    <ul class="classes-list">
        <li>1F</li>
        <li>2C</li>
        <li>2D</li>
    </ul>
    <ul class="year-list">
        <li>Jaar 1</li>
        <li>Jaar 2</li>
    </ul>
</section>

<section class="hero">
    <h2>Persoons pagina</h2>
</section>

<!-- Only render if we have people in the data -->
<section class="list">
    {#if data.person.name}
    <article class="container">
        <div class="Name">
            <h3>{data.person.name || "Naam?"}</h3>
        </div>
        <div class="description">
            <h4>Front-end Developer</h4>
        </div>
        <div class="bio">
            <h5>Over {data.person.name},</h5>
            <p>{data.person.bio || "Ik heb geen bio!"}</p>
            <button>test</button>
        </div>
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

<style>
    ul {
            list-style-type: none;
            padding: 0;
        }
    .navigation {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem .5rem;
    }

    .navigation ul {
        display: flex;
        gap: 1rem;
    }
    .navigation a {
        color: black;
        text-decoration: none;
        font-size: 16px;
    }
    .navigation a {
        text-decoration: underline;
    }
    .container {
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
    section.list {
        column-gap: 1rem;
        padding: .5rem;
        row-gap: .4rem;
        margin-bottom: 3em;
    }
    h2 {
        color: #8C8C8C;
        margin: 0;
        padding: 1rem .5rem;
        font-size: 0.8rem;
        text-transform: uppercase;
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
    @media (min-width: 800px) {
        .navigation {
            padding: 1rem 3.5rem;
        }
        .navigation a {
            font-size: 24px;
        }
        section.list {
            padding: 0 3.5rem;
        }
        h2 {
            padding: 1rem 3.5rem;
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
        height: auto;
        object-fit: none;
        }
    }
    @media (min-width: 1024px) {
        .container {
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
