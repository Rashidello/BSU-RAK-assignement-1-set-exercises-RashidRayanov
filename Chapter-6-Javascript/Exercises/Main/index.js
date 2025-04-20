window.onload = () => {
    const input = document.querySelector("#liters"); // Selects the input element
    const button = document.querySelector("#Press"); // Selects the button element
    input.value = 1; // Sets the default value of the input to 1
    button.addEventListener("calculate", calculate); // Adds an event listener for button click
}

function calculate() {
    const liters = document.querySelector('#liters').value; // Gets the value of the liters input
    if (!liters) return; // Exits if liters is empty
    document.querySelector('#totalAmount').innerText = 1.72 * liters; // Updates the total amount
}
