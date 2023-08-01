
//----------Completo HTML----------
function completeSummary(checkboxes, total, totalDiscount, clientName) {
    //Completo la lista de productos seleccionados en el carrito
    completeListOfShoppingCart(checkboxes);

    document.getElementById("clientName").textContent = clientName;

    document.getElementById("dateAndTimeOfPurchase").textContent = returnDateTimeNow();

    // Actualizar el valor del monto total en el elemento con id "total"
    document.getElementById("total").textContent = total.toFixed(2);

    // Actualizar el valor del monto total con descuento en el elemento con id "totalDiscount"
    document.getElementById("totalDiscount").textContent = totalDiscount.toFixed(2);
}

function completeListOfShoppingCart(checkboxes) {
    //Obtengo la lista de productos a completar en el html
    let productsList = document.getElementById("listOfProductsToPay");

    //Inicializo la lista de productos 'productsList'
    productsList.innerHTML = "";

    checkboxes.forEach((checkbox) => {

        let label = checkbox.parentElement;

        // Crear el item <li>
        let li = document.createElement("li");

        // Establecer el texto del label en el item <li>
        li.textContent = label.textContent.trim();

        // Agregar el item <li> al <ul>
        productsList.appendChild(li);
    });
}

// Por medio de la libreria luxon, obtengo la fecha y hora del sistema para registrar en el resumen final
function returnDateTimeNow() {
    const DateTime = luxon.DateTime;

    return DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
}