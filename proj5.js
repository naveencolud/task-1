const API_URL = "https://fakestoreapi.com/products";

const container = document.getElementById("product-container");
const errorBox = document.getElementById("error-message");

// helper function
function trimText(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

async function loadProducts() {
  try {
    errorBox.textContent = ""; // clear previous errors

    const response = await fetch(API_URL);

    // simulate API failure handling
    if (!response.ok) {
      throw new Error("Network response failed");
    }

    const data = await response.json();
    displayProducts(data);

  } catch (error) {
    container.innerHTML = ""; // clear products

    errorBox.textContent = "Error loading data";
    console.error("API Error:", error);
  }
}

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h4>${trimText(product.title, 20)}</h4>
      <p>${trimText(product.description, 60)}</p>
      <button class="price">$${product.price}</button>
    `;

    container.appendChild(card);
  });
}

loadProducts();