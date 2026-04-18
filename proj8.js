const productList = document.getElementById("productList");

function getProductsArray() {
  return Array.from(productList.querySelectorAll(".product"));
}

function renderProducts(sortedProducts) {
  productList.innerHTML = "";
  sortedProducts.forEach(product => productList.appendChild(product));
}

function sortLowToHigh() {
  const products = getProductsArray();

  const sorted = products.sort((a, b) => {
    return Number(a.dataset.price) - Number(b.dataset.price);
  });

  renderProducts(sorted);
}

function sortHighToLow() {
  const products = getProductsArray();

  const sorted = products.sort((a, b) => {
    return Number(b.dataset.price) - Number(a.dataset.price);
  });

  renderProducts(sorted);
}