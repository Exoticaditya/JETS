import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './ui/SectionContainer';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Facility Manager, IT Park",
        text: "JETS has been maintaining our 200KVA UPS systems for 5 years. Their response time during emergencies is unmatched in Delhi NCR.",
        initial: "R"
    },
    {
        name: "Amit Singh",
        role: "Director, TechSolutions",
        text: "The solar installation at our factory has cut our electricity bills by 40%. Highly professional team and seamless execution.",
        initial: "A"
    },
    {
        name: "Priya Sharma",
        role: "Homeowner",
        text: "Bought a Luminous inverter setup for my home. The guidance provided for load calculation was perfect. Very happy with the backup time.",
        initial: "P"
    }
];

const Testimonials = () => {
    return (
        <SectionContainer className="bg-brand-dark relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <motion.div
                className="text-center mb-16 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-bold uppercase tracking-wide">
                    Testimonials
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
                    What Our <span className="text-gradient">Clients Say</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-glow mx-auto rounded-full shadow-neon" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-surface-dark/50 backdrop-blur-md p-8 rounded-2xl shadow-glass relative hover:-translate-y-2 transition-all duration-300 border border-white/5 group hover:border-brand-primary/40 hover:shadow-neon"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-brand-primary/20 transition-colors duration-300" />

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-[2px] shadow-lg group-hover:shadow-neon transition-shadow">
                                <div className="w-full h-full rounded-full bg-surface-dark flex items-center justify-center text-white font-bold text-xl">
                                    {item.initial}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg group-hover:text-brand-primary transition-colors">{item.name}</h4>
                                <p className="text-sm text-text-muted">{item.role}</p>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors">
                            "{item.text}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Testimonials;
