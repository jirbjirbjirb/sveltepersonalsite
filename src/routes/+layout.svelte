<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="mx-auto my-0 flex w-1/2 gap-4 py-4">
	<a href={resolve('/')} class="underline">Home</a>
	<a href={resolve('/projects')} class="underline">Projects</a>
</nav>

{@render children()}
