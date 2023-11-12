function addToCart(productName, price, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
        // Update quantity if product is already in cart
        cart[productIndex].quantity += quantity;
    } else {
        // Add new product to cart
        const product = {
            name: productName,
            price: price,
            quantity: quantity,
            // Assuming you add description here
            description: 'Product description here' // Update this accordingly
        };
        cart.push(product);
    }

    // Save the cart to Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
}
