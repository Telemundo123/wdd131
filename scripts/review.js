// Increment review counter
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display the count
document.querySelector(".counter").textContent = reviewCount;

// Footer year
const currentYear = document.getElementById ("currentyear");
currentYear.textContent = new Date().getFullYear();
