let spans = document.querySelectorAll("span.bold");

spans.forEach(span => {
  span.addEventListener("click", () => {
    span.classList.toggle("blcak-bold");
  });
});

let slots = document.querySelectorAll("div.slot-meno");

slots.forEach(slot => {
  slot.addEventListener("click", () => {
    slot.classList.toggle("border-g");
  });
});
