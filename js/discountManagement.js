const btnSaveDiscount = document.getElementById("btnSaveDiscount");
const btnClearDiscounts = document.getElementById("btnClearDiscounts");

btnSaveDiscount.addEventListener("click", () => {
  let discountName = document.getElementById("discountName").value.toUpperCase();
  let discountValue = document.getElementById("discountValue").value;

  const regexNumbers = /^-?\d*\.?\d+$/;

  if (!regexNumbers.test(discountValue)) {
    showAlert(iconsAlerts.ERROR, 'Validacion de descuento', 'Solo se pueden ingresar numeros enteros o decimales');
    return null;
  }

  localStorage.getItem(discountName);

  if (localStorage.getItem(discountName) == null) {
    localStorage.setItem(discountName, discountValue);
    completeDiscountsInHtml(discountName, discountValue);

    showAlert(iconsAlerts.SUCCESS, 'Descuento almacenado con exito');
  } else {
    showAlert(iconsAlerts.WARNING, 'Descuento ya existente');
  }
});

function completeDiscountsInHtml(discountName, discountValue) {
  let productsList = document.getElementById("discountsCharged");

  const li = document.createElement('li');
  const label = document.createElement('label');

  label.appendChild(document.createTextNode(discountName + ": " + discountValue + "%"));

  li.appendChild(label);
  productsList.appendChild(li);
}