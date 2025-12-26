import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
                    ? 'bg-brand-dark border-brand-primary/50 shadow-neon'
                    : 'glass-card'
                }`}
            >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Popular Badge */}
                {isPopular && (
                    <div className="absolute top-0 right-0 rounded-bl-xl bg-gradient-glow text-white text-xs font-bold px-4 py-1.5 shadow-lg uppercase tracking-wide z-10">
                        Most Popular
                    </div>
                )}

                <div className="mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg border border-white/10
                        ${isPopular ? 'bg-white/10' : 'bg-surface-dark/50'}`}>
                        <Icon size={28} className={isPopular ? "text-brand-accent" : "text-brand-primary"} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-glow transition-all">
                        {title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-6">
                        {description}
                    </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow relative z-10">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-text-muted group-hover:text-text-primary transition-colors">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-brand-accent' : 'text-brand-primary'}`} />
                            <span className="mt-0.5">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Action */}
                <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                    <button className={`flex items-center gap-2 font-bold text-sm tracking-wide uppercase transition-all duration-300 group-hover:gap-3
                        ${isPopular ? 'text-brand-accent' : 'text-brand-primary'}`}>
                        Learn More <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
