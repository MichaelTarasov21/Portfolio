import Project from "./Project_Object.js";
import logos from "../Logos.js";

// Images for use in display
const Escape_Room_Image1 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-1.jpg";
const Escape_Room_Image2 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-2.jpg";
const Escape_Room_Image3 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-3.jpg";
const Escape_Room_Image4 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-4.jpg";
const Escape_Room_Image5 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-5.jpg";
const Escape_Room_Image6 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-6.jpg";
const Escape_Room_Image7 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-7.jpg";
const Escape_Room_Image8 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-8.jpg";
const Escape_Room_Image9 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-9.jpg";
const Escape_Room_Image10 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-10.jpg";
const Escape_Room_Image11 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-11.jpg";
const Escape_Room_Image12 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Escape-Room-Project/Image-12.jpg";

const project_name = "Escape Room Project";
const project_compatibility = [logos.Laptop];
const project_images = [Escape_Room_Image1, Escape_Room_Image2, Escape_Room_Image3, Escape_Room_Image4, Escape_Room_Image5, Escape_Room_Image6, Escape_Room_Image7, Escape_Room_Image8, Escape_Room_Image9, Escape_Room_Image10, Escape_Room_Image11, Escape_Room_Image12];
const project_logos = [logos.VSCode, logos.Vue, logos.Firebase, logos.Github, logos.Netlify];
const logo_names = ["Visual Studio Code", "Vue.js", "Firebase", "Github", "Netlify"];

const overview =
`
	The escape room project was my final project for an AP computer science class I took during my senior year of high school. 
	We worked on the project in a team of four in order to develop our coordination and to practice using git for version control in a collaborative environment.
	<br />
	<br />
	The project is an escape room game featuring a collection of puzzles that we developed. The user advances through the game by solving the puzzles. 
	As the user works to solve the puzzles a timer will count down the remaining time the the user has to finsih the game. Upon finishing the game the
	user's remaining time will be stored and if the user finished quickly enough their score will be added to the leaderboard.	
`;
const description =
`
	<p class="Paragraph">
		The escape room project uses the Vue framework to seperate the project into several components that were developed individually. 
		Each member of the team worked on creating a component for their own room and the rooms were then connected together to form a larger project. 
		We used Firebase to	store how much time it took a user to complete each room and to store the score of the fastest finishers.
	</p>
	<br />
	<p class="Paragraph">
		When creating the leaderboard I designed a primitive anti-cheat system that would prevent the user from entering the leaderboard if it was not the user's first time playing the escape room or if the user had refreshed the page after starting the game.
	</p>
`;

const code = "https://github.com/MichaelTarasov21/full-stack-2021-escaperoom";
const url = "https://vue.michaeltarasov.us";

const Escape_Room_Project = new Project(project_name, project_compatibility, project_images, project_logos, logo_names, overview, description, code, url);

export default Escape_Room_Project.html();
