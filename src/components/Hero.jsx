import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Battery, Shield, Award, Phone, Sun, Zap } from 'lucide-react';
import SectionContainer from './ui/SectionContainer';
import Button from './ui/Button';
import { companyInfo } from '../data/timeline';

const Hero = () => {
    return (
        <SectionContainer id="home" fullHeight className="relative flex items-center justify-center overflow-hidden bg-saas-bg pt-20 px-4">
            {/* Absolute Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-accent/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Cyber Grid Floor Effect (Optional, for 3D depth) */}
            <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-saas-bg to-transparent z-10" />

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 text-left md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:border-primary-accent/30 transition-colors cursor-default"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent"></span>
                        </span>
                        <span className="text-xs font-bold text-gray-200 tracking-wider uppercase font-display">New Generation Power</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 font-display tracking-tight">
                            Powering <br />
                            <span className="text-gradient-tech bg-[length:200%_auto] animate-gradient-x">
                                Tomorrow
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                            {companyInfo.tagline}. Enterprise-grade power infrastructure designed for mission-critical reliability and zero downtime.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Button
                            variant="primary"
                            className="bg-primary-accent hover:bg-primary-accent/90 text-white px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-1 font-bold tracking-wide"
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <button
                            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                            onClick={() => window.location.href = `tel:${companyInfo.contact.phone.sales[0]}`}
                        >
                            <Phone className="w-5 h-5" />
                            Book Consultation
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="pt-10 border-t border-white/5 grid grid-cols-3 gap-8"
                    >
                        {[
                            { label: "Uptime", value: "99.99%" },
                            { label: "Clients", value: "2000+" },
                            { label: "Support", value: "24/7" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <h4 className="text-3xl font-bold text-white mb-1 font-display">{stat.value}</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Visual - Interactive 3D Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="relative hidden lg:block h-[700px] w-full perspective-1000"
                >
                    {/* Main floating interface */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-0 w-[450px] bg-saas-surface/80 border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-br from-primary-accent to-blue-600 rounded-xl shadow-lg">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg font-display">System Status</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                        <p className="text-xs text-green-400 font-medium">Operational</p>
                                    </div>
                                </div>
                            </div>
                            <Award className="text-gray-600 w-6 h-6" />
                        </div>

                        {/* Real-time Graph Visual */}
                        <div className="relative h-48 bg-saas-bg/50 rounded-xl border border-white/5 mb-6 overflow-hidden flex items-end px-2 pb-0 gap-1">
                            {/* Animated Bars */}
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                                    className="flex-1 bg-gradient-to-t from-primary-accent/20 to-primary-accent/80 rounded-t-sm"
                                />
                            ))}

                            {/* Overlay Line */}
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary-accent/10 to-transparent pointer-events-none" />
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-saas-bg/50 p-4 rounded-xl border border-white/5 hover:border-primary-accent/30 transition-colors group">
                                <div className="flex justify-between items-start mb-2">
                                    <Battery className="w-5 h-5 text-secondary-accent" />
                                    <span className="text-[10px] bg-secondary-accent/20 text-secondary-accent px-2 py-0.5 rounded-full">Backup</span>
                                </div>
                                <p className="text-2xl font-bold text-white group-hover:text-secondary-accent transition-colors font-display">4h 30m</p>
                            </div>
                            <div className="bg-saas-bg/50 p-4 rounded-xl border border-white/5 hover:border-primary-accent/30 transition-colors group">
                                <div className="flex justify-between items-start mb-2">
                                    <Sun className="w-5 h-5 text-warning" />
                                    <span className="text-[10px] bg-warning/20 text-warning px-2 py-0.5 rounded-full">Solar</span>
                                </div>
                                <p className="text-2xl font-bold text-white group-hover:text-warning transition-colors font-display">8.2 kW</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 right-[-50px] w-[500px] h-[500px] rounded-full border border-white/5 border-dashed z-0 opacity-20"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 right-[-50px] w-[350px] h-[350px] rounded-full border border-primary-accent/10 z-0 opacity-30"
                    />
                </motion.div>

            </div>
        </SectionContainer>
    );
};

export default Hero;
