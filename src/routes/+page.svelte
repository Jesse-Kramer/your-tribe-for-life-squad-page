<script>
  /** @type {import('./$types').PageData} */
  export let data;

  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Card from "../components/card.svelte";
  import { fly } from "svelte/transition";
</script>

<Header {data} />

<section class="hero">
  <h2>Alle Studenten</h2>
</section>

<div in:fly={{ y: 200, duration: 1500 }}>
  <Card {data} />
</div>

<Footer />