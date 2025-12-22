import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './ui/SectionContainer';
import ServiceCard from './ServiceCard';
import { HeadphonesIcon, CalendarClock, Settings, Phone } from 'lucide-react';
import { companyInfo } from '../data/timeline';

const Services = () => {
    return (
        <SectionContainer id="services" className="bg-saas-bg relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />

            <motion.div
                className="relative z-10 text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                    <span className="text-xs font-semibold text-primary-accent tracking-wider uppercase">Comprehensive Solutions</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
                    JETS <span className="text-transparent bg-clip-text bg-gradient-glow">Services</span>
                </h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                    Professional support for uninterrupted power performance, ensuring your business never stops.
                </p>
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard
                    icon={HeadphonesIcon}
                    title="On Call Support"
                    description="Immediate assistance for critical failures and technical issues."
                    features={[
                        "24/7 Helpline",
                        "Rapid Response Team",
                        "Remote Diagnostics"
                    ]}
                />
                <ServiceCard
                    icon={CalendarClock}
                    title="Annual Maintenance"
                    description="Comprehensive AMC packages to ensure long-term reliability."
                    features={[
                        "Preventive Checkups",
                        "Priority Service",
                        "Spare Parts Coverage"
                    ]}
                    isPopular
                />
                <ServiceCard
                    icon={Settings}
                    title="Installation Services"
                    description="Expert installation and commissioning of power systems."
                    features={[
                        "Site Assessment",
                        "Professional Setup",
                        "User Training"
                    ]}
                />
            </div>

            {/* CTA Banner */}
            <motion.div
                className="relative z-10 mt-16 p-8 rounded-2xl bg-saas-surface border border-white/10 text-center shadow-saas-glow overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-gradient-glow opacity-10" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Technical Assistance?</h3>
                    <p className="text-gray-400 mb-8 text-lg">
                        Our service engineers are ready to help you with any power-related issues.
                    </p>
                    <a
                        href={`tel:${companyInfo.contact.phone.service}`}
                        className="inline-flex items-center gap-2 px-8 py-3 btn-saas-primary text-white font-bold rounded-lg transition-all shadow-md hover:-translate-y-1"
                    >
                        <Phone size={20} />
                        Call Service Support
                    </a>
                </div>
            </motion.div>
        </SectionContainer>
    );
};

export default Services;
