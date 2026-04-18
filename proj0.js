const modal = document.getElementById("modal");
const viewBtn = document.getElementById("viewDetailsBtn");
const closeBtn = document.getElementById("closeModal");

// Open modal (Option A)
viewBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});