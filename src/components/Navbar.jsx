import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Vision & Mission' },
        { id: 'products', label: 'Products' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-saas-bg/80 backdrop-blur-xl shadow-lg border-b border-white/5'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('home')}
                            className="flex items-center gap-3 p-2 group"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="/assets/logo1.png"
                                    alt="JetPower"
                                    className="h-8 md:h-10 brightness-0 invert relative z-10"
                                />
                            </div>
                        </motion.button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`relative text-sm font-semibold tracking-wide transition-colors font-display uppercase ${activeSection === link.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-glow shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                                        />
                                    )}
                                </button>
                            ))}
                            <a
                                href="tel:+918287175272"
                                className="px-6 py-2.5 rounded-lg btn-saas-primary text-white font-bold shadow-lg flex items-center gap-2 text-sm uppercase tracking-wider group"
                            >
                                <PhoneCall size={16} className="group-hover:rotate-12 transition-transform" />
                                Get Quote
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors z-[60]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay & Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-saas-surface border-l border-white/10 z-50 md:hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-saas-bg/50">
                                <span className="text-xl font-display font-bold text-white tracking-wide">MENU</span>
                                {/* Close button is handled by the toggle in navbar z-Index, but usually good to have one inside in case navbar is covered. 
                                    However, since navbar is z-50 and drawer is z-50, let's keep the standard toggle. 
                                */}
                            </div>

                            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`text-left text-lg font-medium transition-all py-3 px-4 rounded-xl border border-transparent ${activeSection === link.id
                                            ? 'bg-white/5 text-primary-accent border-white/5 shadow-inner'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            } font-display uppercase tracking-wide`}
                                    >
                                        <div className="flex items-center justify-between">
                                            {link.label}
                                            {activeSection === link.id && <div className="w-1.5 h-1.5 rounded-full bg-primary-accent" />}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            <div className="p-6 border-t border-white/5 bg-saas-bg/50">
                                <a
                                    href="tel:+918287175272"
                                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl btn-saas-primary text-white font-bold shadow-saas-glow active:scale-95 transition-all text-sm uppercase tracking-wider"
                                >
                                    <PhoneCall size={18} />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
