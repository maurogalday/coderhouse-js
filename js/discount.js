//Calcula el descuento sobre el monto total en caso de que se aplique algun cupon
function calculateDiscount(amountTotal) {
    //Obtengo el cupon ingresado
    let codeDiscount = document.getElementById("discount").value;

    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = "";

    codeDiscount = codeDiscount.toUpperCase();

    if (codeDiscount == "") {
        return amountTotal;
    }

    const value = localStorage.getItem(codeDiscount);

    if (value != null) {
        return amountTotal - (amountTotal * value / 100);
    } else {
        errorMessage.innerText = "El codigo ingresado no es valido";
        return amountTotal;
    }
}