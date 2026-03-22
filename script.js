let cartItemTextInput = document.getElementById("cartItemTextInput");
let cartItemsContainer = document.getElementById("cartItemsContainer");

function sai() {
    let d = cartItemTextInput.value;

    let cartItemEl = document.createElement("li");
    cartItemEl.textContent = d;

    cartItemTextInput.value = "";
    cartItemsContainer.appendChild(cartItemEl);


}