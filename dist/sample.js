// Are the btns decorated of not
let decorated = false;

// Grab the button to decorate
var decorate = document.querySelector("button.decorate");
// Grab wrapper
var wrapper = document.querySelector(".wrapper");

// Handle action on the decorate btn
decorate.addEventListener("click", e => {
	decorateBtns();
});

function decorateBtns() {
	if (decorated) {
		return;
	}
	// Grab btns
	let btns = document.querySelectorAll(".btn");
	// decorate them
	btns.forEach((btn, idx) => {
		btn.setAttribute("role", "button");
		btn.setAttribute("aria-pressed", "false");
		btn.setAttribute("tabindex", "0");
	});
	// You don't get keyboard handler by default on converted btns: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Required_JavaScript_Features
	wrapper.addEventListener("keydown", e => {
			if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
				toggleBtn(e.target);
			}
		});
	decorated = true;
}

function toggleBtn(ele) {
	ele.setAttribute(
		"aria-pressed",
		ele.getAttribute("aria-pressed") === "true" ? "false" : "true"
	);
}

function showBox(){
    document.getElementById("maybe-box").style.display="flex";
}
function byeBox(){
    document.getElementById("maybe-box").style.display="none";
}

function showNext(){
    document.getElementById("next-box").style.display="flex";
}
function byeNext(){
    document.getElementById("next-box").style.display="none";
}