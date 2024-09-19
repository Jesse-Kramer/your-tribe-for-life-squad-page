<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Header from '../components/header.svelte'; // Voorbeeld header import
    import Footer from '../components/footer.svelte'; // Voorbeeld footer import
    import Card from '../components/card.svelte';
  </script>

<Header {data}/>

<section class="hero">
    <h2>Alle Studenten</h2>
</section>

<!-- Only render if we have people in the data -->
<Card {data}/>

<Footer/>
