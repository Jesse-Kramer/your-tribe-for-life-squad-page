<script>
    import { Hamburger } from 'svelte-hamburgers';
    import { fly } from 'svelte/transition';
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    let open = false;
    let windowWidth = 0;

    const handleResize = () => {
        windowWidth = window.innerWidth;
    };

    onMount(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<header>
    <div>
        <h1>FDND</h1>
        <Hamburger class="hamburger" bind:open />
    </div>

    <nav>
        {#if open || windowWidth >= 768}
        <ul transition:fly={{ y: 200, duration: 1000 }}>
            {#each ['Class 2C', 'Class 2D', 'Contact Us'] as link, i}
            <li transition:fly={{ y: -15, delay: 50 * i }}>
                <a href="#">{link}</a>
            </li>
            {/each}
        </ul>
        {/if}
    </nav>
</header>

<style>
    header {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        margin-bottom: 2rem;
        background-color: var(--bg-color);
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: inherit;
        padding: 0 3.5rem;
    }

    nav {
        background-color: var(--bg-color);
        width: 100vw;
    }

    ul {
        list-style-type: "";
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    a {
        display: block;
        color: var(--text-color);
        text-decoration: none;
        padding: 1rem 3.5rem;
        text-wrap: nowrap;
    }

    a:hover {
        text-decoration: underline;
    }

    @media screen and (min-width: 768px) {
        header {
            flex-direction: row;
            padding: 0 3.5rem;
        }

        div {
            padding: 0;
        }

        ul {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: end;
            align-items: center;
        }

        :global(.hamburger) {
            position: absolute;
            top: -10rem;
        }
    }
</style>