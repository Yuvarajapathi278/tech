import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Space Grotesk', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FFB6C1', // Pastel Pink
					foreground: '#4A4A4A',
				},
				secondary: {
					DEFAULT: '#B5EAD7', // Pastel Mint
					foreground: '#4A4A4A',
				},
				destructive: {
					DEFAULT: '#FF9AA2', // Pastel Red
					foreground: '#4A4A4A',
				},
				muted: {
					DEFAULT: '#C7CEEA', // Pastel Blue
					foreground: '#4A4A4A',
				},
				accent: {
					DEFAULT: '#E2F0CB', // Pastel Green
					foreground: '#4A4A4A',
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#4A4A4A',
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#4A4A4A',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;