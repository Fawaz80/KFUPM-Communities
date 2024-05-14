// Close the overlay when clicking outside of it
const newEventButton = document.getElementById("inputButtonPlus");
const overlayEventUpload = document.getElementById("overlay");
const cancelEventUpload = document.getElementById("cancelButton");
const submitEventUpload = document.getElementById("saveButton");

//open overlay of creating events
newEventButton.addEventListener("click", function (event) {
	event.preventDefault();
	overlayEventUpload.style.display = "flex";
	overlayEventUpload.style.justifyContent = "center";
	overlayEventUpload.style.alignItems = "center";
    cancelEventUpload.style.color = "white";
    submitEventUpload.style.color = "white";
});

//close overlay of creating events
cancelEventUpload.addEventListener("click", function (event) {
	event.preventDefault();
	overlayEventUpload.style = "none";
});