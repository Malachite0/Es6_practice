import { logMessage } from './logger.js';

export function add(a, b) {
    const result = a + b;
    logMessage(`Optellen: ${a} + ${b} = ${result}`);
    return result;
}

export function subtract(a, b) {
    const result = a - b;
    logMessage(`Aftrekken: ${a} - ${b} = ${result}`);
    return result;
}
