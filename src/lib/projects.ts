export type Project = {
	title: string;
	description: string;
	tags: string[];
	href?: string;
};

// TODO(personal): replace placeholder entries with real projects
export const projects: Project[] = [
	{
		title: 'Personal Site',
		description: 'This website, built with SvelteKit and Tailwind.',
		tags: ['SvelteKit', 'Tailwind'],
		href: 'https://github.com/'
	},
	{
		title: 'Placeholder Project',
		description: 'Replace this entry with a real project.',
		tags: ['TypeScript']
	}
];
