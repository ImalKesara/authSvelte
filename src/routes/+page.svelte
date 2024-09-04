<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import Navbar from './Navbar.svelte';

	export let data;
	$: ({ user, supabase } = data);
	async function logout() {
		await supabase.auth.signOut();
		goto('/', { invalidateAll: true });
	}
	console.log(user);
</script>

{#if user}
	<Navbar {data} />

	<div class="flex h-screen flex-col items-center justify-center gap-5">
		<p>{user.email}</p>
		<Button on:click={logout}>Logout</Button>
	</div>
{:else}
	<p>You are not logged in</p>
	<Button>
		<a href="./login" role="button">Login</a>
	</Button>
{/if}
