// Function to update the total price dynamically
function updateTotalPrice() {
    const quantity = document.getElementById("quantity").value;
    const price = 200; // Product price
    const totalPrice = (quantity * price).toFixed(2); // Calculate total price
    document.getElementById("total-price").textContent = totalPrice;
}

// Function to validate and process the order
function processOrder() {
    const quantity = document.getElementById("quantity").value;
    const errorMessage = document.getElementById("error-message");

    // Validate quantity
    if (quantity < 1 || isNaN(quantity)) {
        errorMessage.style.display = 'block'; // Show error message
        return;
    } else {
        errorMessage.style.display = 'none'; // Hide error message
    }

    // If validation passes, process the order (for demonstration)
    alert("Your order has been placed! \n You will recieve a call within 24 hours. \nTotal: ₹" + document.getElementById("total-price").textContent);
}

// Event listener for quantity input change to update total price
document.getElementById("quantity").addEventListener("input", updateTotalPrice);

// Initial price update on page load
updateTotalPrice();
