<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>


<h1>{data.person.name}</h1>
<div>{@html data.person.bio}</div>