<script lang="ts">
	import { projects } from '#lib/projects.js';
</script>

<svelte:head>
	<title>Projects | Kirby Jayes</title>
</svelte:head>

<div class="flex flex-col w-full h-full">
	<div class="flex flex-col w-1/2 my-0 mx-auto">
		<h1>Projects</h1>
		<ul class="flex flex-col gap-4">
			{#each projects as project (project.title)}
				<li>
					<h2>
						{#if project.href}
							<a href={project.href} class="underline">{project.title}</a>
						{:else}
							{project.title}
						{/if}
					</h2>
					<p>{project.description}</p>
					<p class="text-sm">{project.tags.join(' · ')}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
