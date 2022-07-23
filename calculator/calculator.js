function calcTip() {
    let subtotalElem = document.getElementById("subtotal");
    let tipElem = document.getElementById("tip");
    let totalElem = document.getElementById("total");

    totalElem.innerHTML =
      "$" + subtotalElem.value * (1 + tipElem.value / 100);
}