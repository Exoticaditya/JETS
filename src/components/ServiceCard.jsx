import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const ServiceCard = ({ icon: Icon, title, description, features, isPopular, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <div className={`h-full p-8 rounded-2xl transition-all duration-300 border flex flex-col group hover:-translate-y-2 relative overflow-hidden
                ${isPopular
                    ? 'bg-saas-surface/80 border-secondary-accent/50 shadow-saas-glow'
                    : 'glass-panel hover:bg-saas-surface/50 border-white/5'
                }`}
            >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Popular Badge */}
                {isPopular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-glow text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide z-10">
                        Most Popular
                    </div>
                )}

                <div className="mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg border border-white/10
                        ${isPopular ? 'bg-saas-bg' : 'bg-saas-bg/50'}`}>
                        <Icon size={28} className={isPopular ? "text-secondary-accent" : "text-primary-accent"} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                        {description}
                    </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-secondary-accent' : 'text-primary-accent'}`} />
                            <span className="mt-0.5">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Action */}
                <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                    <button className={`flex items-center gap-2 font-bold text-sm tracking-wide uppercase transition-all duration-300 group-hover:gap-3
                        ${isPopular ? 'text-secondary-accent' : 'text-primary-accent'}`}>
                        Learn More <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
