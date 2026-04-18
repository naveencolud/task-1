const searchBox = document.getElementById("searchBox");
const products = document.querySelectorAll(".product");

searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  products.forEach(product => {
    const title = product.textContent.toLowerCase();

    if (title.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});