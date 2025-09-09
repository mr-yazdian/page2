let spans = document.querySelectorAll("span.bold");

spans.forEach(span => {
  span.addEventListener("click", () => {
    span.classList.toggle("blcak-bold");
  });
});


