<script lang="ts">
	const skills = [
		{
			label: 'languages',
			items: ['JavaScript', 'TypeScript', 'Liquid', 'HTML', 'CSS', 'some Java, Python, C#']
		},
		{
			label: 'tools',
			items: [
				'Git',
				'React',
				'Next.js',
				'GraphQL',
				'PostgreSQL',
				'Node.js',
				'Shopify Themes',
				'Shopify Hydrogen',
				'Tailwind',
				'Bootstrap',
				'Claude Code',
				'GitHub Copilot',
				'pi harness'
			]
		},
		{
			label: 'also',
			items: [
				'AWS Lambda',
				'Vercel',
				'Plasmic',
				'Strapi',
				'Webflow',
				'technical writing',
				'ecommerce integrations',
				'microservices',
				'no-code tooling'
			]
		}
	];
</script>

<svelte:head>
	<title>About | Kirby Jayes</title>
</svelte:head>

<h1 class="mb-6 text-white">About</h1>

<div class="flex flex-col gap-4 leading-relaxed">
	<p>
		I am a software engineer and musician in Pittsburgh, Pennsylvania. I have deep experience in the
		React and Typescript ecosystem, as well as with ecommerce, specifically Shopify. Most recently I
		was part of the four person core team which built blink Commerce, a tool for Shopify merchants
		to deploy stable, performant, and highly customizable statically-generated frontends on Vercel's
		edge network. Users now conduct millions of dollars of transactions annually through blink
		sites.
	</p>
	<p>
		I am always learning something new. Currently I am working on Bookshelf, a book tracking app
		which leverages the AT Protocol to allow users to log their reading, leave short reviews and
		explore the reading history of their social connections. Like everyone else, I'm exploring the
		agentic coding frontier and working to evolve the workflows that benefit me the most. See the AI
		section below for an example my current process, though things are always changing.
	</p>
	<p>
		Outside of work I play in a band, watch the Pittsburgh Pirates, and serve as a frequent game
		master for my long-running tabletop RPG group. Currently we are playing Blades in the Dark.
	</p>
</div>

<h2 class="mt-10 mb-3 text-white">Skills</h2>
<dl class="flex flex-col gap-3">
	{#each skills as group (group.label)}
		<div>
			<dt class="text-sm text-neutral-500">{group.label}</dt>
			<dd>{group.items.join(' · ')}</dd>
		</div>
	{/each}
</dl>

<h2 class="mt-10 mb-3 text-white">AI workflow</h2>
<div class="flex flex-col gap-4 leading-relaxed">
	<p>
		Agentic tools are increasingly a part of my process. I prefer to delegate tasks but keep
		engineering decisions entirely in my control. Currently I utilize a development cycle where a
		planning and Q&amp;A session generates a sprint document. Each sprint is gated by both agentic
		and manual code reviews, and then followed by a Q&amp;A session on the architecture and
		decisions made to ensure I understand everything that I ship.
	</p>
	<p>
		A PR is filed only when it has met each of the preceeding requirements. Larger, more expensive,
		models plan and review while delegating smaller subagents to handle well-defined tasks. This
		structure is intended to keep each agent's context manageable while still accomplishing sizeable
		tasks.
	</p>
	<p>
		The Bookshelf v0 sprint plan is a current example of this process.
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL -->
		<a
			href="https://claude.ai/artifact/LftUT4RFFyXSXNt79KsVjT"
			class="underline underline-offset-4 hover:text-white">View the Bookshelf sprint plan</a
		>
	</p>
</div>

<h2 class="mt-10 mb-3 text-white">Contact</h2>
<p>
	<a href="mailto:rkjayes@gmail.com" class="underline underline-offset-4 hover:text-white"
		>rkjayes@gmail.com</a
	>
</p>
