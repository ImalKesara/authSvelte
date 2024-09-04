<script lang="ts">
	import type { PageData } from './$types.js';
	import Register from './Register.svelte';
	export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center ">
	<div class=" max-w-2xl flex-grow p-5 shadow-lg rounded-lg ">
		<h1 class="font-bold text-2xl my-1">Register</h1>
		<Register data={data.form} />
	</div>
</div>
