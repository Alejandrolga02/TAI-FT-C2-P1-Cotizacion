window.onload = () => {
	let contenido = document.querySelector("#navbarContenido");
	let boton = document.querySelector("#navbarBoton");
	boton.addEventListener("click", () => {
		contenido.classList.toggle("hidden");
		contenido.classList.toggle("flex");
	});
};
