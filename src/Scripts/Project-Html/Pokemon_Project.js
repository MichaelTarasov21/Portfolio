import logos from "../Logos.js"

// Images for use in display
const Pokemon_Project_Image1 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-1.jpg";
const Pokemon_Project_Image2 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-2.jpg";
const Pokemon_Project_Image3 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-3.jpg";
const Pokemon_Project_Image4 = "https://raw.githubusercontent.com/MichaelTarasov21/Portfolio/master/src/Assets/Pokemon-Project/Image-4.jpg";

const Pokemon = `<div class="ProjectOverview">
<h3 class="sectionheader">Pokemon-Project</h3>
<img class="OverviewImage" src="${Pokemon_Project_Image4}" />
<div class="OverviewText">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim elit. Vivamus non mauris ut turpis egestas consectetur. Curabitur urna quam, rhoncus quis molestie nec, consectetur eu est. Curabitur gravida auctor nunc, sed iaculis enim faucibus eget. Aliquam porttitor
    ornare sagittis. Donec quis nulla lobortis, cursus ligula nec, feugiat felis. Suspendisse iaculis elit non purus imperdiet aliquam. Pellentesque facilisis ipsum a vehicula laoreet. Donec tempus, ipsum id pretium varius, odio sapien pellentesque urna, nec tincidunt magna diam a
    turpis.
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
    <h3 class="sectionheader">Pokemon-Project</h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim elit. Vivamus non mauris ut turpis egestas consectetur. Curabitur urna quam, rhoncus quis molestie nec, consectetur eu est. Curabitur gravida auctor nunc, sed iaculis enim faucibus eget. Aliquam porttitor
        ornare sagittis. Donec quis nulla lobortis, cursus ligula nec, feugiat felis. Suspendisse iaculis elit non purus imperdiet aliquam. Pellentesque facilisis ipsum a vehicula laoreet. Donec tempus, ipsum id pretium varius, odio sapien pellentesque urna, nec tincidunt magna diam a
        turpis.
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