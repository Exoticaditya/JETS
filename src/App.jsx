import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Services from './components/Services';
import ProductsShowcase from './components/ProductsShowcase';
import LoadCalculator from './components/LoadCalculator';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import VisionMission from './components/VisionMission';
import Testimonials from './components/Testimonials';
import InfoPage from './components/InfoPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const HomePage = () => {
    return (
        <>
            <Hero />
            <div id="about">
                <VisionMission />
                <Timeline />
            </div>
            <Services />
            <ProductsShowcase />
            <Testimonials />
            <LoadCalculator />
        </>
    );
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen relative overflow-hidden bg-saas-bg">
                <AnimatedBackground />

                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:categoryId/:productId" element={<ProductDetail />} />
                        <Route path="/privacy-policy" element={<InfoPage title="Privacy Policy" type="privacy" />} />
                        <Route path="/terms-of-service" element={<InfoPage title="Terms of Service" type="terms" />} />
                        <Route path="/e-waste" element={<InfoPage title="E-Waste Management" type="e-waste" />} />
                        <Route path="/dos-and-donts" element={<InfoPage title="DO's and DON'Ts" type="dos-donts" />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
