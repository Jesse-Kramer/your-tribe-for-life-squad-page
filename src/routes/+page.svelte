<script>
    /** @type {import('./$types').PageData} */
    export let data;

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
<section class="list">
    {#if data.people}
        {#each data.people as person}
        <article>
            {#if person.avatar}
                <img alt="Foto van {person.name}" src="{person.avatar}">
            {:else}
                <img alt="Placeholder" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAC4QAQACAQIEBAQGAwAAAAAAAAABAgMEEQUhMVESEyJBUmFxkSNCgaHB0TIzkv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APoIDo5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM+G3wz9gYAAAAAAAAAAAAAAAAAAAAB202nvqL+GnKI627A548d8t4pjrNrT7QstPwusbTntvPw16fdM0+DHp6eHHH1n3l1ZtakaY8OPF/rx1r9IdN2BFa3pTJG16Vt9Y3Rc3DcF+dN8c/LnH2TAFFqNFmwbzMeKnxVR3pULV8Ppl3ti2pft7S1KzYpx0vgy0tNbY7bx8mFRoAAAAREzMREbzPtAt+F6etMUZpje9uk9oKRAjRamY38mdvnMOF6Wpaa3rNZj2mHpEfW6euowzy9dY3rP8M61iiAaZAAAZpW17xSkb2mdogHTTYL6jLFKfrPaF7hxUw44pSNoj92mk09dNiisc7TztPeXZm1qQARQAAAAAAAHmgG2AABe8PvF9Jj2/LHhn9FE7abU5NNfenOJ61npKVYv2uW8Y8dr26VjdBjiuPbnivE9o2Q9XrL6n07eGkflj+UxdRgGmQABbcM0vl0868eu0emO0InDtN5+XxWj8OnX5z2XSWtSADKgAAAAAAAAAKu3Cr/lzVn612Rs2iz4udqbx3rzXoupjzQvdRo8OfeZr4b/FVVanSZdPO9o8VPa0LqYjgKgAAAA2x0tlyVpSN7WnaGq34ZpvLx+bePXaOXyhKsSsGKuDFXHXpHWe8ugMtAAAAAAAAAAAAAABMRMbTG8ACs1nDtt76ePrT+la9Kh63Q1z73x7VyftZZUsUwzatqWmtomLR1iWGmQEjR6W2pv2pH+VgdOHaXzr+ZePw6z/ANSuWKUrjpFKRtWOkMsWtyAAAAAAAAAAAAAAAAAAAAI+r0mPUxz9N46WhXW4bqInaPDaO8SuRdTFZg4XO++e0bfDX+1lSlcdYrSsVrHSIZE1cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=">
            {/if}
            <h2>{person.name}</h2>
            <p>{person.bio}</p>

            <a href="/person/{person.id}">Ga naar de pagina van {person.name}</a>
        </article>
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
        padding: 3.5rem;
        row-gap: 2rem;
    }

    img {
        filter: grayscale(1);
        height: 400px;
        max-height: 400px;
        object-fit: cover;
        width: 100%;
    }

    .list a {
        background-color: #f0f0f0;
        border-radius: 8px;
        color: rgb(114, 114, 190);
        padding: .6em;
        text-decoration: none;
        width: fit-content;
    }
</style>
