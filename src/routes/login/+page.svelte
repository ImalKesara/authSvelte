<script lang="ts">
	import type { PageData } from './$types.js';
	import Login from './Login.svelte';
	export let data: PageData;
</script>

<div class="flex h-screen items-center justify-center ">
	<div class=" max-w-2xl flex-grow p-5 shadow-lg rounded-lg ">
		<h1 class="font-bold text-2xl my-1">Login</h1>
		<Login data={data.form} />
	</div>
</div>
