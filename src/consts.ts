// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'AI and I';
export const SITE_DESCRIPTION = "Exploring what emerges when you stop prompting and start collaborating. Field notes from the experiment.";

// Site metadata - used in hero section
// These are real values, not theme-specific labels
export const SITE_META = {
	status: 'Active',
	focus: 'Human-AI Collaboration',
	tagline: 'Beginner, figuring it out in public',
	established: 2026,
};

// Post type options (for frontmatter)
export const POST_TYPES = ['essay', 'note', 'tutorial', 'reflection'] as const;
export const POST_STATUSES = ['draft', 'published'] as const;
