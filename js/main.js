/* desarrollo de aplicacion de control de stock */

/* funcionalidades

1. permitir a un usuario iniciar seccion con un usuario y contraseña
2. una vez el usuario haya iniciado seccion podra empezar a utilizar la aplicacion
3. la aplicacion permite agregar un producto con su nombre, cantidad inicial, cantidad total
4. cuando el usuario seleccion el producto podra sacar las unidades que desee siempre y cuando hayan las cantidades necesarias
5. se podra ver los productos que hay y cuantas cantidades hay */


document.addEventListener("DOMContentLoaded", () => {
    
    const btnSingin = document.getElementById("btnSingin");
    if (btnSingin) {
        btnSingin.addEventListener("click", login);
    }

   
    if (window.location.pathname.includes("gestion.html")) {
        initGestionPage();
    }
});


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

const initGestionPage = () => {
    loadProducts();
    document.getElementById("addProductButton").addEventListener("click", addProduct);
    document.getElementById("editProductButton").addEventListener("click", editProduct);
    document.getElementById("logoutButton").addEventListener("click", logout);
};


const loadProducts = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";
    products.forEach((product, index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = product.name;
        row.insertCell(2).innerText = product.quantity;
    });
};


const addProduct = () => {
    const productName = document.getElementById("ProductName").value;
    const productQuantity = parseInt(document.getElementById("productQuantity").value);
    if (productName && !isNaN(productQuantity)) {
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


const editProduct = () => {
    const productName = document.getElementById("editProductName").value;
    const productQuantity = parseInt(document.getElementById("editProductQuantity").value);
    if (isNaN(productQuantity)) {
        alert("Por favor ingrese una cantidad válida.");
        return;
    }
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productFound = false;

    products = products.map(product => {
        if (product.name.toLowerCase() === productName.toLowerCase()) {
            productFound = true;
            product.quantity += productQuantity; 
        }
        return product;
    });

    if (productFound) {
        localStorage.setItem("products", JSON.stringify(products));
        loadProducts();
        document.getElementById("editProductName").value = "";
        document.getElementById("editProductQuantity").value = "";
        alert("Producto actualizado exitosamente.");
    } else {
        alert("Producto no encontrado.");
    }
};

const logout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
};


