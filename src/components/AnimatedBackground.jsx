import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
            {/* Light corporate gradient orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full opacity-40 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(219, 234, 254, 0.8) 0%, transparent 70%)', // blue-100
                    top: '20%',
                    left: '15%',
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 237, 213, 0.8) 0%, transparent 70%)', // orange-100
                    bottom: '20%',
                    right: '15%',
                }}
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(224, 242, 254, 0.8) 0%, transparent 70%)', // sky-100
                    top: '50%',
                    right: '30%',
                }}
                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
            />
        </div>
    );
};

export default AnimatedBackground;
