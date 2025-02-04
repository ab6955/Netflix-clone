const cardIndex = 0; // either 0 or 1.
const totalcards = document.querySelectorAll(".card").length; // here it is 10 .
// console.log(totalcards);

const prev_btn = document.querySelector(".prev-btn");
prev_btn.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
});

const next_btn = document.querySelector(".next-btn");
next_btn.addEventListener("click", (e) => {});

document.querySelectorAll(".ques").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
