// this file is responsible for tracking which community the user is trying to access

document.addEventListener("DOMContentLoaded", function () {
	const comTracker = document.getElementById("comTracker");
	console.log("yo");
	if (comTracker) {
		comTracker.addEventListener("click", function (event) {
			if (event.target.tagName === "LI") {
				const text = event.target.innerText;

				fetch("/update-session", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ com: text }),
				})
					.then((response) => {
						if (response.ok) {
							console.log("Session data updated successfully");
						} else {
							console.error("Failed to update session data");
						}
					})
					.catch((error) => {
						console.error("Error updating session data:", error);
					});
			}
		});
	}
});

document.addEventListener("DOMContentLoaded", async function () {
	const toInput = document.getElementById("toInput");

	// Fetch user's communities from the server
	try {
		const response = await fetch("/user/communities");
		if (!response.ok) {
			throw new Error("Failed to fetch user communities");
		}
		const data = await response.json();
		const communities = data.communities;

		// Populate the <select> dropdown with user's communities
		communities.forEach((community) => {
			const option = document.createElement("option");
			option.value = community;
			option.textContent = community;
			toInput.appendChild(option);
		});
	} catch (error) {
		console.error("Error fetching user communities:", error);
	}
});
