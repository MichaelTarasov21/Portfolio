import logos from "../Logos.js";

// Images for use in display
const Pokemon_Project_Image1 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-1.jpg";
const Pokemon_Project_Image2 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-2.jpg";
const Pokemon_Project_Image3 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-3.jpg";
const Pokemon_Project_Image4 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-4.jpg";

const Pokemon = `<div class="ProjectOverview">
<h3 class="sectionheader">Pokemon Project</h3>
<img class="OverviewImage" src="${Pokemon_Project_Image4}" />
<div class="OverviewText">
    This is a simple Javascript project that I created with a classmate for a high school Computer Science class in order to practice making API calls. 
    <br>
    <br>
    It picks a random Pokemon from the Pokemon api and quizes the user to see if they can identify the Pokemon's name.
    Once a user is quizzed on a Pokemon that Pokemon can then be found inside of the "Pokedex".
    <br>
    <br>
    <div class="Links">
        <a class="ProjectInteraction OpenDetails">Details</a>
        <a href="https://js.michaeltarasov.us" class="ProjectInteraction Link">Visit</a>
        <a href="https://github.com/MichaelTarasov21/Pokemon-API-Quiz-Game" class="ProjectInteraction Code">Github</a>
    </div>
</div>
</div>
<div class="ProjectPopup">
<span class="close">&times</span>
<span class="ImageBlock">
    <span class="ActiveImage">
        <img class="activeimage" src="${Pokemon_Project_Image1}" />
    </span>
    <div class="ImageBar">
        <img class="sampleimage selectedimage" src="${Pokemon_Project_Image1}" />
        <img class="sampleimage" src="${Pokemon_Project_Image2}" />
        <img class="sampleimage" src="${Pokemon_Project_Image3}" />
        <img class="sampleimage" src="${Pokemon_Project_Image4}" />
    </div>
</span>
<div class="description">
    <h3 class="sectionheader descriptionheader">Pokemon Project</h3>
    <div>
        <p class="Paragraph">The primary focus of the Pokemon project was to create a quiz game that utilized the Pokemon API to provide information about each Pokemon.</p>
        <br>
        <p class="Paragraph">We expanded upon this purpose by creating a "Pokedex" where data about which Pokemon the user has been quizzed on is stored. This data is stored inside of a browser cookie to prevent it from being lost when the user leaves the web page. For purposes of the "Pokedex", a pokemon is considered to be caught if it has been correctly identified in the quiz and seen if it was incorrectly identified.</p>
        <br>
        <p class="Paragraph">The "Pokedex" includes an optional toggle that allows the user to see information about all pokemon and not just those that they have been quizzed on. It also includes a search feature that can be used to find pokemon using either the pokedex number or their name.</p>
    </div>
</div>
<div class="techstack">
    <h3 class="sectionheader">Developed Using:</h3>
    <div class="tools">
        <span>
            <img class="ToolLogo" src="${logos.VSCode}" alt="VSCode Logo" />
            <h4>Visual Studio Code</h4>
        </span>
        <span>
            <img class="ToolLogo" src="${logos.WebFrontendStack}" alt="Web Front End Stack" />
            <h4>
                HTML, CSS, <br />
                Javascript
            </h4>
        </span>
        <span>
            <img class="ToolLogo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI logo" />
            <h4>PokeAPI</h4>
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
</div>`;

export default Pokemon;
