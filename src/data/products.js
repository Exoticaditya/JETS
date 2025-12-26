// Complete product data for JetPower based on jetpower.co.in
export const productCategories = [
    {
        id: 'online-ups',
        name: 'Online UPS',
        description: 'High-performance online UPS systems for critical power protection',
        image: 'https://images.unsplash.com/photo-1558494949-ef010dba0d7e?auto=format&fit=crop&q=80&w=1000', // Server Room/UPS
        products: [
            {
                id: 'ups-1kva',
                name: 'Online UPS 1KVA',
                capacity: '1KVA',
                type: 'Double Conversion',
                inputVoltage: '160-280V AC',
                outputVoltage: '230V AC ±2%',
                efficiency: '90%',
                features: ['Pure Sine Wave Output', 'Zero Transfer Time', 'LCD Display', 'Bypass Switch']
            },
            {
                id: 'ups-3kva',
                name: 'Online UPS 3KVA',
                capacity: '3KVA',
                type: 'Double Conversion',
                inputVoltage: '160-280V AC',
                outputVoltage: '230V AC ±2%',
                efficiency: '92%',
                features: ['Pure Sine Wave Output', 'Hot Swappable Battery', 'LCD Display', 'SNMP Compatible']
            },
            {
                id: 'ups-5kva',
                name: 'Online UPS 5KVA',
                capacity: '5KVA',
                type: 'Double Conversion',
                inputVoltage: '160-280V AC',
                outputVoltage: '230V AC ±2%',
                efficiency: '93%',
                features: ['Pure Sine Wave Output', 'Parallel Operation', 'LCD Display', 'Remote Monitoring']
            },
            {
                id: 'ups-10kva',
                name: 'Online UPS 10KVA',
                capacity: '10KVA',
                type: 'Double Conversion',
                inputVoltage: '160-280V AC',
                outputVoltage: '230V AC ±1%',
                efficiency: '94%',
                features: ['Pure Sine Wave Output', 'Parallel Operation', 'SNMP Card', 'Generator Compatible']
            }
        ]
    },
    {
        id: 'batteries',
        name: 'Amara Raja Batteries',
        description: 'Premium quality Amara Raja batteries for reliable backup power',
        image: 'https://images.unsplash.com/photo-1621255557769-cf2be79eb538?auto=format&fit=crop&q=80&w=1000', // Industrial Battery
        products: [
            {
                id: 'amara-150ah',
                name: 'Amara Raja 150Ah Tubular Battery',
                capacity: '150Ah',
                voltage: '12V',
                type: 'Tubular',
                warranty: '48 months',
                features: ['Deep Discharge Recovery', 'Low Maintenance', 'Long Life', 'High Performance']
            },
            {
                id: 'amara-200ah',
                name: 'Amara Raja 200Ah Tubular Battery',
                capacity: '200Ah',
                voltage: '12V',
                type: 'Tubular',
                warranty: '60 months',
                features: ['Deep Discharge Recovery', 'Low Maintenance', 'Extra Long Life', 'Premium Quality']
            }
        ]
    },
    {
        id: 'luminous-inverter',
        name: 'Luminous Inverters',
        description: 'Trusted Luminous inverters for home and commercial use',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?auto=format&fit=crop&q=80&w=1000', // Tech/Inverter feel
        products: [
            {
                id: 'lum-900va',
                name: 'Luminous Inverter 900VA',
                capacity: '900VA',
                outputVoltage: '230V AC',
                batteryVoltage: '12V',
                efficiency: '85%',
                features: ['Pure Sine Wave', 'Intelligent Charging', 'LCD Display', 'Overload Protection']
            },
            {
                id: 'lum-1500va',
                name: 'Luminous Inverter 1500VA',
                capacity: '1500VA',
                outputVoltage: '230V AC',
                batteryVoltage: '12V',
                efficiency: '87%',
                features: ['Pure Sine Wave', 'Smart Charging', 'Digital Display', 'Short Circuit Protection']
            }
        ]
    },
    {
        id: 'jetpower-batteries',
        name: 'JetPower Batteries',
        description: 'Our own brand of high-quality batteries',
        image: 'https://images.unsplash.com/photo-1605335830953-b45b2b2b2d07?auto=format&fit=crop&q=80&w=1000', // Generic Battery
        products: [
            {
                id: 'jet-bat-150ah',
                name: 'JetPower Battery 150Ah',
                capacity: '150Ah',
                voltage: '12V',
                type: 'Tubular',
                warranty: '48 months',
                features: ['High Backup', 'Low Water Loss', 'Corrosion Resistant', 'Robust Design']
            },
            {
                id: 'jet-bat-200ah',
                name: 'JetPower Battery 200Ah',
                capacity: '200Ah',
                voltage: '12V',
                type: 'Tubular',
                warranty: '60 months',
                features: ['Extended Backup', 'Low Maintenance', 'Heavy Duty', 'Premium Quality']
            }
        ]
    },
    {
        id: 'isolation-transformer',
        name: 'Isolation Transformers',
        description: 'Electrical isolation for safety and noise reduction',
        image: 'https://images.unsplash.com/photo-1563200923-d309223e74c0?auto=format&fit=crop&q=80&w=1000', // Electric Transformer
        products: [
            {
                id: 'iso-3kva',
                name: 'Isolation Transformer 3KVA',
                capacity: '3KVA',
                inputVoltage: '230V',
                outputVoltage: '230V',
                features: ['Copper Wound', 'Electrostatic Shield', 'Compact Design', 'Low Noise']
            },
            {
                id: 'iso-5kva',
                name: 'Isolation Transformer 5KVA',
                capacity: '5KVA',
                inputVoltage: '230V',
                outputVoltage: '230V',
                features: ['Copper Wound', 'Electrostatic Shield', 'Robust Construction', 'High Efficiency']
            }
        ]
    },
    {
        id: 'servo-stabilizer',
        name: 'Servo Stabilizers',
        description: 'Precision voltage stabilization for sensitive equipment',
        image: 'https://images.unsplash.com/photo-1581093588402-4857474dac09?auto=format&fit=crop&q=80&w=1000', // Industrial equipment
        products: [
            {
                id: 'servo-5kva',
                name: 'Servo Stabilizer 5KVA',
                capacity: '5KVA',
                inputRange: '140-280V',
                outputVoltage: '220V ±1%',
                type: 'Oil Cooled',
                features: ['Digital Display', 'Overload Protection', 'High Precision', 'Durable']
            },
            {
                id: 'servo-10kva',
                name: 'Servo Stabilizer 10KVA',
                capacity: '10KVA',
                inputRange: '140-280V',
                outputVoltage: '220V ±1%',
                type: 'Oil Cooled',
                features: ['Digital Display', 'Bypass Facility', 'High Accuracy', 'Industrial Grade']
            }
        ]
    },
    {
        id: 'battery-charger',
        name: 'Battery Chargers',
        description: 'Intelligent charging systems for optimal battery life',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000', // Charger/Tech
        products: [
            {
                id: 'chg-12v-30a',
                name: 'Battery Charger 12V/30A',
                voltage: '12V',
                current: '30A',
                type: 'Automatic',
                features: ['Microprocessor Controlled', 'Multi-Stage Charging', 'LED Indicators', 'Overcharge Protection']
            },
            {
                id: 'chg-24v-30a',
                name: 'Battery Charger 24V/30A',
                voltage: '24V',
                current: '30A',
                type: 'Automatic',
                features: ['Microprocessor Controlled', 'Smart Charging', 'Digital Display', 'Temperature Compensation']
            }
        ]
    },
    {
        id: 'solar-energy',
        name: 'Solar Energy Systems',
        description: 'Eco-friendly solar power solutions for sustainable energy',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000', // Solar Panels
        products: [
            {
                id: 'solar-1kw',
                name: 'Solar System 1KW',
                capacity: '1KW',
                panelType: 'Monocrystalline',
                efficiency: '18%',
                warranty: '25 years',
                features: ['Grid-Tie', 'Net Metering', 'Remote Monitoring', 'Weather Resistant']
            },
            {
                id: 'solar-3kw',
                name: 'Solar System 3KW',
                capacity: '3KW',
                panelType: 'Monocrystalline',
                efficiency: '19%',
                warranty: '25 years',
                features: ['Hybrid System', 'Battery Backup', 'Smart Inverter', 'Mobile App Control']
            },
            {
                id: 'solar-5kw',
                name: 'Solar System 5KW',
                capacity: '5KW',
                panelType: 'Monocrystalline',
                efficiency: '20%',
                warranty: '25 years',
                features: ['Hybrid System', 'Battery Backup', 'Advanced Inverter', 'Complete Solution']
            }
        ]
    },
    {
        id: 'electrical-panel',
        name: 'Electrical Panels',
        description: 'Change Over Panels and AC/DC Power Supply systems',
        image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1000', // Circuit Breakers
        products: [
            {
                id: 'panel-changeover',
                name: 'Automatic Change Over Panel',
                type: 'Change Over Panel',
                rating: 'Up to 200A',
                features: ['Automatic Switching', 'Manual Override', 'LED Indicators', 'MCB Protection']
            },
            {
                id: 'panel-acdc',
                name: 'AC/DC Power Supply Panel',
                type: 'Power Distribution',
                rating: 'Up to 400A',
                features: ['Dual Supply', 'Busbar System', 'MCCB Protection', 'IP65 Rated']
            }
        ]
    }
];

