console.log("opdracht 3b");

import { capitalize, countChars } from './stringUtils.js';

const testString = "hello world";

const capitalizedString = capitalize(testString);
console.log("Geïnitialiseerde string:", capitalizedString); 

const charCount = countChars(testString);
console.log("Aantal tekens:", charCount);
