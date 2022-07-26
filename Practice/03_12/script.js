/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import Reed from "./Reed.js";

const abc = new Reed("bass", "Vandoren", "blue box", "abc", "07/26/2022");
const def = new Reed("Bb", "Vandoren", "V12", "def", "05/21/2022");
const ghi = new Reed("Eb", "Rico", "Grand Concert Select", "ghi", "03/15/2022");
const jkl = new Reed("contra", "legere", "standard", "jkl", "07/26/2022");

console.log("Reed.js");

console.log(`abc usage minutes default is zero: ${abc.usage.minutes}`);
abc.usage.minutes = 30;
console.log(`abc usage minutes changed: ${abc.usage.minutes}`);
console.log(`def usage minutes: ${def.usage.minutes}`);
console.log(`ghi usage minutes: ${ghi.usage.minutes}`);
console.log(`jkl usage minutes: ${jkl.usage.minutes}`);
