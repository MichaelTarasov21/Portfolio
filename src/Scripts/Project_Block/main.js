import { DomSelectors } from "./DomSelectors.js";
import Projects from "./Projects.js";
import { ChangeIndex } from "./CyclicalPagination.js";
// Needed for extensions
import Escape_Room_Project from "./Project-Html/Escape_Room_Project.js";

let ActiveIndex = 0;
let activeProject;
let nextProject;
let previousProject;
let changing;

function insertProjects() {
	function addProject(html, index) {
		//Insert all the projects
		document.getElementById("Projects").innerHTML = document.getElementById("Projects").innerHTML + html;
		//Create a new project indicator (little gray circle) for each project in Projects.js
		document.getElementById("ProjectIndicator").innerHTML = document.getElementById("ProjectIndicator").innerHTML + `<span class="Indicator"></span>`;
	}
	function addExtensionMethods() {
		// Add methods here that should be added to an extension
		document.getElementById("escapeRoomToggle").addEventListener("click", function () {
			Escape_Room_Project.isolateRoomFour(ActiveIndex);
		});
	}

	Projects.forEach(addProject);
	addExtensionMethods();
	setProjects();

	activeProject.style.display = "block";
	// Highlight the first circle
	document.getElementsByClassName("Indicator")[ActiveIndex].classList.add("IndicatorSelected");

	function SelectImage(image, itemlist) {
		for (let i = 0; i < itemlist.length; i++) {
			// Removes the selected image tag from all images
			const item = itemlist[i];
			item.classList.remove("selectedimage");
		}
		image.classList.add("selectedimage");

		document.getElementsByClassName("activeimage")[ActiveIndex].src = image.src;
	}
	function MakeImagesClickable() {
		const ActiveProjectImages = document.getElementsByClassName("sampleimage");

		for (let i = 0; i < ActiveProjectImages.length; i++) {
			const item = ActiveProjectImages[i];
			item.addEventListener("click", function () {
				SelectImage(item, ActiveProjectImages);
			});
		}
	}

	function OpenDetails(index) {
		const location = document.getElementsByClassName("ProjectPopup")[index];

		DomSelectors.PopupBackground.style.display = "block";
		document.body.style.top = `-${window.scrollY}px`;
		document.body.classList.add("PopupOpen");
		location.style.visibility = "visible";
	}
	function MakeDetailsOpenable() {
		const OpenButtons = document.getElementsByClassName("OpenDetails");

		for (let i = 0; i < OpenButtons.length; i++) {
			const item = OpenButtons[i];
			item.addEventListener("click", function () {
				OpenDetails(i);
			});
		}
	}

	function CloseDetails(index) {
		const location = document.getElementsByClassName("ProjectPopup")[index];

		DomSelectors.PopupBackground.style.display = "none";
		document.body.classList.remove("PopupOpen");

		// Resets the scroll position
		let top = document.body.style.top;
		document.body.style.top = "";
		top = parseInt(top) * -1;
		window.scrollTo(0, top);

		location.style.visibility = "hidden";
	}
	function MakeDetailsClosable() {
		const CloseButtons = document.getElementsByClassName("close");

		for (let i = 0; i < CloseButtons.length; i++) {
			const item = CloseButtons[i];
			item.addEventListener("click", function () {
				CloseDetails(i);
			});
		}
	}
	MakeDetailsOpenable();
	MakeDetailsClosable();
	MakeImagesClickable();
}
function ChangeIndicator() {
	const ProjectIndicators = document.getElementsByClassName("Indicator");
	for (let i = 0; i < ProjectIndicators.length; i++) {
		// Gray out all project indicators
		ProjectIndicators[i].classList.remove("IndicatorSelected");
	}
	// Highlight the active indicator
	ProjectIndicators[ActiveIndex].classList.add("IndicatorSelected");
}
function setProjects() {
	const projectAmount = document.getElementsByClassName("Project").length;
	activeProject = document.getElementsByClassName("Project")[ActiveIndex];
	nextProject = document.getElementsByClassName("Project")[ChangeIndex(ActiveIndex, projectAmount, 1)];
	previousProject = document.getElementsByClassName("Project")[ChangeIndex(ActiveIndex, projectAmount, -1)];
}
function moveToPrevious() {
	if (!changing) {
		changing = true;
		const projectAmount = document.getElementsByClassName("Project").length;
		ActiveIndex = ChangeIndex(ActiveIndex, projectAmount, -1);

		activeProject.classList.add("MoveRightOut");
		previousProject.classList.add("MoveRightIn");
		ChangeIndicator();
		setTimeout(endMove, 700);
	}
}
function moveToNext() {
	if (!changing) {
		changing = true;
		const projectAmount = document.getElementsByClassName("Project").length;
		ActiveIndex = ChangeIndex(ActiveIndex, projectAmount, 1);

		activeProject.classList.add("MoveLeftOut");
		nextProject.classList.add("MoveLeftIn");
		ChangeIndicator();
		setTimeout(endMove, 700);
	}
}

function endMove() {
	if (activeProject.style.removeProperty) {
		activeProject.style.removeProperty("display");
	} else {
		// For IE < 9
		activeProject.style.removeAttribute("display");
	}
	activeProject.classList.remove("MoveRightOut");
	activeProject.classList.remove("MoveLeftOut");

	setProjects();

	activeProject.style.display = "block";
	activeProject.classList.remove("MoveLeftIn");
	activeProject.classList.remove("MoveRightIn");
	// Reset the scrollbar
	const imagebar = document.getElementsByClassName("ImageBar").item(ActiveIndex);
	imagebar.scrollLeft = 0;
	changing = false;
}

insertProjects();

document.getElementById("MoveToPreviousProject").addEventListener("click", moveToPrevious);
document.getElementById("MoveToNextProject").addEventListener("click", moveToNext);
