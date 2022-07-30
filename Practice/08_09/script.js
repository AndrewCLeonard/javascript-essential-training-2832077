/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 *
 * Use querySelector and the append method
 * Pass the object to the main function
 * Pass it to the figure function
 * Return everything to the main function
 *
 */

const frogpack = {
	name: "Frog Backpack",
	volume: 8,
	color: "green",
	pocketNum: 3,
	strapLength: {
		left: 10,
		right: 10,
	},
	lidOpen: false,
	image: "../../assets/images/frog.svg",
	description: "A green kids backpack designed to make the lid look like the face of a frog sticking out its tongue.",
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus;
	},
	newStrapLength: function (lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	},
};
const Sixpack = {
	name: "Sixpack Backpack",
	volume: 6,
	color: "green",
	pocketNum: 6,
	strapLength: {
		left: 16,
		right: 66,
	},
	lidOpen: false,
	image: "../../assets/images/everyday.svg",
	description: "Designed for Gen Z men to go well with manbuns, yoga pants, and Apple watches.",
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus;
	},
	newStrapLength: function (lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	},
};

console.log(frogpack);
// HTML template for backpack description
const printHTMLList = (backpackObject) => {
	// create containers for elements (title, description ul, image, image caption)
	const newArticle = document.createElement("article");
	const newFigure = document.createElement("figure");
	const newFigCaption = document.createElement("figcaption");

	newArticle.innerHTML = `
			<div style="display: flex">
				<div>
					<h1 class="backpack__name">${backpackObject.name}</h1>
					<ul class="backpack__features">
						<li class="packprop backpack__volume">Volume:<span> ${backpackObject.volume} liters</span></li>
						<li class="packprop backpack__color">Color:<span> ${backpackObject.color}</span></li>
						<li class="packprop backpack__pockets">Number of pockets:<span> ${backpackObject.pocketNum}</span></li>
						<li class="packprop backpack__strap">Left strap length:<span> ${backpackObject.strapLength.left} inches</span></li>
						<li class="packprop backpack__strap">Right strap length:<span> ${backpackObject.strapLength.right} inches</span></li>
						<li class="feature backpack__lid">Lid status:<span> ${backpackObject.lidOpen ? "open" : "closed"}</span></li>
					</ul>
				</div>
				<figure>
					<img src="${backpackObject.image}" alt="" srcset="" width="100%" max-width="auto" height="300px" />
					<figcaption style="text-align: center">${backpackObject.description}</figcaption>
				</figure>
			</div>
			<hr />
  `;
	document.querySelector("main").append(newArticle);
};

const backpackArticle = (backpackObject, callbackForFormatting) => {
	callbackForFormatting(backpackObject);
};

backpackArticle(frogpack, printHTMLList);
backpackArticle(Sixpack, printHTMLList);
