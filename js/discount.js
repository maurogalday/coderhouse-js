//Map que contiene los cupones de descuentos
const mapDiscounts = new Map();
mapDiscounts.set('CODER50', 50);
mapDiscounts.set('CODER30', 30);

//Calcula el descuento sobre el monto total en caso de que se aplique algun cupon
function calculateDiscount(amountTotal, codeDiscount) {
    codeDiscount = codeDiscount.toUpperCase();

    if (codeDiscount == ""){
        return amountTotal;
    }

    if (mapDiscounts.has(codeDiscount)) {
        return amountTotal-(amountTotal*mapDiscounts.get(codeDiscount)/100);
    }

    alert("El codigo ingresado no es valido");
}