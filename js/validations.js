//elements

const parentContainers = document.querySelectorAll(".read-more-container");

parentContainers.forEach((container) => {
  container.addEventListener("click", (e) => {
    const btn = e.target;
    const isReadMoreClicked = btn.className.includes("read-more-btn");

    if (!isReadMoreClicked) return;

    const curntText = btn.parentNode.querySelector(".read-more-text");
    curntText.classList.toggle("read-more-text--show");

    btn.textContent = btn.textContent.includes("Read more")
      ? "Read less"
      : "Read more";
  });
});
