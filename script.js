// Function to update the price based on the input quantity and unit price
function updatePrice(input) {
  var quantity = input.valueAsNumber; // Get the numeric value of the input
  var unitPrice = parseFloat(input.dataset.price); // Get the unit price from the data attribute
  var priceCell = input.closest('tr').querySelector('.product-price'); // Get the corresponding price cell

  // Calculate the new price
  var newPrice = unitPrice * quantity;
  // Update the price cell with the new price, formatted as currency
  priceCell.textContent = '$' + newPrice.toFixed(2);
}

// Function to validate the form inputs
function validateForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var pickupTime = document.getElementById('pickupTime').value;
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Attach event listeners to the quantity inputs
  var quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      updatePrice(this);
    });
  });

  // Attach validateForm to the form's submit event
  var orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form from submitting if validation fails
    }
  });
});
