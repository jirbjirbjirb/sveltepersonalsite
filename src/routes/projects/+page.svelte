<script lang="ts">
	import { projects } from '#lib/projects.js';
</script>

<svelte:head>
	<title>Projects | Kirby Jayes</title>
</svelte:head>

<h1 class="mb-6 text-white">Projects</h1>

<ul class="flex flex-col gap-8">
	{#each projects as project (project.title)}
		<li class="flex flex-col gap-1">
			<h2 class="text-white">{project.title}</h2>
			<p>{project.description}</p>
			<p class="text-sm text-neutral-500">{project.tags.join(' · ')}</p>
			<p class="flex gap-4 text-sm">
				{#if project.live}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
					<a href={project.live} class="underline underline-offset-4 hover:text-white">live</a>
				{/if}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
				<a href={project.repo} class="underline underline-offset-4 hover:text-white">github</a>
			</p>
		</li>
	{/each}
</ul>
