// Function to add a product to the cart
function addToCart(productName, price, quantityId) {
  var quantityInput = document.getElementById(quantityId);
  var quantity = quantityInput.valueAsNumber;

  var cart = JSON.parse(localStorage.getItem('cart') || '{}');

  if (cart[productName]) {
    cart[productName].quantity += quantity;
  } else {
    cart[productName] = { price: price, quantity: quantity };
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  loadCartAndPopulateOrderTable(); // Refresh the order table
}

// Function to update the price based on the input quantity and unit price
function updatePrice(input) {
  var quantity = input.valueAsNumber;
  var unitPrice = parseFloat(input.dataset.price);
  var priceCell = input.closest('tr').querySelector('.product-price');

  var newPrice = unitPrice * quantity;
  priceCell.textContent = '$' + newPrice.toFixed(2);

  var productName = input.closest('tr').querySelector('.product-name').textContent;
  updateCart(productName, quantity); // Update the cart with the new quantity
}

// Function to update the cart when quantity changes
function updateCart(productName, quantity) {
  var cart = JSON.parse(localStorage.getItem('cart') || '{}');
  if (cart[productName]) {
    cart[productName].quantity = quantity;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from localStorage and populate the order table
function loadCartAndPopulateOrderTable() {
  var cart = JSON.parse(localStorage.getItem('cart') || '{}');
  var orderTable = document.getElementById('orderSummary').getElementsByTagName('tbody')[0];
  orderTable.innerHTML = ''; // Clear existing rows

  Object.keys(cart).forEach(function(productName) {
    var product = cart[productName];
    var row = orderTable.insertRow();
    var nameCell = row.insertCell(0);
    var descCell = row.insertCell(1);
    var priceCell = row.insertCell(2);
    var quantityCell = row.insertCell(3);
    var totalCell = row.insertCell(4);

    nameCell.textContent = productName;
    nameCell.classList.add('product-name');
    // Insert product description here if available
    priceCell.textContent = '$' + product.price.toFixed(2);
    quantityCell.innerHTML = `<input type="number" min="0" value="${product.quantity}" class="quantity-input" data-price="${product.price}" onchange="updatePrice(this)">`;
    totalCell.classList.add('product-price');
    totalCell.textContent = '$' + (product.price * product.quantity).toFixed(2);
  });
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  loadCartAndPopulateOrderTable();

  var orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevent form from submitting if validation fails
      }
    });
  }
});

