/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

try {
const d2 = d + vel * time; //calculates new distance
const rf = fbr * time; //calculates remaining fuel

// Function to calculate new velocity based on acceleration
const calcNewVel = (vel, acc, time) => {
  if (vel < 0 || acc < 0 || time < 0) {
    throw new Error("Negative values not allowed for velocity, acceleration, or time.")
  }
  return vel + acc * time;
};

// Error handling and correction of function call order
const vel2 = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
}