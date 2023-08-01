// Obtengo la lista de productos
async function getProducts() {
  try {
    const response = await fetch(`https://my-json-server.typicode.com/maurogalday/coderhouse-js/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Espero a obtener la lista de productos y las almaceno en localstorage
async function saveInLocalStorageProducts() {
  const products = await getProducts();

  localStorage.setItem("products", JSON.stringify(products));

  return true;
}

// Metodo auxiliar para crear un producto en la lista de productos
function createProductListItem(product) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  checkbox.dataset.description = product.description;

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(` ${product.description} ($${product.price})`));

  li.appendChild(label);

  return li;
}

async function buildListProductsCheckbox() {
  try {
    const listCompleted = await saveInLocalStorageProducts();

    if (listCompleted) {
      const products = JSON.parse(localStorage.getItem("products"));

      const productsList = document.getElementById('productsList');

      products.forEach((product) => {
        const listItem = createProductListItem(product);
        productsList.appendChild(listItem);
      });
    } else {
      console.error('Error building list of products.');
    }
  } catch (error) {
    console.error('Error completing checkboxes:', error);
  }
}

buildListProductsCheckbox();