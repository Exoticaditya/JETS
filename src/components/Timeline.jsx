import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    TrendingUp,
    Lightbulb,
    Sun,
    Cpu,
    Award,
    Zap,
    Building,
    Handshake,
    Smartphone,
    Leaf,
    Calendar
} from 'lucide-react';
import SectionContainer from './ui/SectionContainer';
import { timelineData, companyInfo } from '../data/timeline';

const iconMap = {
    rocket: Rocket,
    'trending-up': TrendingUp,
    lightbulb: Lightbulb,
    sun: Sun,
    cpu: Cpu,
    award: Award,
    zap: Zap,
    building: Building,
    handshake: Handshake,
    smartphone: Smartphone,
    leaf: Leaf
};

const Timeline = () => {
    return (
        <SectionContainer id="about" className="bg-brand-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl opacity-60" />
            </div>

            <motion.div
                className="text-center mb-16 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-wide">
                    Our Legacy
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
                    Our <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-xl text-text-secondary mt-6 max-w-2xl mx-auto">
                    Three decades of excellence in power solutions and innovation.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto z-10">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10 hidden md:block" />

                {timelineData.map((item, index) => {
                    const Icon = iconMap[item.icon] || Zap;
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center justify-between mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Content Side */}
                            <div className="w-full md:w-5/12 mb-8 md:mb-0">
                                <div className={`p-6 bg-surface-dark/60 rounded-2xl glass-card transition-all duration-300 border border-white/5 relative group hover:-translate-y-1`}>
                                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-brand-dark border-2 border-brand-primary rounded-full rotate-45 ${isEven ? '-left-2' : '-right-2'}`} />

                                    <div className="flex items-center gap-3 mb-3">
                                        <Calendar className="w-5 h-5 text-brand-secondary" />
                                        <span className="text-2xl font-bold text-white">{item.year}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-primary mb-2 font-display">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Icon */}
                            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-dark text-brand-primary shadow-neon z-10 border-4 border-surface-dark">
                                <Icon size={20} />
                            </div>

                            {/* Empty Side for alignment */}
                            <div className="hidden md:block w-5/12" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Core Values Section */}
            <motion.div
                className="mt-20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-bold text-white mb-8 font-display text-shadow-glow">Our Core Values</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {companyInfo.values && companyInfo.values.map((value, index) => (
                        <motion.span
                            key={index}
                            className="px-6 py-2 rounded-full bg-surface-dark shadow-glass border border-white/5 text-gray-300 font-medium hover:bg-brand-primary hover:text-white hover:shadow-neon transition-all cursor-default"
                            whileHover={{ scale: 1.05 }}
                        >
                            {value}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
};

export default Timeline;
