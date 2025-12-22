import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('subscribed');
        setTimeout(() => setStatus(''), 3000);
        setEmail('');
    };

    return (
        <section className="py-20 bg-primary-blue relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-grid-pattern mix-blend-overlay" />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Stay updated with the latest in solar technology and power backup solutions.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange shadow-lg"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-accent-orange hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            Subscribe <Send size={20} />
                        </button>
                    </form>

                    {status === 'subscribed' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-green-300 font-medium"
                        >
                            ✓ Successfully subscribed!
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
