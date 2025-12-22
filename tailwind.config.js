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
                // SaaS Backgrounds
                'saas-bg': '#020617', // Deepest Navy/Black
                'saas-surface': '#0f172a', // Slate 900
                'saas-border': '#1e293b', // Slate 800

                // Enterprise Brand Colors
                'primary-blue': '#020617',
                'primary-accent': '#0ea5e9', // Sky 500
                'secondary-accent': '#6366f1', // Indigo 500

                // Data specific
                'success': '#10b981',
                'warning': '#f59e0b',
                'error': '#ef4444',
            },
            backgroundImage: {
                'gradient-saas': 'linear-gradient(to bottom right, #020617, #0f172a)',
                'gradient-glow': 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
                'gradient-blue': 'linear-gradient(180deg, rgba(2, 6, 23, 0) 0%, rgba(2, 6, 23, 0.9) 100%)',
                'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%230ea5e9' stroke-width='0.5' stroke-opacity='0.1' fill='none'/%3E%3C/svg%3E\")",
            },
            boxShadow: {
                'saas-card': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'saas-glow': '0 0 20px rgba(14, 165, 233, 0.2)',
                'saas-hover': '0 0 0 1px rgba(14, 165, 233, 0.4), 0 10px 15px -3px rgba(0, 0, 0, 0.3)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                'slide-in': 'slideIn 0.3s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
