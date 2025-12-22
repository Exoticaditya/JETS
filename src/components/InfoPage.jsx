import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './ui/SectionContainer';
import { ShieldAlert, FileText, Scale, Recycle, ListChecks } from 'lucide-react';

const getIcon = (type) => {
    switch (type) {
        case 'privacy': return <ShieldAlert className="w-8 h-8 text-primary-accent" />;
        case 'terms': return <Scale className="w-8 h-8 text-primary-accent" />;
        case 'e-waste': return <Recycle className="w-8 h-8 text-green-400" />;
        case 'dos-donts': return <ListChecks className="w-8 h-8 text-secondary-accent" />;
        default: return <FileText className="w-8 h-8 text-primary-accent" />;
    }
};

const InfoPage = ({ title, type }) => {
    return (
        <SectionContainer className="min-h-[70vh] pt-32 bg-saas-bg relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto relative z-10"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-saas-surface border border-white/5 shadow-saas-card rounded-2xl backdrop-blur-sm">
                        {getIcon(type)}
                    </div>
                    <h1 className="text-4xl font-bold text-white font-display">{title}</h1>
                </div>

                <div className="bg-saas-surface rounded-2xl border border-white/5 shadow-saas-card p-8 md:p-12 backdrop-blur-sm">
                    <InfoPageContent type={type} />
                </div>
            </motion.div>
        </SectionContainer>
    );
};

const InfoPageContent = ({ type }) => {
    switch (type) {
        case 'privacy':
            return (
                <div className="space-y-6 text-gray-400">
                    <p>At JetPower (Jupiter Electronics and Telecom Systems), we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
                    <h3 className="text-xl font-bold text-white font-display">Information Collection</h3>
                    <p>We collect basic information such as name, email, and phone number only when you voluntarily provide it through our contact forms or service requests.</p>
                    <h3 className="text-xl font-bold text-white font-display">Use of Information</h3>
                    <p>Your information is used solely for providing services, responding to inquiries, and sending relevant updates about our power solutions.</p>
                    <h3 className="text-xl font-bold text-white font-display">Data Protection</h3>
                    <p>We implement appropriate security measures to protect your personal data against unauthorized access or alteration.</p>
                </div>
            );
        case 'terms':
            return (
                <div className="space-y-6 text-gray-400">
                    <p>Welcome to JetPower. By using our website and services, you agree to the following terms and conditions.</p>
                    <h3 className="text-xl font-bold text-white font-display">Services</h3>
                    <p>We provide power backup solutions, installation, and maintenance services. All product specifications are subject to change without notice for improvement.</p>
                    <h3 className="text-xl font-bold text-white font-display">Warranty</h3>
                    <p>Product warranties are provided by respective manufacturers (e.g., Amara Raja, Exide). Service warranties are covered by JetPower as per the AMC agreement.</p>
                </div>
            );
        case 'e-waste':
            return (
                <div className="space-y-6 text-gray-400">
                    <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/20 mb-6">
                        <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center gap-2 font-display">
                            <Recycle className="w-6 h-6" /> Commitment to Environment
                        </h3>
                        <p className="text-green-300">JetPower is committed to responsible e-waste management and battery recycling.</p>
                    </div>
                    <p>We encourage customers to return old batteries and electronic equipment for proper recycling. Do not dispose of batteries in regular trash.</p>
                    <h3 className="text-xl font-bold text-white font-display">Battery Take-Back Program</h3>
                    <p>We offer buy-back options for old batteries when you purchase new ones. This ensures hazardous materials are handled safely and recycled.</p>
                </div>
            );
        case 'dos-donts':
            return (
                <div className="space-y-6 text-gray-400">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/20">
                            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2 font-display">
                                <ListChecks className="w-6 h-6" /> DO's
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Keep batteries in a cool, dry, and well-ventilated area.</li>
                                <li>Check electrolyte levels of tubular batteries regularly.</li>
                                <li>Keep terminals clean and apply petroleum jelly.</li>
                                <li>Use rated fuses and proper wiring.</li>
                            </ul>
                        </div>
                        <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/20">
                            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2 font-display">
                                <ShieldAlert className="w-6 h-6" /> DON'Ts
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Do not expose batteries to direct sunlight or heat.</li>
                                <li>Do not mix old and new batteries.</li>
                                <li>Do not overfill battery water.</li>
                                <li>Do not short circuit battery terminals.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        default:
            return <p>Content coming soon.</p>;
    }
};

export default InfoPage;
