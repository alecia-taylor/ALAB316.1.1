let mainEl = document.querySelector("main");
mainEl.style.setProperty("background-color", "var(--main-bg)");
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"; // giving mainEl a h1
mainEl.classList.add("flex-ctr"); //adding a css class "flex-ctr"

let topMenuEl = document.getElementById("top-menu"); // caching  the nav and calling it topMenuEl
topMenuEl.style.setProperty("height", "100%"); // Giving it a height of 100%
topMenuEl.style.setProperty("background-color", "var(--top-menu-bg)"); // Setting the background color
topMenuEl.classList.add("flex-around");

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.setProperty("height", "100%");
subMenuEl.style.setProperty("background-color", "var(--sub-menu-bg)");
subMenuEl.style.setProperty("position", "absolute");
subMenuEl.style.setProperty("top", "0");
subMenuEl.classList.add("flex-around");
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (let i = 0; i < menuLinks.length; i++) {
  let a = document.createElement("a"); // Creating the anchor tag
  a.setAttribute("href", menuLinks[i].href); // Retrieving the href from menuLinks array
  a.textContent = menuLinks[i].text; // Retrieving text value from menuLinks array
  topMenuEl.appendChild(a); // Appending the anchor element to topMenuEl
}
