// Función para calcular el monto total
function calcularTotal() {
    completeListOfShoppingCart();

    //Inicializo el monto total del carrito en cero
    let total = 0;

    // Obtener todos los elementos checkbox
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Recorrer los checkboxes seleccionados y sumar los valores
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let itemPrice = parseFloat(checkbox.dataset.price);
            total += itemPrice;
        }
    });

    // Actualizar el valor del monto total en el elemento con id "total"
    document.getElementById("total").textContent = total.toFixed(2);
}