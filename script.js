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
  // Add validation logic here if needed
}

// Function to load cart from localStorage and populate the order table
function loadCartAndPopulateOrderTable() {
  var cart = JSON.parse(localStorage.getItem('cart') || '{}');
  var orderTable = document.getElementById('orderTable');

  Object.keys(cart).forEach(function(productName) {
    var product = cart[productName];
    var row = orderTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = productName;
    cell2.innerHTML = `<input type="number" min="0" value="${product.quantity}" class="quantity-input" data-price="${product.price}" onchange="updatePrice(this)">`;
    cell3.classList.add('product-price');
    cell3.textContent = '$' + (product.price * product.quantity).toFixed(2);
  });
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load cart and populate order table
  loadCartAndPopulateOrderTable();

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
