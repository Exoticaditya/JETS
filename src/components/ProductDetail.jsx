import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Phone, Mail } from 'lucide-react';
import { productCategories } from '../data/products';
import Button from './ui/Button';

const ProductDetail = () => {
    const { categoryId, productId } = useParams();
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the category and product
    // Note: In real app, you might want to handle cases where productId is unique enough without categoryId
    // But assuming the route is /product/:productId, we need to search all categories
    let category = null;
    let product = null;

    if (productId) {
        for (const cat of productCategories) {
            const found = cat.products?.find(prod => prod.id === productId);
            if (found) {
                category = cat;
                product = found;
                break;
            }
        }
    }

    if (!category || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-gray-800">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Button onClick={() => navigate('/')}>
                        Back to Home
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-saas-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/#products')}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-accent transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-8 bg-saas-surface rounded-2xl border border-white/5 shadow-saas-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/5 to-transparent pointer-events-none" />
                        <div className="relative h-96 flex items-center justify-center">
                            <img
                                src={category.image}
                                alt={product.name}
                                className="w-full h-full object-contain p-4 drop-shadow-2xl z-10"
                            />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Category Badge */}
                        <div className="inline-block px-4 py-2 bg-saas-surface border border-white/10 text-primary-accent rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                            {category.name}
                        </div>

                        {/* Product Name */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
                            {product.name}
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                            {category.description}
                        </p>

                        {/* Capacity/Main Spec */}
                        {product.capacity && (
                            <div className="py-6 border-y border-white/5 bg-saas-surface/30 px-6 rounded-xl backdrop-blur-sm">
                                <p className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">Capacity</p>
                                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-glow font-display">
                                    {product.capacity}
                                </p>
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                variant="primary"
                                className="px-8 py-4 text-lg flex items-center justify-center gap-2 shadow-saas-glow"
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        navigate('/#contact');
                                    }
                                }}
                            >
                                <ShoppingCart size={20} />
                                Request Quote
                            </Button>
                            <Button
                                variant="outline"
                                className="px-8 py-4 text-lg flex items-center justify-center gap-2"
                                onClick={() => navigate('/#contact')}
                            >
                                <Phone size={20} />
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Specifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 font-display">
                        <span className="w-2 h-8 bg-gradient-glow rounded-full" />
                        Technical Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(product).map(([key, value]) => {
                            if (['id', 'name', 'capacity', 'features'].includes(key)) return null;
                            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                            return (
                                <div key={key} className="p-6 bg-saas-surface rounded-xl shadow-md border border-white/5 hover:border-primary-accent/30 transition-all hover:-translate-y-1">
                                    <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">{label}</p>
                                    <p className="text-xl font-semibold text-gray-200">{value}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Features Section */}
                {product.features && product.features.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-20"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 font-display">
                            <span className="w-2 h-8 bg-secondary-accent rounded-full" />
                            Key Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + idx * 0.1 }}
                                    className="p-5 bg-saas-surface rounded-xl border border-white/5 flex items-start gap-3 hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary-accent/20 text-primary-accent flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-primary-accent/30">
                                        <span className="text-xs font-bold">✓</span>
                                    </div>
                                    <p className="text-gray-300 font-medium">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Related Products */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4 font-display">
                        More from {category.name}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {category.products
                            .filter(p => p.id !== productId)
                            .slice(0, 3)
                            .map((relatedProduct) => (
                                <motion.div
                                    key={relatedProduct.id}
                                    whileHover={{ y: -5 }}
                                    className="bg-saas-surface rounded-xl shadow-saas-card overflow-hidden border border-white/5 cursor-pointer group hover:border-primary-accent/30 transition-all"
                                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                                >
                                    <div className="h-48 flex items-center justify-center bg-saas-bg/50 p-4 border-b border-white/5 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                                        <img
                                            src={category.image}
                                            alt={relatedProduct.name}
                                            className="w-full h-full object-contain p-4 z-10"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-accent transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        {relatedProduct.capacity && (
                                            <p className="text-secondary-accent font-bold text-lg">
                                                {relatedProduct.capacity}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-20 p-12 bg-saas-surface rounded-3xl text-center shadow-saas-glow border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-glow opacity-10 pointer-events-none" />

                    <h3 className="text-3xl font-bold mb-4 text-white relative z-10 font-display">Interested in this product?</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg relative z-10">
                        Contact our sales team for pricing, availability, and customization options.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Button
                            variant="primary"
                            className="px-8 py-3 flex items-center gap-2 shadow-lg"
                            onClick={() => navigate('/#contact')}
                        >
                            <Mail size={20} />
                            Get a Quote
                        </Button>
                        <Button
                            variant="outline"
                            className="px-8 py-3 border-gray-600 hover:border-white text-white"
                            onClick={() => navigate('/#calculator')}
                        >
                            Use Load Calculator
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;
