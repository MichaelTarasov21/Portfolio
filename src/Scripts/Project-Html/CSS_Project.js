import logos from "../Logos.js";

// Images for use in display
const CSS_Image1 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-1.jpg";
const CSS_Image2 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-2.jpg";
const CSS_Image3 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-3.jpg";
const CSS_Image4 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-4.jpg";
const CSS_Image5 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-5.jpg";
const CSS_Image6 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-6.jpg";

const CSS_Project = `
<div class="ProjectOverview">
	<h3 class="sectionheader">CSS Project</h3>
	<img class="OverviewImage" src="${CSS_Image1}" />
	<br />
	<br />
	<div class="compatibility">
		Compatible With:
		<br />
		<img class="compatibileDevice" src="${logos.Laptop}" />
		<img class="compatibileDevice" src="${logos.Phone}" />
		<img class="compatibileDevice" src="${logos.Watch}" />
	</div>
	<div class="OverviewText">
		This is a project that I wrote for a high school where we learned about varuious CSS concepts and how they could be utilized to make a functional website.
		<br />
		<br />
		It features a variety of effects that trigger from the user interacting with the page. It has also been tested with screens of various sizes and resolutions and found to work on all of them.
		<br />
		<br />
		<div class="Links">
			<a class="ProjectInteraction OpenDetails">Details</a>
			<a href="https://css.michaeltarasov.us/" class="ProjectInteraction Link">Visit</a>
			<a href="https://github.com/MichaelTarasov21/CSS-Project" class="ProjectInteraction Code">Github</a>
		</div>
	</div>
</div>
<div class="ProjectPopup">
	<span class="close">&times</span>
	<span class="ImageBlock">
		<span class="ActiveImage">
			<img class="activeimage" src="${CSS_Image1}" />
		</span>
		<div class="ImageBar">
			<img class="sampleimage selectedimage" src="${CSS_Image1}" />
			<img class="sampleimage" src="${CSS_Image2}" />
			<img class="sampleimage" src="${CSS_Image3}" />
			<img class="sampleimage" src="${CSS_Image4}" />
			<img class="sampleimage" src="${CSS_Image5}" />
			<img class="sampleimage" src="${CSS_Image6}" />
		</div>
	</span>
	<div class="description">
		<h3 class="sectionheader">CSS Project</h3>
		<div>
			<p class="Paragraph">
				I wrote the CSS project in order to practice writing CSS. For this purpose I chose to write the site without using any javascript and instead making all effects occur using pure CSS. Making effects occur with CSS rather than JS has the added benefit of higher efficiency websites
			</p>
			<br />
			<p class="Paragraph">In order to ensure that the site would stay functional for years to come I hosted all images locally. Additionally, I used media querys to make the site work on all screen sizes including computers, phones, and smart watches.</p>
		</div>
	</div>
	<div class="techstack">
		<h3 class="sectionheader">Developed Using:</h3>
		<div class="tools">
			<span>
				<img class="ToolLogo" src="${logos.HTML}" alt="HTML Logo" />
				<h4>HTML</h4>
			</span>
			<span>
				<img class="ToolLogo" src="${logos.CSS}" alt="CSS Logo" />
				<h4>CSS</h4>
			</span>
			<span>
				<img class="ToolLogo" src="${logos.Github}" alt="Github Logo" />
				<h4>Github</h4>
			</span>
			<span>
				<img class="ToolLogo" src="${logos.Netlify}" alt="Netlify Logo" />
				<h4>Netlify</h4>
			</span>
		</div>
	</div>
</div>
`;

export default CSS_Project;
