const products = [
  {
    title: "Wireless Headphones",
    description: "High quality sound with deep bass and noise cancellation.",
    price: 99,
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Smart Watch",
    description: "Track your fitness, heart rate, and notifications easily.",
    price: 149,
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Gaming Mouse",
    description: "RGB lighting with ultra-precise sensor and ergonomic grip.",
    price: 49,
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with powerful bass and long battery life.",
    price: 79,
    image: "https://via.placeholder.com/200"
  }
];

const container = document.getElementById("product-container");

function createCards() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="title">${product.title}</div>
      <div class="desc">${product.description}</div>
      <button class="price-btn">$${product.price}</button>
    `;

    container.appendChild(card);
  });
}

createCards();