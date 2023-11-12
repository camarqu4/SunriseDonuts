document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummaryTable = document.getElementById('orderSummary').getElementsByTagName('tbody')[0];

    cart.forEach(item => {
        const row = orderSummaryTable.insertRow();

        const cellName = row.insertCell(0);
        const cellDescription = row.insertCell(1);
        const cellPrice = row.insertCell(2);
        const cellQuantity = row.insertCell(3);
        const cellTotal = row.insertCell(4);

        cellName.innerHTML = item.name;
        cellDescription.innerHTML = item.description; // Ensure this matches what's stored in cart
        cellPrice.innerHTML = `$${item.price.toFixed(2)}`;
        cellQuantity.innerHTML = item.quantity;
        cellTotal.innerHTML = `$${(item.price * item.quantity).toFixed(2)}`;
    });
});
