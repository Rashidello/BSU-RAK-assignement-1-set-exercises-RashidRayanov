window.onload = () => {
    const input = document.querySelector("#liters");
    const button = document.querySelector("#Press");
    input.value = 1;
    button.addEventListener("calculate",calculate)
}
function calculate () {
    const liters = document.querySelector('#liters').value;
    if (!liters) return;
    document.querySelector('#totalAmount').innerText = 1.72 * liters;
}