// Client/Partner logos
export const clientLogos = [
    { name: 'Amara Raja', image: 'https://logo.clearbit.com/amararajabatteries.com' },
    { name: 'Emerson', image: 'https://logo.clearbit.com/emerson.com' },
    { name: 'Ericsson', image: 'https://logo.clearbit.com/ericsson.com' },
    { name: 'IBM', image: 'https://logo.clearbit.com/ibm.com' },
    { name: 'Idea', image: 'https://logo.clearbit.com/ideacellular.com' },
    { name: 'MGE', image: 'https://logo.clearbit.com/mgeups.com' },
    { name: 'Nokia', image: 'https://logo.clearbit.com/nokia.com' }
];

// Services offered
export const services = [
    {
        id: 'on-call',
        title: 'On Call Basis',
        description: 'Our support team is well equipped with experienced manpower to offer out of warranty after sales support.',
        icon: 'phone'
    },
    {
        id: 'amc',
        title: 'Annual Maintenance Charges',
        description: 'JETS undertakes maintenance contracts for Online UPS & inverter systems.',
        icon: 'calendar'
    },
    {
        id: 'installation',
        title: 'Installation Charges',
        description: 'Our support team is capable to install and dismantle Online UPS systems & Inverters on chargeable basis.',
        icon: 'wrench'
    }
];
