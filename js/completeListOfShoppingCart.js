function completeListOfShoppingCart() {
    // Obtener todos los elementos checkbox seleccionados
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let productsList = document.getElementById("productsList");

    //Inicializo la lista de items productsList
    productsList.innerHTML = "";   

    checkboxes.forEach(function (checkbox) {       
       
       let label = checkbox.parentElement;

       // Crear el item <li>
       let li = document.createElement("li");

       // Establecer el texto del label en el item <li>
       li.textContent = label.textContent.trim();

       // Agregar el item <li> al <ul>
       productsList.appendChild(li);
    });
}
    