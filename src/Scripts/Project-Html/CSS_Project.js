import logos from "../Logos.js"

// Images for use in display

const CSSProject = `<div class="ProjectOverview">
<h3 class="sectionheader">CSS-Project</h3>
<img class="OverviewImage" src="" />
<div class="OverviewText">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim elit. Vivamus non mauris ut turpis egestas consectetur. Curabitur urna quam, rhoncus quis molestie nec, consectetur eu est. Curabitur gravida auctor nunc, sed iaculis enim faucibus eget. Aliquam porttitor
    ornare sagittis. Donec quis nulla lobortis, cursus ligula nec, feugiat felis. Suspendisse iaculis elit non purus imperdiet aliquam. Pellentesque facilisis ipsum a vehicula laoreet. Donec tempus, ipsum id pretium varius, odio sapien pellentesque urna, nec tincidunt magna diam a
    turpis.
    <br>
    <br>
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
        <img class="activeimage" src="" />
    </span>
    <div class="ImageBar">
        <img class="sampleimage selectedimage" src="" />
        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />

        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />
        <img class="sampleimage" src="" />
    </div>
</span>
<div class="description">
    <h3 class="sectionheader">CSS-Project</h3>
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
            <img class="ToolLogo" src="${logos.HTML}" alt="VSCode Logo" />
            <h4>HTML</h4>
        </span>
        <span>
            <img class="ToolLogo" src="${logos.CSS}" alt="Web Front End Stack" />
            <h4>
                CSS
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

export default CSSProject;