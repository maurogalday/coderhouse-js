/* Función para armar el carrito de compras. 
Completa la lista de productos seleccionados y calcula el total*/


//Lista de productos con su descripcion y precio correspondiente
const products = [
    { description: "Producto 1", price: 20 },
    { description: "Producto 2", price: 1500.50 },
    { description: "Producto 3", price: 3590 },
    { description: "Producto 4", price: 150.80 }
];

function buildShoppingCart() {
    //Obtengo por Prompt el nombre del cliente a realizarle el cobro de productos
    const clientName = getClientName();

    // Obtener todos los elementos checkbox seleccionados
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    //Obtengo el precio total de los productos seleccionados
    let total = getTotalPriceSelectedItems(checkboxes);

    //Guardo JSON de productos seleccionados en localstorage y lo logueo
    registerProductsInLocalStorage(checkboxes);

    //Obtengo el cupon ingresado
    let discount = document.getElementById("discount").value;

    //Obtengo el monto total con el descuento aplicado en caso de haberse ingresado un cupon
    let totalDiscount = calculateDiscount(total, discount);

    //----------Completo HTML----------

    //Completo la lista de productos seleccionados en el carrito
    completeListOfShoppingCart(checkboxes);

    document.getElementById("clientName").textContent = clientName;

    // Actualizar el valor del monto total en el elemento con id "total"
    document.getElementById("total").textContent = total.toFixed(2);

    // Actualizar el valor del monto total con descuento en el elemento con id "totalDiscount"
    document.getElementById("totalDiscount").textContent = totalDiscount.toFixed(2);

    //Muestro en consola los productos seleccionados
    logSelectedProducts();
}

function getTotalPriceSelectedItems(checkboxes) {

    let total = 0;

    /* Recorrer los checkboxes seleccionados y los busco en la lista 'products' y luego obtengo 
    el precio de cada uno para sumarlos */
    checkboxes.forEach((checkbox) => {
        const itemPrice = products.find(product => product.description == checkbox.dataset.description);
        total += parseFloat(itemPrice.price);
    });

    return total;
}

function getClientName() {
    let clientName;

    clientName = document.getElementById("clientNameInput").value;

    return clientName.toUpperCase();
}

function registerProductsInLocalStorage(checkboxes) {
    /* Recorrer los checkboxes seleccionados y los busco en la lista 'products' y luego obtengo 
    el precio de cada uno*/

    const selectedProducts = [];

    checkboxes.forEach((checkbox) => {
        const itemPrice = products.find(product => product.description == checkbox.dataset.description);

        selectedProducts.push({
            description: checkbox.dataset.description,
            price: parseFloat(itemPrice.price)
        });

    });
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
}

function logSelectedProducts() {
    //Recupero de LocalStorage el json de productos
    let selectedProducts = localStorage.getItem("selectedProducts");

    //Recorro el json y lo logueo en consola
    selectedProducts = JSON.parse(selectedProducts);
    selectedProducts.forEach((product) => {
        console.log(product.description + " - " + product.price);
    });
}