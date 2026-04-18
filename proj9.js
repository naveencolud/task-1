const products = [
  { id: 1, title: "Laptop", category: "electronics" },
  { id: 2, title: "Gold Ring", category: "jewelery" },
  { id: 3, title: "Men T-Shirt", category: "men's clothing" },
  { id: 4, title: "Women Dress", category: "women's clothing" }
];

const container = document.getElementById("productContainer");
const filter = document.getElementById("categoryFilter");

function displayProducts(list) {
  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.textContent = `${product.title} - ${product.category}`;
    container.appendChild(div);
  });
}

// Initial render
displayProducts(products);

// Filter event
filter.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === value);
    displayProducts(filtered);
  }
});