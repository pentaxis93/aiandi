/** @type {import('tailwindcss').Config} */

/**
 * Tailwind Configuration for AI and I Blog
 * 
 * This config maps Tailwind utilities to semantic design tokens.
 * Theme-specific values are defined in design-system/themes/
 * 
 * DO NOT put color/font values here. This is structural mapping only.
 */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  
  theme: {
    extend: {
      /**
       * Semantic color mapping
       * 
       * These map Tailwind utilities (bg-surface, text-primary, etc.) 
       * to CSS custom properties defined in theme files.
       */
      colors: {
        // Surfaces
        'background': 'var(--color-background)',
        'surface': 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        'border': 'var(--color-border)',
        
        // Text
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',
        
        // Accent
        'accent': 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-subtle': 'var(--color-accent-subtle)',
        
        // Theme extensions (optional, provided by some themes)
        'accent-secondary': 'var(--color-accent-secondary, var(--color-accent))',
        'accent-tertiary': 'var(--color-accent-tertiary, var(--color-accent))',
        
        // Semantic
        'success': 'var(--color-success, #10b981)',
        'warning': 'var(--color-warning, #f59e0b)',
        'error': 'var(--color-error, #ef4444)',
        'info': 'var(--color-info, #3b82f6)',
      },
      
      /**
       * Typography mapping
       */
      fontFamily: {
        'body': 'var(--font-body)',
        'heading': 'var(--font-heading)',
        'mono': 'var(--font-mono)',
        // Keep serif/display as aliases for heading for migration
        'serif': 'var(--font-body)',
        'display': 'var(--font-heading)',
      },
      
      /**
       * Spacing extensions
       * Theme-specific spacing can be added via CSS custom properties
       */
      spacing: {
        '18': 'var(--spacing-18, 4.5rem)',
        '22': 'var(--spacing-22, 5.5rem)',
        '26': 'var(--spacing-26, 6.5rem)',
        '30': 'var(--spacing-30, 7.5rem)',
      },
      
      /**
       * Border radius mapping
       */
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'DEFAULT': 'var(--radius-md)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        // Keep gentle/soft as aliases for migration
        'soft': 'var(--radius-sm)',
        'gentle': 'var(--radius-md)',
      },
      
      /**
       * Box shadow mapping
       */
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-md)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      
      /**
       * Transition duration mapping
       */
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'DEFAULT': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
    },
  },
  
  /**
   * Dark mode strategy
   */
  darkMode: 'class',
  
  plugins: [],
}
