import about from "./about";
import home from "./home";
import menu from "./menu";
import reserve from "./reserve";
import contact from "./contact";

function clearChildren(parent) {
	while (parent.firstChild) {
		parent.firstChild.remove();
	}
}
const content = document.getElementById("content");
const navBar = document.getElementsByClassName("nav")[0];
navBar.addEventListener("click", (e) => {
	let nav = e.target;
	let activeLink = nav.closest(".nav li");
	if (!activeLink) return;
	clearChildren(content);
	let activeItem = activeLink.firstChild;
	let appendElement;
	switch (activeItem.firstChild.tagName) {
		case "H2":
			switch (activeItem.innerText) {
				case "About us":
					appendElement = about();

					break;
				case "Reservations":
					appendElement = reserve();

					break;
				case "Menu":
					appendElement = menu();

					break;
				case "Contact us":
					appendElement = contact();

					break;

				default:
					break;
			}

			break;

		default:
			appendElement = home();
			break;
	}
	content.appendChild(appendElement);
});
window.addEventListener("DOMContentLoaded", () => {
	clearChildren(content);
	let appendElement;
	appendElement = home();
	content.appendChild(appendElement);
});