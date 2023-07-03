function completeListOfShoppingCart(checkboxes) {
    //Obtengo la lista de productos a completar en el html
    let productsList = document.getElementById("productsList");

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
    