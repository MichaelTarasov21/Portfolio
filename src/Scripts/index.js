import { DomSelectors } from "./DomSelectors.js";
import Projects from "./Projects.js";
import { ChangeIndex } from "./CyclicalPagination.js";
function SelectImage(image, itemlist) {
	for (let i = 0; i < itemlist.length; i++) {
		// Removes the selected image tag from all images
		const item = itemlist.item(i);
		item.classList.remove("selectedimage");
	}
	image.classList.add("selectedimage");

	document.getElementsByClassName("ActiveImage")[1].innerHTML = `<img class="activeimage" src="${image.src}" />`;
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

function SetUpProjects() {
	Projects.forEach(function () {
		//Create a new project indicator (little gray circle) for each project in Projects.js
		document.getElementById("ProjectIndicator").innerHTML = document.getElementById("ProjectIndicator").innerHTML + `<span class="Indicator"></span>`;
	});
	document.getElementsByClassName("Indicator").item(0).classList.add("IndicatorSelected");

	let ActiveIndex = 0;
	let switching = false;

	function InsertProjects() {
		const PreviousProject = document.getElementById("PreviousProject");
		const ActiveProject = document.getElementById("ActiveProject");
		const NextProject = document.getElementById("NextProject");

		PreviousProject.innerHTML = Projects[ChangeIndex(ActiveIndex, Projects.length, -1)];
		ActiveProject.innerHTML = Projects[ActiveIndex];
		NextProject.innerHTML = Projects[ChangeIndex(ActiveIndex, Projects.length, 1)];
		MakeDetailsOpenable();
		MakeDetailsClosable();
		MakeImagesClickable();
	}
	function ChangeIndicator() {
		const ProjectIndicators = document.getElementsByClassName("Indicator");
		for (let i = 0; i < ProjectIndicators.length; i++) {
			ProjectIndicators.item(i).classList.remove("IndicatorSelected");
		}
		ProjectIndicators.item(ActiveIndex).classList.add("IndicatorSelected");
	}
	function SwitchProjects(direction) {
		const ProjectDiv = document.getElementById("Projects");
		//Moves background left or right depending on arrow clicked
		if (direction < 0) {
			ProjectDiv.classList.add("MoveRight");
		}
		if (direction > 0) {
			ProjectDiv.classList.add("MoveLeft");
		}
		setTimeout(EndProjectSwitch, 700);
	}
	function EndProjectSwitch() {
		// Switches project order after moving betwen projects in view
		const ProjectDiv = document.getElementById("Projects");

		InsertProjects();
		//Resets the block containg the projects to its default position after an animation so that the project stay in view	
		ProjectDiv.classList.remove("MoveLeft");
		ProjectDiv.classList.remove("MoveRight");
		switching = false;
	}
	function ChangeProject(amount) {
		ActiveIndex = ChangeIndex(ActiveIndex, Projects.length, amount);
		ChangeIndicator();
		SwitchProjects(amount);
	}

	document.getElementById("MoveToPreviousProject").addEventListener("click", function () {
		if (!switching) {
			// Prevents double click
			ChangeProject(-1);
			switching = true;
		}
	});
	document.getElementById("MoveToNextProject").addEventListener("click", function () {
		if (!switching) {
			// Prevents double click
			ChangeProject(1);
			switching = true;
		}
	});

	InsertProjects();
}

SetUpProjects();
