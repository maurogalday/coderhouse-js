const btnSaveDiscount = document.getElementById("btnSaveDiscount");

btnSaveDiscount.addEventListener("click", () => {
    let discountName = document.getElementById("discountName").value;
    let discountValue = document.getElementById("discountValue").value;

    const regexNumeros = /^-?\d*\.?\d+$/;

  if (!regexNumeros.test(discountValue)) {
    Swal.fire({
        icon: 'error',
        title: 'Validacion de descuento',
        text: 'Solo se pueden ingresar numeros enteros o decimales',
        confirmButtonText: 'Aceptar',
      })
  } else {
    
    localStorage.setItem( discountName.toUpperCase(), discountValue);

    Swal.fire({
        icon: 'success',
        title: 'Descuento almacenado con exito',
        confirmButtonText: 'Aceptar',
      })
    }
});