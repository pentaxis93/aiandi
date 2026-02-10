/**
 * Extract an excerpt from blog post content
 * 
 * Priority:
 * 1. If frontmatter has description, use it
 * 2. If content has <!--more--> marker, use everything before it
 * 3. Otherwise, use first paragraph (up to first double newline)
 */
export function getExcerpt(content: string, description?: string): string {
	// Use frontmatter description if provided
	if (description) {
		return description;
	}

	// Check for <!--more--> marker
	const moreMarker = '<!--more-->';
	if (content.includes(moreMarker)) {
		const excerpt = content.split(moreMarker)[0].trim();
		return stripMarkdown(excerpt);
	}

	// Extract first paragraph (everything up to first double newline)
	const paragraphs = content.split(/\n\n+/);
	if (paragraphs.length > 0) {
		return stripMarkdown(paragraphs[0].trim());
	}

	return '';
}

/**
 * Strip markdown formatting from text (basic implementation)
 */
function stripMarkdown(text: string): string {
	return text
		// Remove headers
		.replace(/^#+\s+/gm, '')
		// Remove bold/italic
		.replace(/(\*\*|__)(.*?)\1/g, '$2')
		.replace(/(\*|_)(.*?)\1/g, '$2')
		// Remove links but keep text
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		// Remove inline code
		.replace(/`([^`]+)`/g, '$1')
		// Remove multiple spaces
		.replace(/\s+/g, ' ')
		// Clean up
		.trim();
}
