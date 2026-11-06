<script lang="ts">
	import { resolve } from '$app/paths';
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
			<p>
				{#if project.link && project.description.includes(project.link.text)}
					{@const [before, after] = project.description.split(project.link.text)}
					{before}<a
						href={resolve(project.link.href)}
						class="underline underline-offset-4 hover:text-white">{project.link.text}</a
					>{after}
				{:else}
					{project.description}
				{/if}
			</p>
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
