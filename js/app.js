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

	console.log('Cliente guardado');
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


// Cargar Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	botonGuardarCliente.addEventListener('click', init);
});