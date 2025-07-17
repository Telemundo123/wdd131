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
