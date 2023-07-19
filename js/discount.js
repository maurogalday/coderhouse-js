//Map que contiene los cupones de descuentos
// const mapDiscounts = new Map();
// mapDiscounts.set('CODER50', 50);
// mapDiscounts.set('CODER30', 30);

//Calcula el descuento sobre el monto total en caso de que se aplique algun cupon
// function calculateDiscount(amountTotal, codeDiscount) {
//     codeDiscount = codeDiscount.toUpperCase();

//     if (codeDiscount == ""){
//         return amountTotal;
//     }

//     if (mapDiscounts.has(codeDiscount)) {
//         return amountTotal-(amountTotal*mapDiscounts.get(codeDiscount)/100);
//     }

//     alert("El codigo ingresado no es valido");
// }

function calculateDiscount(amountTotal, codeDiscount) {
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