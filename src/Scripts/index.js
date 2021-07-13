import { DomSelectors } from "./DomSelectors.js";
function SelectImage(image, itemlist) {
	for (let i = 0; i < itemlist.length; i++) {
		// Removes the selected image tag from all images
		const item = itemlist.item(i);
		item.classList.remove("selectedimage");
	}
	image.classList.add("selectedimage");

	document.getElementsByClassName("ActiveImage")[0].innerHTML = `<img class="activeimage" src="${image.src}" />`;
}
function MakeImagesClickable() {
	const ActiveProjectImages = document.getElementsByClassName("sampleimage");

	for (let i = 0; i < ActiveProjectImages.length; i++) {
		const item = ActiveProjectImages.item(i);
		item.addEventListener("click", function () {
			SelectImage(item, ActiveProjectImages);
		});
	}
}

function OpenDetails(index) {
	const location = document.getElementsByClassName("ProjectPopup").item(index);
	console.log(document.getElementsByClassName("ProjectPopup"));
	DomSelectors.PopupBackground.style.display = "block";
	document.body.classList.add("PopupOpen");
	location.style.display = "block";
}
function MakeDetailsOpenable() {
	const OpenButtons = document.getElementsByClassName("OpenDetails");

	for (let i = 0; i < OpenButtons.length; i++) {
		const item = OpenButtons.item(i);
		item.addEventListener("click", function () {
			OpenDetails(i);
		});
	}
}

function CloseDetails(index) {
	const location = document.getElementsByClassName("ProjectPopup").item(index);

	DomSelectors.PopupBackground.style.display = "none";
	document.body.classList.remove("PopupOpen");
	location.style.display = "none";
}
function MakeDetailsClosable() {
	const CloseButtons = document.getElementsByClassName("close");

	for (let i = 0; i < CloseButtons.length; i++) {
		const item = CloseButtons.item(i);
		item.addEventListener("click", function () {
			CloseDetails(i);
		});
	}
}


MakeImagesClickable();
MakeDetailsClosable();
MakeDetailsOpenable();