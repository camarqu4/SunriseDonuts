function updatePrice(input) {
  var quantity = input.valueAsNumber; 
  var unitPrice = parseFloat(input.dataset.price); 
  var priceCell = input.closest('tr').querySelector('.product-price'); 


  var newPrice = unitPrice * quantity;
  
  priceCell.textContent = '$' + newPrice.toFixed(2);
}


function validateForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var pickupTime = document.getElementById('pickupTime').value;
}


document.addEventListener('DOMContentLoaded', function() {
  
  var quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      updatePrice(this);
    });
  });


  var orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});
