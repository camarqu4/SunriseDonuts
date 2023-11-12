// Example array of products
const products = [
  { name: "Glazed Classic", description: "Sweet vanilla glazed traditional donut.", price: 1.99 },
  // ... other products ...
];

function populateOrderSummary() {
  const tableBody = document.getElementById('orderSummary').getElementsByTagName('tbody')[0];
  products.forEach(product => {
    const row = tableBody.insertRow();
    // Add cells for name, description, price, quantity input, and total price
    // Add event listeners to quantity inputs to update the total price
  });
}

// Call this function when the page loads
populateOrderSummary();
