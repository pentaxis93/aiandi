/**
 * Theme Manifest
 * 
 * Central registry of all available themes.
 * Each theme has dark and light modes.
 * 
 * To add a new theme:
 * 1. Create CSS file in design-system/themes/[theme-id].css
 * 2. Add entry here with id matching the CSS file name
 * 3. The CSS should define :root[data-theme="[id]-dark"] and :root[data-theme="[id]-light"]
 */

export interface Theme {
	id: string;
	name: string;
	description: string;
}

export const themes: Theme[] = [
	{
		id: 'lab',
		name: 'Digital Lab',
		description: 'Monospace-forward specimen catalog aesthetic',
	},
	// Add more themes here as they're created
];

export const defaultTheme = 'lab';
export const defaultMode = 'dark';

/**
 * Get full theme key for data-theme attribute
 * Format: "{themeId}-{mode}" e.g. "lab-dark", "lab-light"
 */
export function getThemeKey(themeId: string, mode: 'dark' | 'light'): string {
	return `${themeId}-${mode}`;
}

/**
 * Parse theme key into components
 */
export function parseThemeKey(key: string): { themeId: string; mode: 'dark' | 'light' } {
	const lastDash = key.lastIndexOf('-');
	if (lastDash === -1) {
		return { themeId: key, mode: 'dark' };
	}
	const mode = key.slice(lastDash + 1);
	const themeId = key.slice(0, lastDash);
	return {
		themeId,
		mode: mode === 'light' ? 'light' : 'dark',
	};
}
