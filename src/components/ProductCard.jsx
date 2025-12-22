import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${category.id}/${product.id}`);
    };

    return (
        <motion.div
            className="group relative h-full bg-saas-surface rounded-xl overflow-hidden cursor-pointer border border-white/5 shadow-saas-card hover:shadow-saas-hover hover:border-secondary-accent/50 transition-all duration-500 hover:-translate-y-1"
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {/* Product Image Area */}
            <div className="relative h-64 bg-saas-bg/50 overflow-hidden p-6 flex items-center justify-center group-hover:bg-saas-bg/70 transition-colors">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-saas-surface via-transparent to-transparent" />

                {/* Capacity Badge */}
                {product.capacity && (
                    <div className="absolute top-3 left-3 z-20">
                        <span className="px-2.5 py-1 rounded bg-saas-border/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                            {product.capacity}
                        </span>
                    </div>
                )}

                <img
                    src={category.image}
                    alt={category.name}
                    className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-2xl"
                />

                {/* Hover Overlay Actions */}
                <div className="absolute inset-0 bg-saas-bg/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3">
                    <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-accent text-white text-sm font-bold shadow-saas-glow transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Specs <ArrowRight size={14} />
                    </span>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6 relative">
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-accent transition-colors leading-tight">
                            {product.name || category.name}
                        </h3>
                    </div>
                    <div className="h-0.5 w-12 bg-white/10 mt-2 group-hover:w-full group-hover:bg-gradient-glow transition-all duration-500" />
                </div>

                {/* Quick specs mini-table */}
                <div className="space-y-2 text-xs text-gray-400 bg-saas-bg/30 p-3 rounded-lg border border-white/5">
                    {product.outputVoltage && (
                        <div className="flex justify-between items-center border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                            <span className="font-medium text-gray-500 uppercase tracking-wide">Output</span>
                            <span className="text-gray-200 font-mono">{product.outputVoltage}</span>
                        </div>
                    )}
                    {product.voltage && (
                        <div className="flex justify-between items-center border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                            <span className="font-medium text-gray-500 uppercase tracking-wide">Voltage</span>
                            <span className="text-gray-200 font-mono">{product.voltage}</span>
                        </div>
                    )}
                    {product.type && (
                        <div className="flex justify-between items-center pb-0">
                            <span className="font-medium text-gray-500 uppercase tracking-wide">Type</span>
                            <span className="text-gray-200 font-medium">{product.type}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
