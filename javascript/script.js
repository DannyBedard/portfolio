"use strict";

/**
 * Création du menu hamburger
 */
function myFunction() {
	let x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}