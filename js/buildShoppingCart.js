/* Función para armar el carrito de compras. Completa la lista de productos seleccionados y calcula el total*/

function buildShoppingCart() {

    //Obtengo por Prompt el nombre del cliente a realizarle el cobro de productos
    const clientName = getClientName();

    if (clientName != null) {

        // Obtener todos los elementos checkbox seleccionados
        let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        buildMapOfProducts().then((products) => {

            //Obtengo el precio total de los productos seleccionados
            let total = getTotalPriceSelectedItems(checkboxes, products);

            //Guardo JSON de productos seleccionados en localStorage y lo logueo
            registerProductsInLocalStorage(checkboxes, products);

            //Obtengo el monto total con el descuento aplicado en caso de haberse ingresado un cupon
            let totalDiscount = calculateDiscount(total);

            //Muestro en consola los productos seleccionados
            logSelectedProducts();

            //----------Completo Resumen HTML----------
            completeSummary(checkboxes, total, totalDiscount, clientName);
        })
            .catch((error) => {
                console.error('Error building map of products:', error);
            });
    }
}

function getClientName() {
    let clientName = document.getElementById("clientNameInput").value;

    if (clientName == "") {
        showAlert(iconsAlerts.ERROR, 'Error!', 'Nombre de cliente vacio. Ingrese un nombre por favor')
        return null;
    }

    return clientName.toUpperCase();
}

function getTotalPriceSelectedItems(checkboxes, products) {

    let total = 0;

    /* Recorrer los checkboxes seleccionados y los busco en la lista 'products' y luego obtengo 
    el precio de cada uno para sumarlos */
    checkboxes.forEach((checkbox) => {
        const itemProduct = products.get(checkbox.dataset.description);
        total += parseFloat(itemProduct.price);
    });

    return total;
}

function registerProductsInLocalStorage(checkboxes, products) {
    /* Recorrer los checkboxes seleccionados y los busco en la lista 'products' y luego obtengo 
    el precio de cada uno*/

    const selectedProducts = [];

    checkboxes.forEach((checkbox) => {
        const itemProduct = products.get(checkbox.dataset.description);

        selectedProducts.push({
            description: checkbox.dataset.description,
            price: parseFloat(itemProduct.price)
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

async function buildMapOfProducts() {
    try {
        const listCompleted = await saveInLocalStorageProducts(); // Espera a que se complete el almacenado en localstorage

        if (listCompleted) {
            const productsFromLocalStorage = localStorage.getItem('products');

            const parsedMap = JSON.parse(productsFromLocalStorage);

            const productMap = new Map();

            parsedMap.forEach((product) => {
                productMap.set(product.description, product);
            });

            return productMap;
        } else {
            console.error('Error building list of products.');
        }
    } catch (error) {
        console.error('Error building map of products:', error);
    }
}