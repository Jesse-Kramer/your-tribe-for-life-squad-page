
<script>
    export let person = {}
</script>

<a href="/person/{person.id}">
    <picture>
        <img alt="" src={`/mugshots/${person.id}.png`} onerror="this.src= '/placeholder-error-white.png'">
    </picture>

    <article>
        <h3>{person.name || "Naam?"}</h3>
        <p>{person.bio || "Ik heb geen bio!"}</p>
    </article>
</a>

<style>

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

    a {
        border-radius: 8px;
        padding: .6em;
        text-decoration: none;
        color: black;
    }


    a:hover img {
        filter: grayscale(0);
        transition: 1 ease-in-out;
    }


    @media (max-width: 800px) {
        picture {
            height: 200px;
        }


        picture::after {
            height: calc(100% - 4em);
        }
    }


</style>