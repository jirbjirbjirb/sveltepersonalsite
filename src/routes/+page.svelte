<script>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<div class="flex h-full w-full flex-col">
	<div class="mx-auto my-0 flex w-1/2 flex-col">
		<h1>Welcome to Kirby Jayes dot com</h1>
		<p class="">
			I am a software engineer and musician in Pittsburgh, Pennsylvania. My interests include
			baseball, tabletop role playing games, and science fiction.
		</p>
		<button onclick={() => goto(resolve('/projects'))}> view projects </button>
	</div>
</div>
