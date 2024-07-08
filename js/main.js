/* desarrollo de aplicacion de control de stock */

/* funcionalidades

1. permitir a un usuario iniciar seccion con un usuario y contraseña
2. una vez el usuario haya iniciado seccion podra empezar a utilizar la aplicacion
3. la aplicacion permite agregar un producto con su id, nombre, cantidad inicial, cantidad total
4. cuando el usuario seleccion el producto podra sacar las unidades que desee siempre y cuando hayan las cantidades necesarias
5. se podra ver los productos que hay y cuantas cantidades hay */

/* inicio de seccion */

function login() {
    const name = "ALVARO";
    const password = "12345";

    const username = prompt("Introduce tu nombre de usuario:");
    const userpassword = prompt("Introduce tu contraseña:");

    console.log("Nombre de usuario ingresado:", username);
    console.log("Contraseña ingresada:", userpassword);

    if (username === name && userpassword === password) {
        console.log("Validación exitosa. Usuario autenticado.");
        alert("Inicio de sesión exitoso. ¡Bienvenido, ALVARO!");
        return true;
    } else {
        console.log("Validación fallida. Nombre de usuario o contraseña incorrectos.");
        alert("Nombre de usuario o contraseña incorrectos.");
        return false;
    }
}

// Array de productos
let productos = [];
let siguienteId = 1;

// Función principal para interactuar con el usuario
function gestionProductos() {
    while (true) {
        const opcion = prompt("¿Qué deseas hacer?\n1. Agregar un nuevo producto\n2. Restar unidades de un producto\n3. Mostrar todos los productos\n4. Salir");

        switch (opcion) {
            case "1":
                agregarProducto();
                mostrarProductos();
                break;
            case "2":
                restarUnidades();
                mostrarProductos();
                break;
            case "3":
                mostrarProductos();
                break;
            case "4":
                console.log("Saliendo de la gestión de productos.");
                return;
            default:
                alert("Opción no válida. Por favor, elige 1, 2, 3 o 4.");
        }
    }
}

// Función para agregar un producto
function agregarProducto() {
    const nombreProducto = prompt("Introduce el nombre del producto:");
    const cantidadProducto = parseInt(prompt("Introduce la cantidad inicial del producto:"), 10);

    if (nombreProducto && !isNaN(cantidadProducto) && cantidadProducto > 0) {
        const nuevoProducto = {
            id: siguienteId,
            nombre: nombreProducto,
            cantidad: cantidadProducto
        };

        productos.push(nuevoProducto);

        // Incrementar el ID para el siguiente producto
        siguienteId++;

        console.log("Producto agregado:", nuevoProducto);
        console.log("Productos actualizados:", productos);
    } else {
        alert("Por favor, ingresa un nombre válido y una cantidad mayor a 0.");
    }
}

// Función para mostrar todos los productos
function mostrarProductos() {
    console.log("Lista de productos:");
    if (productos.length === 0) {
        console.log("No hay productos en la lista.");
    } else {
        productos.forEach(producto => {
            console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`);
        });
    }
}

// Función para restar unidades de un producto
function restarUnidades() {
    const idProducto = parseInt(prompt("Introduce el ID del producto para restar unidades:"), 10);
    const cantidadARestar = parseInt(prompt("Introduce la cantidad a restar:"), 10);

    const producto = productos.find(p => p.id === idProducto);

    if (producto) {
        if (!isNaN(cantidadARestar) && cantidadARestar > 0 && producto.cantidad >= cantidadARestar) {
            producto.cantidad -= cantidadARestar;
            console.log(`Se han restado ${cantidadARestar} unidades del producto con ID ${idProducto}.`);
            console.log("Productos actualizados:", productos);
        } else {
            alert("Cantidad inválida o insuficiente.");
        }
    } else {
        alert("Producto no encontrado.");
    }
}

// Llamar a la función de gestión de productos si el usuario inicia sesión correctamente
if (login()) {
    gestionProductos();
}

