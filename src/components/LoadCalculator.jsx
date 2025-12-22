import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, Battery, Clock } from 'lucide-react';
import SectionContainer from './ui/SectionContainer';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import {
    calculateTotalWattage,
    recommendInverter,
    recommendBattery,
    estimateBackupTime,
    applianceWattages
} from '../utils/calculatorLogic';

const LoadCalculator = () => {
    const [appliances, setAppliances] = useState({
        fan: 0,
        cflLight: 0,
        ledLight: 0,
        tubeLight: 0,
        tv: 0,
        refrigerator: 0,
        ac1Ton: 0,
        ac1_5Ton: 0,
        washingMachine: 0,
        waterPump: 0,
        computer: 0,
        laptop: 0,
    });

    const [totalWattage, setTotalWattage] = useState(0);
    const [recommendedInverter, setRecommendedInverter] = useState(null);
    const [recommendedBattery, setRecommendedBattery] = useState(null);
    const [backupTime, setBackupTime] = useState(0);

    useEffect(() => {
        const total = calculateTotalWattage(appliances);
        setTotalWattage(total);

        if (total > 0) {
            setRecommendedInverter(recommendInverter(total));
            const battery = recommendBattery(total, 4);
            setRecommendedBattery(battery);

            // Extract Ah from battery capacity (e.g., "150Ah" -> 150)
            const batteryAh = parseInt(battery.capacity);
            setBackupTime(estimateBackupTime(batteryAh, total));
        } else {
            setRecommendedInverter(null);
            setRecommendedBattery(null);
            setBackupTime(0);
        }
    }, [appliances]);

    const handleApplianceChange = (appliance, value) => {
        setAppliances(prev => ({
            ...prev,
            [appliance]: parseInt(value) || 0
        }));
    };

    const resetCalculator = () => {
        setAppliances({
            fan: 0,
            cflLight: 0,
            ledLight: 0,
            tubeLight: 0,
            tv: 0,
            refrigerator: 0,
            ac1Ton: 0,
            ac1_5Ton: 0,
            washingMachine: 0,
            waterPump: 0,
            computer: 0,
            laptop: 0,
        });
    };

    const applianceLabels = {
        fan: 'Ceiling Fans',
        cflLight: 'CFL Lights',
        ledLight: 'LED Lights',
        tubeLight: 'Tube Lights',
        tv: 'Television',
        refrigerator: 'Refrigerator',
        ac1Ton: 'AC (1 Ton)',
        ac1_5Ton: 'AC (1.5 Ton)',
        washingMachine: 'Washing Machine',
        waterPump: 'Water Pump',
        computer: 'Desktop Computer',
        laptop: 'Laptop',
    };

    return (
        <SectionContainer id="calculator" className="bg-saas-bg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            {/* Section Header */}
            <motion.div
                className="text-center mb-16 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Calculator className="w-10 h-10 text-primary-accent" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                        Load <span className="text-transparent bg-clip-text bg-gradient-glow">Calculator</span>
                    </h2>
                </div>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Calculate your power requirements and get instant product recommendations
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {/* Input Section */}
                <div className="lg:col-span-2">
                    <div className="bg-saas-surface rounded-2xl shadow-saas-card border border-white/5 p-6 md:p-8 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                                <Zap className="w-6 h-6 text-secondary-accent" />
                                Select Your Appliances
                            </h3>
                            <Button variant="outline" onClick={resetCalculator} className="px-4 py-2 text-sm border-white/10 hover:border-white text-gray-300">
                                Reset
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {Object.keys(appliances).map((appliance) => (
                                <motion.div
                                    key={appliance}
                                    className="space-y-3 p-4 rounded-xl bg-saas-bg/50 border border-white/5 hover:border-primary-accent/30 transition-all"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <label className="text-gray-300 font-semibold">
                                            {applianceLabels[appliance]}
                                        </label>
                                        <span className="text-xs font-medium text-primary-accent bg-saas-bg px-2 py-1 rounded-md shadow-sm border border-white/5">
                                            {applianceWattages[appliance]}W
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10"
                                            value={appliances[appliance]}
                                            onChange={(e) => handleApplianceChange(appliance, e.target.value)}
                                            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider accent-primary-accent"
                                            style={{
                                                background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${appliances[appliance] * 10}%, #334155 ${appliances[appliance] * 10}%, #334155 100%)`
                                            }}
                                        />
                                        <input
                                            type="number"
                                            min="0"
                                            max="20"
                                            value={appliances[appliance]}
                                            onChange={(e) => handleApplianceChange(appliance, e.target.value)}
                                            className="w-16 px-2 py-1 bg-saas-bg border border-white/10 rounded-lg text-center text-white font-medium focus:border-primary-accent focus:outline-none shadow-sm"
                                        />
                                    </div>

                                    {appliances[appliance] > 0 && (
                                        <p className="text-xs text-secondary-accent font-medium text-right">
                                            Total: {appliances[appliance] * applianceWattages[appliance]}W
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    {/* Total Wattage */}
                    <GlassCard hover={false} className="bg-saas-surface border-white/5 shadow-saas-card">
                        <div className="text-center py-4">
                            <Zap className="w-12 h-12 mx-auto mb-3 text-secondary-accent" />
                            <h4 className="text-lg font-semibold text-gray-400 mb-2">Total Load</h4>
                            <motion.p
                                className="text-5xl font-bold text-white font-display"
                                key={totalWattage}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {totalWattage}<span className="text-2xl text-gray-500">W</span>
                            </motion.p>
                        </div>
                    </GlassCard>

                    {/* Recommended Inverter */}
                    {recommendedInverter && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <GlassCard className="border-l-4 border-l-primary-accent bg-blue-900/20 border-t border-r border-b border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-6 h-6 text-primary-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                            Recommended Inverter
                                        </h4>
                                        <p className="text-xl font-bold text-white mb-1">
                                            {recommendedInverter.name}
                                        </p>
                                        <p className="text-lg text-primary-accent font-semibold mb-2">
                                            {recommendedInverter.capacity}
                                        </p>
                                        <p className="text-sm text-gray-300 bg-saas-bg/50 p-2 rounded-lg border border-white/5">
                                            {recommendedInverter.reason}
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    )}

                    {/* Recommended Battery */}
                    {recommendedBattery && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <GlassCard className="border-l-4 border-l-secondary-accent bg-purple-900/20 border-t border-r border-b border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Battery className="w-6 h-6 text-secondary-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                            Recommended Battery
                                        </h4>
                                        <p className="text-xl font-bold text-white mb-1">
                                            {recommendedBattery.name}
                                        </p>
                                        <p className="text-lg text-secondary-accent font-semibold mb-2">
                                            {recommendedBattery.capacity}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-saas-bg/50 p-2 rounded-lg border border-white/5">
                                            <Clock size={16} className="text-gray-400" />
                                            <span>Expected backup: <strong>{recommendedBattery.backupTime}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    )}

                    {/* Estimated Backup Time Display if independent */}
                    {backupTime > 0 && !recommendedBattery && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <GlassCard hover={false} className="bg-saas-surface border-white/5 shadow-saas-card">
                                <div className="text-center">
                                    <Clock className="w-10 h-10 mx-auto mb-2 text-primary-accent" />
                                    <h4 className="text-sm font-semibold text-gray-500 mb-1">
                                        Estimated Backup Time
                                    </h4>
                                    <p className="text-3xl font-bold text-primary-accent">
                                        {backupTime} hours
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    )}

                    {totalWattage === 0 && (
                        <GlassCard hover={false} className="bg-saas-bg/30 border-dashed border-2 border-white/10">
                            <div className="text-center py-8">
                                <p className="text-gray-500 font-medium">
                                    Adjust the sliders to calculate your load and view recommendations
                                </p>
                            </div>
                        </GlassCard>
                    )}
                </div>
            </div>
        </SectionContainer>
    );
};

export default LoadCalculator;
