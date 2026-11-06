export type Project = {
	title: string;
	description: string;
	// `text` must appear verbatim in `description`; it is rendered as a link.
	link?: { text: string; href: '/about' };
	tags: string[];
	repo: string;
	live?: string;
};

// Ordered newest to oldest by repo creation date.
export const projects: Project[] = [
	{
		title: 'Bookshelf',
		description:
			"In active development, not a complete project. An AT Protocol demo of a reading tracking app: sign in with Bluesky, search books, and write reviews stored as custom lexicon records. Eventually you will be able to browse other user's reviews or view reviews by book. Like Goodreads, but not evil. I'm also using this project to experiment with new agentic coding processes, learn more on the about page.",
		link: { text: 'about page', href: '/about' },
		tags: ['Next.js', 'TypeScript', 'AT Protocol', 'SQLite'],
		repo: 'https://github.com/jirbjirbjirb/bookshelf',
		live: 'https://bookshelf.kirbyjayes.com'
	},
	{
		title: 'Personal site',
		description: 'This site, originally a react app, rebuilt in Svelte.',
		tags: ['Svelte'],
		repo: 'https://github.com/jirbjirbjirb/sveltepersonalsite'
	},
	{
		title: 'Oneil Cruz 40/40 Tracker',
		description:
			"How Pittsburgh Pirate center fielder Oneil Cruz's chance of a 40 home run / 40 stolen base season changed during his breakout 2026 season. After each game the remaining games are simulated 10,000 times based on past performance.",
		tags: ['Python', 'SQLite', 'Plotly', 'GitHub Actions'],
		repo: 'https://github.com/jirbjirbjirb/cruz4040tracker',
		live: 'https://jirbjirbjirb.github.io/cruz4040tracker'
	},
	{
		title: 'Blade Camp',
		description:
			"Retired custom app for a Blades in the Dark campaign set in an Old West setting. Tracked factions, local geography, and each player's place in the criminal underworld.",
		tags: ['TypeScript'],
		repo: 'https://github.com/jirbjirbjirb/bladecampapp'
	}
];
