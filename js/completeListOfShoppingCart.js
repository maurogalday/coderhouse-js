function completeListOfShoppingCart() {
    // Obtener todos los elementos checkbox seleccionados con la clase "item"
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let productList = document.getElementById("productsList");
    productList.innerHTML = "";   
    checkboxes.forEach(function (checkbox) {
        

        let label = checkbox.parentElement;
       // Crear el item <li>
       let li = document.createElement("li");

       // Establecer el texto del item <li>
       li.textContent = label.textContent.trim();

       // Agregar el item <li> al <ul>
       productList.appendChild(li);
    });
}
    