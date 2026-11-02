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
			<h2 class="text-white">
				{#if project.href}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
					<a href={project.href} class="underline underline-offset-4 hover:text-neutral-300"
						>{project.title}</a
					>
				{:else}
					{project.title}
				{/if}
			</h2>
			<p>{project.description}</p>
			<p class="text-sm text-neutral-500">{project.tags.join(' · ')}</p>
		</li>
	{/each}
</ul>
