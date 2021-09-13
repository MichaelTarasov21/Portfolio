import Project from "./Project_Object.js";
import logos from "../Logos.js";

// Images for use in display
const Pokemon_Project_Image1 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-1.jpg";
const Pokemon_Project_Image2 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-2.jpg";
const Pokemon_Project_Image3 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-3.jpg";
const Pokemon_Project_Image4 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-4.jpg";

const project_name = "Pokemon Project";
const project_compatibility = [logos.Laptop, logos.Phone];
const project_images = [Pokemon_Project_Image1, Pokemon_Project_Image2, Pokemon_Project_Image3, Pokemon_Project_Image4];
const project_logos = [logos.VSCode, logos.WebFrontendStack, logos.PokemonAPI, logos.Github, logos.Netlify];
const logo_names = ["Visual Studio Code", "HTML, CSS,<br> Javascript", "PokeAPI", "Github", "Netlify"];

const overview =
`
	This is a simple Javascript project that I created with a classmate for a high school Computer Science class in order to practice making API calls.
	<br />
	<br />
	It picks a random Pokemon from the Pokemon api and quizes the user to see if they can identify the Pokemon's name. Once a user is quizzed on a Pokemon that Pokemon can then be found inside of the "Pokedex".
`;
const description =
`
	<p class="Paragraph">
		The primary focus of the Pokemon project was to create a quiz game that utilized the Pokemon API to provide information about each Pokemon.
	</p>
	<br />
	<p class="Paragraph">
		We expanded upon this purpose by creating a "Pokedex" where data about which Pokemon the user has been quizzed on is stored. 
		This data is stored inside of a browser cookie to prevent it from being lost when the user leaves the web page. 
		For purposes of the "Pokedex", a pokemon is considered to be caught if it has been correctly identified in the quiz and seen if it was incorrectly identified.
	</p>
	<br />
	<p class="Paragraph">
		The "Pokedex" includes an optional toggle that allows the user to see information about all pokemon and not just those that they have been quizzed on. 
		It also includes a search feature that can be used to find pokemon using either the pokedex number or their name.
	</p>
`;

const code = "https://github.com/MichaelTarasov21/Pokemon-API-Quiz-Game";
const url = "https://js.michaeltarasov.us";

const Pokemon_Project = new Project(project_name, project_compatibility, project_images, project_logos, logo_names, overview, description, code, url,  true);

Pokemon_Project.set_overview_image(4);

export default Pokemon_Project.html();
