import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(phone.replace(/[-\s]/g, ''));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation
        let newErrors = { ...errors };

        if (name === 'email' && value) {
            if (validateEmail(value)) {
                delete newErrors.email;
            } else {
                newErrors.email = 'Invalid email format';
            }
        }

        if (name === 'phone' && value) {
            if (validatePhone(value)) {
                delete newErrors.phone;
            } else {
                newErrors.phone = 'Invalid phone number';
            }
        }

        if (name === 'name' && value) {
            delete newErrors.name;
        }

        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
        if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
        if (!formData.message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    const getBorderColor = (fieldName) => {
        if (errors[fieldName]) return 'border-red-500';
        if (formData[fieldName] && !errors[fieldName]) return 'border-green-500';
        return 'border-gray-200';
    };

    return (
        <GlassCard className="bg-saas-surface border-white/5 shadow-saas-card">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 font-display">
                <Mail className="w-6 h-6 text-primary-accent" />
                Send Us a Message
            </h3>

            {submitStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-300">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label className="block text-gray-400 mb-2 font-medium">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-saas-bg border ${getBorderColor('name')} rounded-lg focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-colors duration-300 text-white placeholder-gray-600 border-white/10`}
                        placeholder="Your full name"
                    />
                    {errors.name && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                        </motion.p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-gray-400 mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-saas-bg border ${getBorderColor('email')} rounded-lg focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-colors duration-300 text-white placeholder-gray-600 border-white/10`}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                        </motion.p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-gray-400 mb-2 font-medium">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-saas-bg border ${getBorderColor('phone')} rounded-lg focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-colors duration-300 text-white placeholder-gray-600 border-white/10`}
                        placeholder="1234567890"
                    />
                    {errors.phone && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                        </motion.p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label className="block text-gray-400 mb-2 font-medium">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 bg-saas-bg border ${getBorderColor('message')} rounded-lg focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-colors duration-300 resize-none text-white placeholder-gray-600 border-white/10`}
                        placeholder="Tell us about your power requirements..."
                    />
                    {errors.message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-1 text-sm text-red-400 flex items-center gap-1"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                        </motion.p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-lg shadow-lg"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Send Message <Send className="w-5 h-5" />
                        </span>
                    )}
                </Button>
            </form>
        </GlassCard>
    );
};

export default ContactForm;
