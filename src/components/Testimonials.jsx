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
        <SectionContainer className="bg-saas-surface relative border-t border-white/5">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-secondary-accent/30 bg-secondary-accent/10 text-secondary-accent text-sm font-bold uppercase tracking-wide">
                    Testimonials
                </div>
                <h2 className="text-4xl font-bold mb-4 text-white font-display">What Clients Say</h2>
                <div className="w-24 h-1 bg-gradient-glow mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-saas-bg p-8 rounded-2xl shadow-saas-card relative hover:-translate-y-2 transition-all duration-300 border border-white/5 group hover:border-primary-accent/30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-primary-accent/20 transition-colors" />

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                {item.initial}
                            </div>
                            <div>
                                <h4 className="font-bold text-white group-hover:text-primary-accent transition-colors">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                            "{item.text}"
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Testimonials;
