/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 *
 * Challenge instructions:
 * - create a basic function declaration
 * - make a change to an element in the DOM (querySelector, add a class, etc.).
 * - call the function declaration
 * - create a basic function expression, place an anonymous function inside
 *      -   find an element
 *      -   make a change to it
 *      -   call the function
 *      -   confirm that it works
 * - repeat with an arrow function
 *
 */

const h1Content = `
<h1>H1 Created</h1>`;

const h2Content = `
<h2>H2 Created</h2>`;

const main = document.querySelector("main");

function addH1() {
	// `newDiv` locally scoped, not sure about best practices
	const newDiv = document.createElement("div");
	newDiv.classList.add("h1class");
	newDiv.innerHTML = h1Content;
	main.append(newDiv);
}

addH1();

const addStyle = function () {
	document.querySelector(".h1class").style.color = "red";
};
addStyle();

const addH2 = () => {
	const newDiv = document.createElement("div");
	newDiv.innerHTML = h2Content;
	main.append(newDiv);
};
addH2();
