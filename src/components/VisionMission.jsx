import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './ui/SectionContainer';
import { Target, Eye } from 'lucide-react';
import { companyInfo } from '../data/timeline';

const VisionMission = () => {
    return (
        <SectionContainer className="bg-brand-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-surface-dark border border-white/5 shadow-glass flex items-center justify-center text-primary-accent">
                            <Eye size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-display">Our Vision</h2>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed bg-surface-dark p-8 rounded-2xl shadow-glass border-l-4 border-primary-accent backdrop-blur-sm">
                        "{companyInfo.vision}"
                    </p>
                </motion.div>

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-surface-dark border border-white/5 shadow-glass flex items-center justify-center text-secondary-accent">
                            <Target size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-display">Our Mission</h2>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed bg-surface-dark p-8 rounded-2xl shadow-glass border-l-4 border-secondary-accent backdrop-blur-sm">
                        "{companyInfo.mission}"
                    </p>
                </motion.div>
            </div>

            {/* Core Values Strip */}
            <motion.div
                className="mt-16 pt-12 border-t border-white/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { label: "Clean", color: "text-green-400" },
                        { label: "Safe", color: "text-blue-400" },
                        { label: "Renewable", color: "text-amber-400" },
                        { label: "Reliable", color: "text-primary-accent" }
                    ].map((val, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-surface-dark border border-white/5 shadow-glass hover:shadow-neon transition-all hover:-translate-y-1">
                            <h4 className={`text-xl font-bold ${val.color} font-display`}>{val.label}</h4>
                            <p className="text-sm text-gray-500 mt-1">Energy Solutions</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
};

export default VisionMission;
