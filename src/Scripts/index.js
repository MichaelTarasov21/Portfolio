function SelectImage(image, itemlist) {
	for (let i = 0; i < itemlist.length; i++) {
		// Removes the selected image tag from all images
		const item = itemlist.item(i);
		item.classList.remove("selectedimage");
	}
	image.classList.add("selectedimage");

    document.getElementsByClassName("ActiveImage")[0].innerHTML = `<img class="activeimage" src="${image.src}" />`
}

function MakeImagesClickable() {
	const ActiveProjectImages = document.getElementsByClassName("sampleimage");

	for (let i = 0; i < ActiveProjectImages.length; i++) {
		const item = ActiveProjectImages.item(i);
		item.addEventListener("click", function () {
			SelectImage(item, ActiveProjectImages);
		});
	}
}

MakeImagesClickable();
