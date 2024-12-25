// neat-gradients.js

// Export the base class
export { NeatAnimatedGradient } from './base/NeatAnimatedGradient.js';

// Export all gradient subclasses
export { Abstract } from './gradients/Abstract.js';
export { Bricks } from './gradients/Bricks.js';
export { Linear } from './gradients/Linear.js';
export { PolkaDots } from './gradients/PolkaDots.js';
export { ThreeTriangles } from './gradients/ThreeTriangles.js';
export { UpDownTriangles } from './gradients/UpDownTriangles.js';
export { ZigZag } from './gradients/ZigZag.js';
// Add more gradient classes as needed

// Export any shared utilities (if applicable)
export * from './utils/helpers.js'; // Optional, if you have utility functions
