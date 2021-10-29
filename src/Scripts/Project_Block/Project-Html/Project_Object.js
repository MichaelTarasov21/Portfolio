class Project {
	extensions = "";
	constructor(name = String, combatible_devices = Array, image_array = Array, logos = Array, logo_names = Array, overview = String, description = String, code = String, url = String, long_description = false) {
		this.name = name;
		this.devices = combatible_devices;
		this.images = image_array;
		this.overview_Image = this.images[0];
		if (logos.length !== logo_names.length) {
			console.log(`Error in project ${this.name}. The number of logos provided does not equal to the number of logo names provided.`);
		} else {
			this.logos = logos;
			this.logo_names = logo_names;
		}
		this.overview = overview;
		this.description = description;
		this.code = code;
		this.visit = url;
		// If needed the following can be changed using a method that will be written if changing the becomes necessary
		this.poject_interact = "Visit";
		this.project_hosting = "Github";
		if (long_description) {
			this.smaller_gap = "largeDescription";
		} else {
			this.smaller_gap = "";
		}
	}
	set_overview_image(index) {
		index = index - 1;
		if (this.images[index]) {
			this.overview_Image = this.images[index];
		} else {
			console.log(`Error in project ${this.name}. Image with index ${index} does not exist. Overview image will not be changed.`);
		}
	}
	compatibility(devices) {
		let compatibility = "";
		devices.forEach((device) => {
			compatibility = compatibility + `<img class="compatibileDevice" src="${device}" /> `;
		});
		return compatibility;
	}
	images_bar(image_array) {
		let image_row;
		function addImage(image, index) {
			if (index === 0) {
				image_row = `<img class="sampleimage selectedimage" src="${image}" />`;
			} else {
				image_row = image_row + `<img class="sampleimage" src="${image}" />`;
			}
		}
		image_array.forEach(addImage);
		return image_row;
	}
	logo_bar(logo_images, logo_names) {
		let logos_row = "";
		function addLogo(element, index) {
			logos_row =
				logos_row +
				`<span>
                <img class="ToolLogo" src="${logo_images[index]}" alt="${logo_names[index]} Logo" />
                <h4>${logo_names[index]}</h4>
                </span>`;
		}
		logo_images.forEach(addLogo);
		return logos_row;
	}
	extension(html) {
		this.extensions = this.extensions + html;
	}
	html() {
		const html = `
			<div class="Project">
            	<div class="ProjectOverview">
            		<h3 class="sectionheader">${this.name}</h3>
					${this.extensions}
            		<img class="OverviewImage" src="${this.overview_Image}" />
            		<br />
            		<br />
            		<div class="compatibility">
            		    Compatible With:
            		    <br />
            		    ${this.compatibility(this.devices)}
            		</div>
            		<div class="OverviewText">
            		    ${this.overview}
            		    <br />
            		    <br />
            		    <div class="Links">
            		        <a class="ProjectInteraction OpenDetails">Details</a>
            		        <a href="${this.visit}" class="ProjectInteraction Link">${this.poject_interact}</a>
            		        <a href="${this.code}" class="ProjectInteraction Code">${this.project_hosting}</a>
            		    </div>
            		</div>
        		</div>
        		<div class="ProjectPopup">
        		    <span class="close">&times</span>
        		    <span class="ImageBlock">
        		        <span class="ActiveImage">
        		            <img class="activeimage" src="${this.images[0]}" />
        		        </span>
        		        <div class="ImageBar">
        		            ${this.images_bar(this.images)}
        		        </div>
        		    </span>
        		    <div class="description">
        		        <h3 class="sectionheader descriptionheader ${this.smaller_gap}">${this.name}</h3>
        		        <div>
        		            ${this.description}
        		        </div>
        		    </div>
        		    <div class="techstack">
        		        <h3 class="sectionheader techstackHeader">Developed Using:</h3>
        		        <div class="tools">
        		            ${this.logo_bar(this.logos, this.logo_names)}
        		        </div>
        		    </div>
        		</div>
			</div>`;
		return html;
	}
}

export default Project;
