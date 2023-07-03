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
    do {
        clientName = prompt("Compra realizada por: ");
    } while (clientName == "");

    return clientName.toUpperCase();
}