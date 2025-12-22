import React from 'react';

const SectionContainer = ({
    id,
    children,
    className = '',
    fullHeight = false
}) => {
    return (
        <section
            id={id}
            className={`relative py-20 px-4 md:px-8 lg:px-16 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default SectionContainer;
