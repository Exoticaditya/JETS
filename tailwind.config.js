/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                // Premium Brand Colors
                'brand-dark': '#0f172a', // Slate 900
                'brand-primary': '#3b82f6', // Blue 500
                'brand-secondary': '#8b5cf6', // Violet 500
                'brand-accent': '#06b6d4', // Cyan 500

                // Functional
                'surface-dark': '#1e293b', // Slate 800
                'surface-light': '#ffffff',

                // Text
                'text-primary': '#f1f5f9', // Slate 100
                'text-secondary': '#cbd5e1', // Slate 300
                'text-muted': '#94a3b8', // Slate 400
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
                'gradient-card': 'linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.4) 100%)',
                'gradient-glow': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'neon': '0 0 5px rgba(59, 130, 246, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)', // Toned down
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
