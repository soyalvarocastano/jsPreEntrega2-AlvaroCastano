/* desarrollo de aplicacion de control de stock */

/* funcionalidades

1. permitir a un usuario iniciar seccion con un usuario y contraseña
2. una vez el usuario haya iniciado seccion podra empezar a utilizar la aplicacion
3. la aplicacion permite agregar un producto con su id, nombre, cantidad inicial, cantidad total
4. cuando el usuario seleccion el producto podra sacar las unidades que desee siempre y cuando hayan las cantidades necesarias
5. se podra ver los productos que hay y cuantas cantidades hay */

/* inicio de seccion */

function login(){
    const name = "ALVARO";
    const password ="12345";

    const username = prompt("introduce tu nombre de usuario");
    const userpasswor =prompt("introduce tu contraseña");

    console.log( "nombre de usuario ingresado:", username)
    console.log("contraseña ingresada:", userpasswor)

    if(username == name && userpasswor == password) {
        console.log("Validación exitosa. Usuario autenticado.");
        alert("inicio de seccion exitoso. bienvenido, alvaro!");
    } else {
        console.log("Validación fallida. Nombre de usuario o contraseña incorrectos.");
        alert("nombre de usuario o contraseña incorrectos.")
    }
}

login();

//array de productos
const productos = [];
const siguienteid = 1;

//funcion para agregar un producto
function agregarProducto(){
    const nombreProducto = prompt("introduce el nombre del producto:");
    const cantidadProducto = prompt("introduce la cantidad inicial del producto");

    if(nombreProducto && !isNaN(cantidadProducto) && cantidadProducto > 0 ){
        const nuevoProducto = {
            id: siguienteid,
            nombre: nombreProducto,
            cantidad:cantidadProducto
        }

        productos.push(nuevoProducto);
    

        console.log("producto agregado:", nuevoProducto);
        console.log("productos actializados:", productos);
    }else {
        alert("Por favor, ingresa un nombre válido y una cantidad mayor a 0.");
    }
}


//funcion para mostrar los productos
function mostrarProductos() {
    console.log("Lista de productos:");
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`);
    });
}

agregarProducto();
mostrarProductos();

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

function gestionProductos() {
    while (true) {
        const opcion = prompt("¿Qué deseas hacer?\n1. Agregar un nuevo producto\n2. Restar unidades de un producto\n3. Salir");

        switch(opcion) {
            case "1":
                agregarProducto();
                mostrarProductos();
                break;
            case "2":
                restarUnidades();
                mostrarProductos();
                break;
            case "3":
                console.log("Saliendo de la gestión de productos.");
                return;
            default:
                alert("Opción no válida. Por favor, elige 1, 2 o 3.");
        }
    }
}

gestionProductos();
