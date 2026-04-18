const container = document.getElementById("product-container");

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        displayProducts(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayProducts(products) {
    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p class="price">$${product.price}</p>
        `;

        container.appendChild(div);
    });
}

fetchProducts();