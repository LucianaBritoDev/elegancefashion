document.addEventListener("DOMContentLoaded", function () {
  // Animação suave ao scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animação dos cards de produtos
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    product.addEventListener("mouseenter", function () {
      this.style.animation = "float 2s infinite ease-in-out";
    });
    product.addEventListener("mouseleave", function () {
      this.style.animation = "";
    });
  });
});
