// Selectores
const botonGuardarCliente = document.querySelector('#guardar-cliente');


// Variables
const cliente = {
	mesa: '',
	hora: '',
	pedidos: []
};

const categorias = {
	1: 'Comida',
	2: 'Bebidas',
	3: 'Postres'
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
		.then(platillos => {
			mostrarPlatillos(platillos);
		})
		.catch(error => console.log(error));
}


// Muestra los platillos en el HTML
const mostrarPlatillos = (platillos) => {
	const contenido = document.querySelector('#platillos');

	platillos.forEach(platillo => {
		const { id, nombre, precio, categoria } = platillo;

		const row = document.createElement('div');
		row.classList.add('row', 'py-3', 'border-top');

		const nombrePlatilloHTML = document.createElement('div');
		nombrePlatilloHTML.textContent = nombre;
		nombrePlatilloHTML.classList.add('col-md-4');

		const precioPlatilloHTML = document.createElement('div');
		precioPlatilloHTML.textContent = `$${precio}`;
		precioPlatilloHTML.classList.add('col-md-3', 'fw-bold');

		const categoriaPlatilloHTML = document.createElement('div');
		categoriaPlatilloHTML.textContent = categorias[categoria];
		categoriaPlatilloHTML.classList.add('col-md-3');

		const inputPlatilloHTML = document.createElement('input');
		inputPlatilloHTML.type = 'number';
		inputPlatilloHTML.value = 0;
		inputPlatilloHTML.min = 0;
		inputPlatilloHTML.id = `producto-${id}`;
		inputPlatilloHTML.classList.add('form-control');
		inputPlatilloHTML.onchange = () => {
			platillo.cantidad = parseInt(inputPlatilloHTML.value);
			gestionarPlatillo(platillo);
		};

		const divInput = document.createElement('div');
		divInput.classList.add('col-md-2');
		divInput.appendChild(inputPlatilloHTML);


		row.append(nombrePlatilloHTML, precioPlatilloHTML, categoriaPlatilloHTML, divInput);
		contenido.appendChild(row);
	});
};


// Agregar platillos al cliente
const gestionarPlatillo = (platillo) => {
	const { id } = platillo;

	// Verificar si la cantidad es mayor a 0
	if (platillo.cantidad === 0) {
		console.log('eliminar del array');
		return;
	}

	// Verificar si el platillo ya existe
	if (tienePlatillo(id)) {
		console.log('actualizar cantidad');
	} else {
		agregarPlatillo(platillo);
	};
}
// Valida si el platillo ya existe en el array
const tienePlatillo = (id) => cliente.pedidos.some(pedido => pedido.id === id);


// Agrega un platillo al array de pedidos
const agregarPlatillo = (platillo) => {
	cliente.pedidos = [...cliente.pedidos, platillo];
}
// Cargar Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	botonGuardarCliente.addEventListener('click', init);
});