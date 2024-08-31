document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImageUrl = document.getElementById('product-image-url').value;
    
    // Create a new product card
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${productImageUrl}" alt="${productName}">
        </div>
        <div class="product-info">
            <h3>${productName}</h3>
            <p class="price">₹ ${productPrice}</p>
        </div>
    `;
    
    // Add the new product card to the product grid
    document.getElementById('product-grid').appendChild(productCard);
    
    // Clear the form
    document.getElementById('product-form').reset();
});
