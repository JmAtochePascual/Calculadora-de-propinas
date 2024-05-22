// Selectores
const botonGuardarCliente = document.querySelector('#guardar-cliente');


// Variables
const cliente = {
	mesa: '',
	hora: '',
	pedidos: []
};


// Guardar un cliente
const init = () => {
	const mesa = document.querySelector('#mesa').value;
	const hora = document.querySelector('#hora').value;

	if ([mesa, hora].includes('')) {
		mostrarAlerta('Todos los campos son obligatorios');
		return;
	};

	asignarDatosCliente(mesa, hora);

	cerrarModal();

	mostrarSecciones();

	obtenerPlatillos();
};

// Mostrar alerta
const mostrarAlerta = (mensaje) => {
	const modalBody = document.querySelector('.modal-body');
	const existeAlerta = document.querySelector('.invalid-feedback');

	if (!existeAlerta) {

		const alerta = document.createElement('p');
		alerta.textContent = mensaje;
		alerta.classList.add('invalid-feedback', 'd-block', 'text-center', 'alerta');
		document.querySelector('.contenido').appendChild(alerta);

		modalBody.appendChild(alerta);

		setTimeout(() => {
			alerta.remove();
		}, 3000);
	}
};


// Asiganar datos cliente
const asignarDatosCliente = (mesa, hora) => {
	cliente.mesa = mesa;
	cliente.hora = hora;
};


// Cierra el modal
const cerrarModal = () => {
	const modalFormulario = document.querySelector('#formulario');
	const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
	modalBootstrap.hide();
};


// Muestra secciones ocultas
const mostrarSecciones = () => {
	const seccionesOcultas = document.querySelectorAll('.d-none');
	seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
};


// Obtiene los platillos de la API
const obtenerPlatillos = () => {
	const URL = `http://localhost:4000/platillos`;

	fetch(URL)
		.then(respuesta => respuesta.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => console.log(error));
}

// Cargar Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	botonGuardarCliente.addEventListener('click', init);
});