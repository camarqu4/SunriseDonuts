function updatePrice(input) {
  var quantity = input.valueAsNumber; 
  var unitPrice = parseFloat(input.dataset.price); 
  var priceCell = input.closest('tr').querySelector('.product-price'); 
  var newPrice = unitPrice * quantity;
  
  priceCell.textContent = '$' + newPrice.toFixed(2);

  updateTotalCost(); // Update the total cost whenever a price is updated
}

function updateTotalCost() {
  var total = 0;
  var quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(function(input) {
      var price = parseFloat(input.getAttribute('data-price'));
      var quantity = parseInt(input.value);
      total += price * quantity;
  });
  document.getElementById('totalCost').textContent = '$' + total.toFixed(2);
}

function validateForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var pickupTime = document.getElementById('pickupTime').value;

  // Basic validation example
  if (!firstName || !lastName || !email || !phone || !pickupTime) {
    alert('Please fill out all fields.');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  var quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      updatePrice(this);
    });
    updatePrice(input); // Update the price initially for each input
  });

  var orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});
