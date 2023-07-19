const btnSaveDiscount = document.getElementById("btnSaveDiscount");

btnSaveDiscount.addEventListener("click", () => {
    let discountName = document.getElementById("discountName").value;
    let discountValue = document.getElementById("discountValue").value;
    localStorage.setItem( discountName.toUpperCase(), discountValue);
});