const API_URL = "https://fakestoreapi.com/products";

const container = document.getElementById("product-container");
const loader = document.getElementById("loader");

function trimText(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

async function loadProducts() {
  try {
    // Show loader before API call
    loader.style.display = "block";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    displayProducts(data);

  } catch (error) {
    container.innerHTML =
      "<p style='color:red; text-align:center;'>Error loading data</p>";
    console.error(error);

  } finally {
    // Remove loader after success or failure
    loader.style.display = "none";
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