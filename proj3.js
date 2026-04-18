const API_URL = "https://fakestoreapi.com/products";

const container = document.getElementById("product-container");

// trim helper function
function trimText(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="title">${trimText(product.title, 20)}</div>
      <div class="desc">${trimText(product.description, 60)}</div>
      <button class="price-btn">$${product.price}</button>
    `;

    container.appendChild(card);
  });
}

fetchProducts();