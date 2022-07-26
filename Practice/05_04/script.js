/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 *
 * - find an element and add two different classes
 * - remove only one of the new classes
 * - add a new attribute to an element
 *
 * - request the value of the attribute
 * - change the value of the attribute
 * - add some inline CSS to an element by specifying the style property and setting its value
 * - query the style property of an element in the console to get a list of all the style properties available
 */

// console.log(document.querySelector("h2"));
// console.log(document.querySelector("main li:last-child"));
// console.log(document.querySelectorAll("main li"));

document.querySelectorAll("main li").forEach((item) => (item.style.color = "red"));
document.querySelectorAll("main li:last-child").forEach((item) => (item.style.color = "blue"));

// MODIFYING ELEMENT CLASSES

// don't use this in frameworks:
document.querySelector("h1").className = "test-one test-two";

// instead use .classList
console.log(document.querySelector("h1").classList);

document.querySelector("h1").classList.remove("test-one", "test-two");
