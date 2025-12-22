// Appliance wattage data
export const applianceWattages = {
    fan: 75,
    cflLight: 15,
    ledLight: 10,
    tubeLight: 40,
    tv: 120,
    refrigerator: 150,
    ac1Ton: 1200,
    ac1_5Ton: 1800,
    ac2Ton: 2400,
    washingMachine: 500,
    waterPump: 750,
    microwave: 1000,
    computer: 200,
    laptop: 65,
    router: 10
};

// Calculate total wattage based on appliance counts
export function calculateTotalWattage(appliances) {
    let total = 0;

    for (const [appliance, count] of Object.entries(appliances)) {
        if (applianceWattages[appliance]) {
            total += applianceWattages[appliance] * count;
        }
    }

    return total;
}

// Recommend inverter based on total wattage
export function recommendInverter(totalWattage) {
    // Add 20% safety margin
    const requiredCapacity = totalWattage * 1.2;

    if (requiredCapacity <= 800) {
        return {
            id: 'inv-1',
            name: 'JetPower Home Inverter 1000VA',
            capacity: '1000VA',
            reason: 'Perfect for basic home appliances'
        };
    } else if (requiredCapacity <= 1200) {
        return {
            id: 'inv-2',
            name: 'JetPower Home Inverter 1500VA',
            capacity: '1500VA',
            reason: 'Ideal for medium-sized homes'
        };
    } else if (requiredCapacity <= 1600) {
        return {
            id: 'inv-3',
            name: 'JetPower Pro Inverter 2000VA',
            capacity: '2000VA',
            reason: 'Best for larger homes with AC'
        };
    } else {
        return {
            id: 'inv-custom',
            name: 'Custom Solution Required',
            capacity: `${Math.ceil(requiredCapacity / 1000)}KVA+`,
            reason: 'Contact us for a customized power solution'
        };
    }
}

// Recommend battery based on desired backup time and wattage
export function recommendBattery(totalWattage, desiredBackupHours = 4) {
    // Battery capacity (Ah) = (Wattage × Hours) / Voltage
    // Using 12V system
    const requiredAh = (totalWattage * desiredBackupHours) / 12;

    if (requiredAh <= 150) {
        return {
            id: 'bat-1',
            name: 'JetPower Battery 150Ah',
            capacity: '150Ah',
            backupTime: '4-6 hours'
        };
    } else {
        return {
            id: 'bat-2',
            name: 'JetPower Battery 200Ah',
            capacity: '200Ah',
            backupTime: '6-8 hours'
        };
    }
}

// Get estimated backup time
export function estimateBackupTime(batteryAh, totalWattage) {
    // Backup time (hours) = (Battery Ah × Voltage × Efficiency) / Wattage
    // Using 12V system and 85% efficiency
    const backupHours = (batteryAh * 12 * 0.85) / totalWattage;
    return Math.round(backupHours * 10) / 10; // Round to 1 decimal
}
