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

const Escape_Room = `<div class="ProjectOverview">
<h3 class="sectionheader">Escape Room Project</h3>
<img class="OverviewImage" src="${Escape_Room_Image1}" />
<div class="OverviewText">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim elit. Vivamus non mauris ut turpis egestas consectetur. Curabitur urna quam, rhoncus quis molestie nec, consectetur eu est. Curabitur gravida auctor nunc, sed iaculis enim faucibus eget. Aliquam porttitor
    ornare sagittis. Donec quis nulla lobortis, cursus ligula nec, feugiat felis. Suspendisse iaculis elit non purus imperdiet aliquam. Pellentesque facilisis ipsum a vehicula laoreet. Donec tempus, ipsum id pretium varius, odio sapien pellentesque urna, nec tincidunt magna diam a
    turpis.
    <br>
    <br>
    <div class="Links">
        <a class="ProjectInteraction OpenDetails">Details</a>
        <a href="https://vue.michaeltarasov.us/" class="ProjectInteraction Link">Visit</a>
        <a href="https://github.com/MichaelTarasov21/full-stack-2021-escaperoom" class="ProjectInteraction Code">Github</a>
    </div>
</div>
</div>
<div class="ProjectPopup">
<span class="close">&times</span>
<span class="ImageBlock">
    <span class="ActiveImage">
        <img class="activeimage" alt="The login screen of an escape room game" src="${Escape_Room_Image1}" />
    </span>
    <div class="ImageBar">
        <img class="sampleimage selectedimage" src="${Escape_Room_Image1}" />
        <img class="sampleimage" src="${Escape_Room_Image2}" />
        <img class="sampleimage" src="${Escape_Room_Image3}" />
        <img class="sampleimage" src="${Escape_Room_Image4}" />
        <img class="sampleimage" src="${Escape_Room_Image5}" />
        <img class="sampleimage" src="${Escape_Room_Image6}" />
        <img class="sampleimage" src="${Escape_Room_Image7}" />
        <img class="sampleimage" src="${Escape_Room_Image8}" />
        <img class="sampleimage" src="${Escape_Room_Image9}" />
        <img class="sampleimage" src="${Escape_Room_Image10}" />
        <img class="sampleimage" src="${Escape_Room_Image11}" />
        <img class="sampleimage" src="${Escape_Room_Image12}" />
    </div>
</span>
<div class="description">
    <h3 class="sectionheader">Escape Room Project</h3>
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
            <img class="ToolLogo" src="${logos.Vue}" alt="Vue.js Logo" />
            <h4>Vue.js</h4>
        </span>
        <span>
            <img class="ToolLogo" src="${logos.Firebase}" alt="Firebase Logo" />
            <h4>
                Firebase
            </h4>
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

export default Escape_Room;
