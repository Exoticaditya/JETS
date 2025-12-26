import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionContainer from './ui/SectionContainer';
import ContactForm from './ContactForm';
import Newsletter from './Newsletter';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactInfo = [
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 123 456 7890',
            link: 'tel:+911234567890'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@jetpower.co.in',
            link: 'mailto:info@jetpower.co.in'
        },
        {
            icon: MapPin,
            label: 'Address',
            value: 'Industrial Area, New Delhi, India',
            link: null
        }
    ];

    const socialLinks = [
        { icon: Facebook, label: 'Facebook', link: '#' },
        { icon: Twitter, label: 'Twitter', link: '#' },
        { icon: Linkedin, label: 'LinkedIn', link: '#' },
        { icon: Instagram, label: 'Instagram', link: '#' },
        { icon: Youtube, label: 'YouTube', link: '#' }
    ];

    const quickLinks = [
        { label: 'Home', link: '#home' },
        { label: 'About Us', link: '#about' },
        { label: 'Products', link: '#products' },
        { label: 'Calculator', link: '#calculator' },
        { label: 'E-Waste Management', link: '/e-waste' },
        { label: "Do's & Don'ts", link: '/dos-and-donts' },
        { label: 'Contact', link: '#contact' }
    ];

    return (
        <>
            {/* Newsletter Section */}
            <Newsletter />

            {/* Contact Section */}
            <SectionContainer id="contact" className="bg-surface-dark border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

                <motion.div
                    className="relative z-10 text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Have questions? We're here to help you find the perfect power solution.
                    </p>
                </motion.div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="glass-panel p-6 rounded-2xl hover:bg-surface-dark/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <info.icon className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">
                                                {info.label}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-text-muted hover:text-brand-primary transition-colors animated-link font-medium"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-text-muted">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="bg-surface-dark/50 border border-white/5 shadow-glass rounded-2xl p-6 backdrop-blur-md">
                                <h4 className="text-lg font-semibold text-white mb-4">
                                    Follow Us
                                </h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-text-muted hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </SectionContainer>

            {/* Footer */}
            <footer className="relative bg-brand-dark text-text-muted border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="w-8 h-8 text-brand-secondary" fill="currentColor" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">JetPower</h3>
                                    <p className="text-xs text-brand-primary uppercase tracking-widest">Future Energy</p>
                                </div>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed mb-6">
                                Empowering India since 1995 with advanced, reliable, and sustainable power solutions.
                            </p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">ISO 9001:2000 Certified</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white border-b border-brand-primary/30 pb-2 inline-block">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        {link.link.startsWith('/') ? (
                                            <Link
                                                to={link.link}
                                                className="text-text-muted hover:text-brand-primary transition-colors text-sm flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 bg-brand-primary/50 rounded-full"></span>
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.link}
                                                className="text-text-muted hover:text-brand-primary transition-colors text-sm flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 bg-brand-primary/50 rounded-full"></span>
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white border-b border-brand-primary/30 pb-2 inline-block">Our Products</h4>
                            <ul className="space-y-3 text-sm text-text-muted">
                                <li className="hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-2"><span className="text-brand-secondary">›</span> Inverters & UPS</li>
                                <li className="hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-2"><span className="text-brand-secondary">›</span> Batteries</li>
                                <li className="hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-2"><span className="text-brand-secondary">›</span> Solar Systems</li>
                                <li className="hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-2"><span className="text-brand-secondary">›</span> Servo Stabilizers</li>
                                <li className="hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-2"><span className="text-brand-secondary">›</span> Electrical Panels</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-muted text-sm">
                            © {currentYear} JetPower - Jupiter Electronics & Telecom Systems. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link to="/privacy-policy" className="text-text-muted hover:text-brand-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-service" className="text-text-muted hover:text-brand-primary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
