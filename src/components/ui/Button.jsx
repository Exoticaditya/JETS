import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    ...props
}) => {
    const variants = {
        primary: 'btn-saas btn-saas-primary',
        outline: 'btn-saas btn-saas-outline',
        ghost: 'text-primary-accent hover:bg-white/5 transition-all duration-300 px-6 py-3 rounded-lg font-semibold'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${variants[variant]} ${className} cursor-pointer group`}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center">{children}</span>
        </motion.button>
    );
};

export default Button;
