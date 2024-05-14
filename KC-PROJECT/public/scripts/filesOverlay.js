// Close the overlay when clicking outside of it
const newMaterialButton = document.getElementById("newMaterialButton");
const overlayFileUpload = document.getElementById("overlayFileUpload");
const cancelFileUpload = document.getElementById("cancelFileUpload");

//open overlay of uploading files
newMaterialButton.addEventListener("click", function (event) {
	event.preventDefault();
	overlayFileUpload.style.display = "flex";
	overlayFileUpload.style.justifyContent = "center";
	overlayFileUpload.style.alignItems = "center";
});

//close overlay of uploading files
cancelFileUpload.addEventListener("click", function (event) {
	event.preventDefault();
	overlayFileUpload.style = "none";
});