import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
    children,
    className = '',
    hover = true,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5 } : {}}
            className={`saas-card ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
