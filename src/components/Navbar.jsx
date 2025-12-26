import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, ChevronRight, Zap } from 'lucide-react';

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
                    ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 shadow-glass'
                    : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('home')}
                            className="flex items-center gap-2 group relative"
                        >
                            <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg">
                                <Zap className="w-6 h-6 text-white fill-current" />
                            </div>
                            <div className="flex flex-col items-start relative z-10">
                                <span className="text-xl font-display font-bold text-white tracking-tight leading-none">
                                    JET<span className="text-brand-accent">POWER</span>
                                </span>
                                <span className="text-[0.6rem] text-text-muted uppercase tracking-[0.2em] leading-none mt-1">
                                    Future Energy
                                </span>
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
                                        : 'text-text-secondary hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-glow shadow-neon"
                                        />
                                    )}
                                </button>
                            ))}
                            <a
                                href="tel:+918287175272"
                                className="btn-primary flex items-center gap-2 text-sm uppercase tracking-wider group"
                            >
                                <PhoneCall size={16} className="group-hover:rotate-12 transition-transform" />
                                Get Quote
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-[60]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-8 h-8 text-brand-accent transform rotate-0 hover:rotate-90 transition-transform" />
                            ) : (
                                <Menu className="w-8 h-8" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay & Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-brand-dark/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-8 border-b border-white/5 bg-gradient-to-r from-brand-dark to-brand-dark/50">
                                <span className="text-2xl font-display font-bold text-white tracking-wide text-gradient">MENU</span>
                            </div>

                            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`group relative text-left text-lg font-medium transition-all py-4 px-6 rounded-xl border ${activeSection === link.id
                                            ? 'bg-white/5 text-brand-accent border-brand-accent/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]'
                                            : 'border-transparent text-text-secondary hover:text-white hover:bg-white/5'
                                            } font-display uppercase tracking-wide overflow-hidden`}
                                    >
                                        <div className="relative z-10 flex items-center justify-between">
                                            {link.label}
                                            {activeSection === link.id ? (
                                                <ChevronRight className="w-5 h-5 text-brand-accent" />
                                            ) : (
                                                <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            )}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            <div className="p-8 border-t border-white/5 bg-brand-dark relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-glow opacity-5" />
                                <a
                                    href="tel:+918287175272"
                                    className="relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-primary text-white font-bold shadow-neon active:scale-95 transition-all text-sm uppercase tracking-wider hover:bg-brand-secondary"
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
