<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const lines = [
		{ prompt: '$ ', text: 'whoami', output: '' },
		{
			prompt: '$ ',
			text: 'cat about.txt',
			output: `
			Kirby Jayes is a software engineer and musician in Pittsburgh, Pennsylvania. Their interests include
			baseball, tabletop role playing games, and science fiction.`
		}
	];
	const TYPE_MS = 35;
	const PAUSE_MS = 400;

	let typedCommands: string[] = $state(lines.map(() => ''));
	let shownOutputs: boolean[] = $state(lines.map(() => false));
	let activeLine = $state(0);
	let ready = $state(false);

	function finish() {
		typedCommands = lines.map((l) => l.text);
		shownOutputs = lines.map(() => true);
		activeLine = lines.length;
		ready = true;
	}

	const choices = [
		{ key: 'p', label: 'projects', href: '/projects' },
		{ key: 'a', label: 'about', href: '/about' }
	] as const;

	function choose(href: (typeof choices)[number]['href']) {
		goto(resolve(href));
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		if (!ready) {
			finish();
			return;
		}
		const key = e.key.toLowerCase();
		if (key === 'enter') choose(choices[0].href);
		else {
			const match = choices.find((c) => c.key === key);
			if (match) choose(match.href);
		}
	}

	$effect(() => {
		if (
			window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
			document.cookie.includes('HOME_SEEN=true') // skip animation for accessibility or if user has seen it already this session
		) {
			finish();
			return;
		}

		let timer: ReturnType<typeof setTimeout>;
		let line = 0;
		let char = 0;

		const step = () => {
			if (line >= lines.length) {
				ready = true;
				return;
			}
			activeLine = line;
			if (char < lines[line].text.length) {
				char += 1;
				typedCommands[line] = lines[line].text.slice(0, char);
				timer = setTimeout(step, TYPE_MS);
			} else {
				shownOutputs[line] = true;
				line += 1;
				char = 0;
				timer = setTimeout(step, PAUSE_MS);
			}
		};
		timer = setTimeout(step, PAUSE_MS);

		document.cookie = 'HOME_SEEN=true; path=/';
		return () => clearTimeout(timer);
	});
</script>

<svelte:head>
	<title>Kirby Jayes - Software Engineer</title>
</svelte:head>

<svelte:window {onkeydown} />

<main class="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 text-sm sm:text-base">
	<div aria-live="polite" class="flex flex-col gap-1">
		{#each lines as line, i (line.text)}
			{#if i <= activeLine}
				<p>
					<span class="text-neutral-500">{line.prompt}</span>{typedCommands[
						i
					]}{#if !ready && i === activeLine && !shownOutputs[i]}<span class="animate-blink">█</span
						>{/if}
				</p>
				{#if shownOutputs[i]}
					<p class="mb-3 text-white">{line.output}</p>
				{/if}
			{/if}
		{/each}

		{#if ready}
			<p class="mt-2 flex flex-wrap items-center gap-x-3">
				<span class="text-neutral-500">?</span>
				<span>where to?</span>
				<span class="flex gap-3">
					{#each choices as choice, i (choice.key)}
						<button
							type="button"
							onclick={() => choose(choice.href)}
							class="underline-offset-4 hover:underline focus-visible:underline {i === 0
								? 'text-white'
								: 'text-neutral-400 hover:text-white'}"
						>
							[{choice.key}]{choice.label.slice(1)}
						</button>
					{/each}
				</span>
				<span class="animate-blink" aria-hidden="true">█</span>
			</p>
		{/if}
	</div>
</main>
