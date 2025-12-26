import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Battery, Shield, Award, Phone, Sun, Zap, Server } from 'lucide-react';
import SectionContainer from './ui/SectionContainer';
import Button from './ui/Button';
import { companyInfo } from '../data/timeline';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <SectionContainer id="home" fullHeight className="relative flex items-center justify-center overflow-hidden bg-brand-dark pt-20 px-4 min-h-[100dvh]">
            {/* Dynamic Backgrounds */}
            <div className="absolute inset-0 bg-gradient-hero opacity-80" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-brand-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Mesh Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <motion.div
                    style={{ y, opacity }}
                    className="space-y-8 text-center lg:text-left pt-10 lg:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:border-brand-primary/30 transition-colors cursor-default mx-auto lg:mx-0"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                        </span>
                        <span className="text-xs font-bold text-text-secondary tracking-wider uppercase font-display">Next-Gen Power Systems</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 font-display tracking-tight text-shadow-glow">
                            Uninterrupted <br />
                            <span className="text-gradient">
                                Excellence
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                            {companyInfo.tagline}. We engineer enterprise-grade power infrastructure ensuring 100% uptime for your critical operations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                    >
                        <Button
                            variant="primary"
                            className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl shadow-neon transition-all transform hover:-translate-y-1 font-bold tracking-wide"
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <button
                            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group"
                            onClick={() => window.location.href = `tel:${companyInfo.contact.phone.sales[0]}`}
                        >
                            <Phone className="w-5 h-5 text-brand-accent group-hover:rotate-12 transition-transform" />
                            Book Consultation
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="pt-10 border-t border-white/5 grid grid-cols-3 gap-8 text-center lg:text-left"
                    >
                        {[
                            { label: "Uptime", value: "99.99%" },
                            { label: "Clients", value: "2000+" },
                            { label: "Support", value: "24/7" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1 font-display">{stat.value}</h4>
                                <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Visual - Interactive Glass Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="relative hidden lg:block h-[600px] w-full perspective-1000"
                >
                    {/* Main floating interface */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-0 w-full max-w-md bg-surface-dark/40 border border-white/10 rounded-3xl p-8 shadow-glass backdrop-blur-xl z-20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent opacity-50" />

                        {/* Header */}
                        <div className="relative flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl shadow-lg ring-1 ring-white/20">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg font-display">System Status</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                                        <p className="text-xs text-brand-accent font-medium">Operational</p>
                                    </div>
                                </div>
                            </div>
                            <Server className="text-text-muted w-6 h-6" />
                        </div>

                        {/* Real-time Graph Visual */}
                        <div className="relative z-10 h-48 bg-black/20 rounded-xl border border-white/5 mb-6 overflow-hidden flex items-end px-2 pb-0 gap-1">
                            {/* Animated Bars */}
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95, 60, 80, 70].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                                    className="flex-1 bg-gradient-to-t from-brand-primary/20 to-brand-primary rounded-t-sm"
                                />
                            ))}
                        </div>

                        {/* Metrics Grid */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors group cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <Battery className="w-5 h-5 text-brand-secondary" />
                                    <span className="text-[10px] bg-brand-secondary/20 text-brand-secondary px-2 py-0.5 rounded-full">Backup</span>
                                </div>
                                <p className="text-2xl font-bold text-white group-hover:text-brand-secondary transition-colors font-display">4h 30m</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors group cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <Sun className="w-5 h-5 text-brand-accent" />
                                    <span className="text-[10px] bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded-full">Solar</span>
                                </div>
                                <p className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors font-display">8.2 kW</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
                </motion.div>

            </div>
        </SectionContainer>
    );
};

export default Hero;
