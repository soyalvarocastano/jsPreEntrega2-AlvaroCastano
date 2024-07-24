/* desarrollo de aplicacion de control de stock */

/* funcionalidades

1. permitir a un usuario iniciar seccion con un usuario y contraseña
2. una vez el usuario haya iniciado seccion podra empezar a utilizar la aplicacion
3. la aplicacion permite agregar un producto con su id, nombre, cantidad inicial, cantidad total
4. cuando el usuario seleccion el producto podra sacar las unidades que desee siempre y cuando hayan las cantidades necesarias
5. se podra ver los productos que hay y cuantas cantidades hay */

/* inicio de seccion */



const login = () => {

    const name = "ALVARO";
    const password = "12345";

    const username = document.getElementById("user").value;
    const userpassword = document.getElementById("password").value;

    const usuario = {userName:username, userPassword: userpassword}
    console.log(usuario)

    if (username === name && userpassword === password) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        console.log("usuario guardado correctmente")
        window.location.href = "gestion.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }

};

document.getElementById("btnSingin").addEventListener("click", login);

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("gestion.html")) {
        initGestionPage();
    }
});

const initGestionPage = () => {
    loadProducts();
    document.getElementById("addProductButton").addEventListener("click", addProduct);
    document.getElementById("logoutButton").addEventListener("click", logout);
};

// funcion para agregar un producto 

const loadProducts = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";
    products.forEach((product, index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = product.name;
        row.insertCell(2).innerText = product.quantity;
        row.insertCell(3).innerHTML = `<button class="btn btn-primary" onclick="editProduct(${index})">Editar</button>`;
    });
};

const addProduct = () => {
    const productName = document.getElementById("ProductName").value;
    const productQuantity = document.getElementById("productQuantity").value;
    if (productName && productQuantity) {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push({ name: productName, quantity: productQuantity });
        localStorage.setItem("products", JSON.stringify(products));
        loadProducts();
        document.getElementById("ProductName").value = "";
        document.getElementById("productQuantity").value = "";
        alert("Producto agregado exitosamente.");
    } else {
        alert("Por favor complete todos los campos.");
    }
};

const editProduct = (index) => {
    // Implementar la edición del producto
};

const logout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
};


// Array de productos
/* let productos = [];
let siguienteId = 1; */

// Función para agregar un producto
/* function agregarProducto() {
    const nombreProducto = prompt("Introduce el nombre del producto:");
    const cantidadProducto = parseInt(prompt("Introduce la cantidad inicial del producto:"), 10);

    if (nombreProducto && !isNaN(cantidadProducto) && cantidadProducto > 0) {
        const nuevoProducto = {
            id: siguienteId,
            nombre: nombreProducto,
            cantidad: cantidadProducto
        };

        productos.push(nuevoProducto);

        
        siguienteId++;

        console.log("Producto agregado:", nuevoProducto);
        console.log("Productos actualizados:", productos);
    } else {
        alert("Por favor, ingresa un nombre válido y una cantidad mayor a 0.");
    }
} */

// Función para mostrar todos los productos
/* function mostrarProductos() {
    if (productos.length === 0) {
        console.log("No hay productos en la lista.");
    } else {
        productos.forEach(producto => {
            alert(`ID: ${producto.id},  Nombre: ${producto.nombre},  Cantidad: ${producto.cantidad}`);
        });
    }
} */

// Función para restar unidades de un producto
/* function restarUnidades() {
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
} */

/* function sumarUnidades() {
    const idProducto = parseInt(prompt("Introduce el ID del producto para sumar unidades:"), 10);
    const cantidadAsumar = parseInt(prompt("Introduce la cantidad a sumar:"), 10);

    const producto = productos.find(p => p.id === idProducto);

    if (producto) {
        if (!isNaN(cantidadAsumar) && cantidadAsumar > 0 && producto.cantidad >= cantidadAsumar) {
            producto.cantidad += cantidadAsumar;
            console.log(`Se han sumado ${cantidadAsumar} unidades del producto con ID ${idProducto}.`);
            console.log("Productos actualizados:", productos);
        } else {
            alert("Cantidad inválida o insuficiente.");
        }
    } else {
        alert("Producto no encontrado.");
    }
}


if (login()) {
    gestionProductos();
}
 */
