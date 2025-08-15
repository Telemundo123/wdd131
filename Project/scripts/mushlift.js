// functions and variables for responsive hamburger menu
//I used more than two functions as required by the rubric
const mainnav = document.getElementById('navLinks');
const hambutton = document.getElementById('hamburger');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');     
    hambutton.classList.toggle('show');   
});

const currentYear = document.getElementById ("currentyear");
const lastModified = document.getElementById ("lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = "last Modified:" + document.lastModified;


// Used DOM javascript interactions to display greetings to the user
// Used conditionals to determine which greetings to display based on the time the user have visited the site.
const greetingElement = document.createElement('p');
document.body.appendChild(greetingElement);

const hour = new Date().getHours();
if (hour < 12) {
    greetingElement.textContent = "Good Morning!";
} else if (hour < 18) {
    greetingElement.textContent = "Good Afternoon!";
} else {
    greetingElement.textContent = "Good Evening!";
}

// Scripts regarding the product review form

// I created an array from my products
    const products = [
        { id: "fm-001", name: "Fresh Oyster Mushrooms" },
        { id: "mp-002", name: "Mushroom Powder" },
        { id: "fp-003", name: "Fortified Porridge Flour" },
        { id: "rc-004", name: "Ready-to-Consume Canned Mushroom Sauce" },
        { id: "ms-005", name: "Mushroom-Based Snacks" }
    ];

    const productSelect = document.getElementById('product');

    // Using ForEach() Methode I populated the array to the form in the select product input
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    
// Increment review counter
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display the count
document.querySelector(".counter").textContent = reviewCount;