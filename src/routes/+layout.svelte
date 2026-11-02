<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { children }: LayoutProps = $props();

	const links = [
		{ href: resolve('/'), label: 'home' },
		{ href: resolve('/projects'), label: 'projects' },
		{ href: resolve('/about'), label: 'about' }
	];

	let isHome = $derived(page.url.pathname === resolve('/'));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Kirby Jayes</title>
	<meta name="description" content="Personal site of Kirby Jayes, software engineer." />
</svelte:head>

{#if isHome}
	{@render children()}
{:else}
	<div class="mx-auto flex min-h-dvh max-w-2xl flex-col px-6">
		<nav class="flex gap-6 py-8 text-sm">
			{#each links as link (link.href)}
				<a
					href={link.href}
					aria-current={page.url.pathname === link.href ? 'page' : undefined}
					class="text-neutral-500 transition-colors hover:text-white aria-[current=page]:text-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<main class="flex-1 pb-16">
			{@render children()}
		</main>

		<footer class="flex gap-6 py-8 text-sm text-neutral-600">
			<a href="https://github.com/jirbjirbjirb" class="hover:text-white">github</a>
			<a href="https://www.linkedin.com/in/kirby-jayes-087a3320b/" class="hover:text-white">linkedin</a>
			<a href="mailto:rkjayes@gmail.com" class="hover:text-white">email</a>
		</footer>
	</div>
{/if}
