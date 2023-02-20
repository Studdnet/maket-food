const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");
const icons = document.querySelectorAll(".navbar a");
const iconsActive = document.querySelector("#active");

menu.addEventListener("click", ()=> {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
});

function linkHomeActive () {
	if (!iconsActive.classList.contains("active")) {
		iconsActive.classList.add("active");
	}
}

icons.forEach(icon => {
	icon.addEventListener("mouseover", ()=>{
		iconsActive.classList.remove("active");
	});
});

icons.forEach(icon => {
	icon.addEventListener("mouseout", ()=>{
		iconsActive.classList.add("active");
	});
});


