const ratingEl = document.querySelector(".rating");
const ratingResultEl = document.querySelector(".rating.result");
const btnSubmit = document.querySelector("button");

btnSubmit.addEventListener("click", () => {
  const ratingValueEl = document.querySelector('input[name="rating"]:checked');

  ratingResultEl.querySelector(".rating__result span").innerText =
    ratingValueEl.value;
  ratingEl.remove();
  ratingResultEl.classList.add("active");
});
