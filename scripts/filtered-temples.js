const mainnav = document.getElementById('navLinks');
const hambutton = document.getElementById('hamburger');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modified: " + document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Apia, Pesega, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/6007b20e832459d2d8540c15a8f5fa80d7dcff0f/full/640%2C/0/default"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/4052d9f8ff0e11edb9dbeeeeac1e97aea1b93079/full/640%2C/0/default"
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/eafebe542f696c22dd64a03e622990b9a191c411/full/640%2C/0/default"
  }
];

// Initial display (Home)
createTempleCard(temples);

// NAV LINKS
const homeTemple = document.querySelector("#home");
const oldTemple = document.querySelector("#old");
const newTemple = document.querySelector("#new");
const largeTemple = document.querySelector("#large");
const smallTemple = document.querySelector("#small");

homeTemple.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
});

oldTemple.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year < 1900;
  });
  createTempleCard(filtered);
});

newTemple.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(filtered);
});

largeTemple.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => t.area > 90000);
  createTempleCard(filtered);
});

smallTemple.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(t => t.area < 10000);
  createTempleCard(filtered);
});

// Function to create temple cards

function createTempleCard(filteredTemples) {
  const container = document.querySelector(".Album");
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}
