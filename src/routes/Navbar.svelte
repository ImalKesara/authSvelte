<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	export let data;
    $:({user}=data)
</script>

<div class=" mx-auto my-1 max-w-5xl rounded-lg p-3 shadow">
	<nav class="flex list-none items-center justify-between">
		<li><a href="/login">Home</a></li>
		<li>
			<nav class="flex items-center gap-2">
                <li>{user.email}</li>
				<li>
					<ModeWatcher />
					<Button on:click={toggleMode} variant="outline" size="icon">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</li>
			</nav>
		</li>
	</nav>
</div>
