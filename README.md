# 🍽️ Sistema de Gestión de Pedidos para Restaurantes

Esta aplicación web permite gestionar los pedidos de los clientes en un restaurante. Los clientes pueden realizar pedidos de platillos y bebidas, y el sistema calculará automáticamente el total a pagar incluyendo la propina.

## 🎯 Contenido

1. 📝[Descripción](#descripción)
2. 🛠️[Tecnologías y Herramientas](#tecnologías-y-herramientas)
3. 🚀[Estructura del Proyecto](#estructura-del-proyecto)
4. 🧑‍💻[Uso](#uso)
5. 📌[Instalación](#instalación)
6. 🏗️[Contribución](#contribución)
7. ✨[Licencia](#licencia)
8. 🙈[Imagen de Referencia](#imagen-de-referencia)
9. 🌐[Ver Proyecto en la WEB](#ver-proyecto-en-la-web)

## Descripción

Este proyecto está desarrollado en JavaScript, utilizando clases para la estructura y organización del código. Además, se emplea el paradigma de programación orientada a objetos (POO) para manejar la lógica de la aplicación de manera eficiente y estructurada.

## Características

- **Registro de Clientes:** Permite ingresar la mesa y la hora del cliente.
- **Gestión de Pedidos:** Los clientes pueden seleccionar platillos y bebidas, y especificar la cantidad de cada uno.
- **Visualización de Pedidos:** Muestra un resumen de los pedidos realizados por el cliente, incluyendo detalles como el nombre del platillo, cantidad, precio y subtotal.
- **Cálculo de Propina:** Los clientes pueden seleccionar un porcentaje de propina (10%, 25%, 50%). El sistema calcula el total a pagar incluyendo la propina seleccionada.
- **Alertas Personalizadas:** Muestra alertas si los campos

## Tecnologías y Herramientas

- **HTML:** Estructura de la página.
- **CSS:** Estilos de la página.
- **JavaScript:** Lógica de la aplicación, incluyendo manipulación del DOM y gestión de pedidos.
- **Bootstrap:** Framework CSS para estilos y componentes como modales.

## Estructura del Proyecto

- **css/**: Carpeta con los estilos.
- **js/**: Carpeta con la lógica del proyecto.
  - `app.js`: Archivo principal con la lógica de la aplicación.
- **index.html**: Página principal.

## Uso

1. Clona el repositorio: `git clone [URL del repositorio]`
2. Navega a la carpeta del proyecto: `cd [nombre del proyecto]`
3. Instala la dependencia de `json-server`: `npm install -g json-server`
4. Inicia el servidor JSON Server: `json-server --watch db.json --port 4000`
5. Abre el archivo `index.html` en un navegador de tu elección.

## Instalación

No se requiere instalación adicional para utilizar este proyecto.

## Contribución

Si estás interesado en contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica (`git checkout -b mi-nueva-característica`).
3. Compromete tus cambios (`git commit -am 'Añadir alguna característica'`).
4. Empuja la rama (`git push origin mi-nueva-característica`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Imagen de Referencia

![Imagen de Referencia](https://i.postimg.cc/7ZCrV008/Calular-propina.png)

## Ver Proyecto en la WEB

Puedes ver el proyecto en funcionamiento [aquí](https://jmatochepascual.github.io/Calculadora-de-propinas/).

Todos los derechos reservados Sistema de Gestión de Pedidos para Restaurantes 2024 ©.
