const reviews = [
  {
    text: "Absolutely love this product! It exceeded my expectations.",
    author: "— Sarah J."
  },
  {
    text: "Great value for money. Highly recommend to everyone.",
    author: "— Mike B."
  },
  {
    text: "Fantastic customer service and fast delivery.",
    author: "— Priya S."
  },
  {
    text: "The quality is top-notch. Will definitely buy again.",
    author: "— Lucas M."
  },
  {
    text: "A must-have item! Very useful and well-made.",
    author: "— Emily R."
  },
  {
    text: "Five stars! This product is everything I hoped for.",
    author: "— James K."
  },
  {
    text: "Works perfectly and looks great too!",
    author: "— Olivia W."
  },
  {
    text: "User-friendly and very reliable. Thumbs up!",
    author: "— Ethan D."
  },
  {
    text: "Better than described. Totally worth the price.",
    author: "— Sophia H."
  },
  {
    text: "Impressive build quality and excellent performance.",
    author: "— Noah L."
  },
];

let index = 0;
const reviewEl = document.getElementById("review");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showReview(i) {
  reviewEl.textContent = `${reviews[i].text} ${reviews[i].author}`;
}

prevBtn.addEventListener("click", function () {
  index = (index - 1 + reviews.length) % reviews.length;
  showReview(index);
});

nextBtn.addEventListener("click", function () {
  index = (index + 1) % reviews.length;
  showReview(index);
});