var typed = new Typed('.typed', {
	strings: [
		'<span class="escritura">Programador y Web Developer</span>',
	],
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

const boton = document.querySelector('.menuIcon');
const nav = document.querySelector('.mobile');

boton.addEventListener('click', ()=>{
	//ANIMACION DESPLEGABLE
	nav.classList.toggle('activo');
});


function toggleMenu() {
	//ANIMACION LINEAS
	var menuIconM = document.querySelector('.menuIcon');
	var menuLinks = document.querySelector('.menuListaM');
	var menuLinksD = document.querySelector('.menuListaD');

	menuIconM.classList.toggle('active');
	menuLinks.classList.toggle('active');
	menuLinksD.classList.toggle('active');
  }