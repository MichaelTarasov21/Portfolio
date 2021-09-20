import Project from "./Project_Object.js";
import logos from "../Logos.js";

// Images for use in display
const CSS_Image1 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-1.jpg";
const CSS_Image2 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-2.jpg";
const CSS_Image3 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-3.jpg";
const CSS_Image4 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-4.jpg";
const CSS_Image5 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-5.jpg";
const CSS_Image6 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/CSS-Project/Image-6.jpg";

const project_name = "CSS Project";
const project_compatibility = [logos.Laptop, logos.Phone, logos.Watch];
const project_images = [CSS_Image1, CSS_Image2, CSS_Image3, CSS_Image4, CSS_Image5, CSS_Image6];
const project_logos = [logos.HTML, logos.CSS, logos.Github, logos.Netlify];
const logo_names = ["HTML", "CSS", "Github", "Netlify"];

const overview =
`
	This is a project that I wrote for a high school where we learned about varuious CSS concepts and how they could be utilized to make a functional website.
		<br />
		<br />
	It features a variety of effects that trigger from the user interacting with the page. It has also been tested with screens of various sizes and resolutions and found to work on all of them.
`;
const description =
`
	<p class="Paragraph">
		I wrote the CSS project in order to practice writing CSS. 
		For this purpose I chose to write the site without using any javascript and instead making all effects occur using pure CSS. 
		Making effects occur with CSS rather than JS has the added benefit of higher efficiency websites
	</p>
	<br />
	<p class="Paragraph">
		In order to ensure that the site would stay functional for years to come I hosted all images locally. 
		Additionally, I used media querys to make the site work on all screen sizes including computers, phones, and smart watches.
	</p>
`;

const code = "https://github.com/MichaelTarasov21/CSS-Project";
const url = "https://css.michaeltarasov.us";

const CSS_Project = new Project(project_name, project_compatibility, project_images, project_logos, logo_names, overview, description, code, url);

export default CSS_Project.html();
