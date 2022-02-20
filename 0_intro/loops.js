// dont use for Loops, They are not functinal (not referenctially transparent)
// Use .map function instead
const carBatteries =[0.3242, 0.6374, 0.3242, 0.1354];
const chargedCarBatteries = carBatteries.map(bat => bat + 0.3);
console.log(chargedCarBatteries);


//place each battery in new index charger ( in console log)
// or foreach method
// only use if not accesing data again
carBatteries.forEach((battery, index) => {
    console.log(`Car Battery with charge: ${battery} goes into charger ${index +1} `)
});

// or filter method

const drainedBatteries = carBatteries.filter(battery => battery < 0.5);
console.log(drainedBatteries);