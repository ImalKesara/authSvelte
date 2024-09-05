<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	let usr: string = '';
	let usrData:any = [];
	$: ({ user, supabase } = data);

	export let data;
	async function logout() {
		await supabase.auth.signOut();
		console.log(user);
		goto('/', { invalidateAll: true });
	}

	async function getID() {
		await supabase.auth.getUser();
		if(user){
			const {data,error} = await supabase.from('userDetails').select('*').eq('usrID',user.id)
			if(error){
				console.error('Error fecthing data',error);
			}else{
				usrData =data;
			}
		}
	}

	$:console.log(usrData)
</script>

{#if user}
	<Navbar {data} />

	<div class="flex h-screen flex-col items-center justify-center gap-5">
		<p>{user.email}</p>
		<p>{user.id}</p>
		<p>{user.created_at}</p>
		<button on:click={getID}>get id</button>
		{#if usrData}
			{#each usrData as usrdata}
				<p>{usrdata.age}</p>
				<p>{usrdata.job}</p>
				<p>{usrdata.bio}</p>
			{/each}
		{:else}
			<p>not found</p>
		{/if}
		<Button on:click={logout}>Logout</Button>
	</div>
{:else}
	<p>You are not logged in</p>

	<Button>
		<a href="./login" role="button">Login</a>
	</Button>
{/if}
