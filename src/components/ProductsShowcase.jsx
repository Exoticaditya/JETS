import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './ui/SectionContainer';
import ProductCard from './ProductCard';
import { productCategories, clientLogos } from '../data/products';

// Partner Logos Imports
import emerson from '../assets/parteners/emersion.jpg';
import ericsson from '../assets/parteners/ericsson.jpg';
import ibm from '../assets/parteners/ibm.jpg';
import idea from '../assets/parteners/idea.jpg';
import mge from '../assets/parteners/mge.jpg';
import nokia from '../assets/parteners/nokia.jpg';

const ProductsShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Mapped categories to match original site structure
    const displayCategories = [
        { id: 'all', name: 'All Products' },
        { id: 'ups', name: 'Online UPS' },
        { id: 'batteries', name: 'Batteries' },
        { id: 'inverters', name: 'Inverters' },
        { id: 'solar', name: 'Solar Energy' },
        { id: 'stabilizers', name: 'Servo Stabilizers' },
        { id: 'panels', name: 'Electrical Panels' }
    ];

    const partnerLogos = [
        { name: 'Emerson', image: emerson },
        { name: 'Ericsson', image: ericsson },
        { name: 'IBM', image: ibm },
        { name: 'Idea', image: idea },
        { name: 'MGE', image: mge },
        { name: 'Nokia', image: nokia }
    ];

    const filteredCategories = selectedCategory === 'all'
        ? productCategories
        : productCategories.filter(cat => cat.id === selectedCategory);

    return (
        <SectionContainer id="products" className="bg-brand-dark relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-primary-accent/5 to-transparent opacity-50" />

            {/* Section Header */}
            <motion.div
                className="text-center mb-16 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary-accent/30 bg-primary-accent/10 text-primary-accent text-sm font-bold uppercase tracking-wide">
                    Our Catalog
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
                    Product <span className="text-transparent bg-clip-text bg-gradient-glow">Portfolio</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Advanced power solutions engineered for reliability and efficiency.
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                className="flex flex-wrap justify-center gap-3 mb-12 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {displayCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold border backdrop-blur-sm ${selectedCategory === category.id
                            ? 'bg-gradient-glow text-white border-transparent shadow-neon'
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary-accent hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </motion.div>

            {/* Products Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                layout
            >
                {filteredCategories.map((category, catIndex) => (
                    category.products && category.products.length > 0 ? (
                        category.products.map((product, prodIndex) => (
                            <motion.div
                                key={`${category.id}-${product.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: (catIndex * category.products.length + prodIndex) * 0.05
                                }}
                                layout
                            >
                                <ProductCard product={product} category={category} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                            layout
                        >
                            <ProductCard
                                product={{ name: category.name, description: category.description }}
                                category={category}
                            />
                        </motion.div>
                    )
                ))}
            </motion.div>

            {/* Client Logos Marquee Section */}
            <motion.div
                className="mt-32 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-center mb-12 text-white font-display">
                    Trusted By Industry Leaders
                </h3>

                {/* Marquee Container */}
                <div className="relative overflow-hidden py-8 bg-surface-dark border border-white/5 shadow-glass rounded-2xl mx-4">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />



                    {/* Marquee Track */}
                    <div className="flex">
                        {/* First set of logos */}
                        <div className="flex animate-marquee items-center gap-16">
                            {partnerLogos.map((client, index) => (
                                <div
                                    key={`logo-1-${index}`}
                                    className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white rounded-lg border border-white/10 p-4 group hover:scale-110 transition-transform duration-300 shadow-lg"
                                >
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Duplicate set - Ensure seamless loop */}
                        <div className="flex animate-marquee items-center gap-16" aria-hidden="true">
                            {partnerLogos.map((client, index) => (
                                <div
                                    key={`logo-2-${index}`}
                                    className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white rounded-lg border border-white/10 p-4 group hover:scale-110 transition-transform duration-300 shadow-lg"
                                >
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionContainer>
    );
};

export default ProductsShowcase;
