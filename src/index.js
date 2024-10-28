// imports
import "./styles.css";
import beeImage from "./assets/images/bee.svg";
import createHomePage from "./createHomePage.js";
import createMenuPage from "./createMenuPage.js";
import createContactPage from "./createContactPage.js";

// html handles
const contentBox = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

// clear the page
function clearContentBox() {
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }
}

function generateHomePage() {
  clearContentBox();
  createHomePage(contentBox, beeImage);

  menuButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");
  homeButton.classList.add("active-button");
}

function generateMenuPage() {
  clearContentBox();
  createMenuPage(contentBox);

  contactButton.classList.remove("active-button");
  homeButton.classList.remove("active-button");
  menuButton.classList.add("active-button");
}

function generateContactPage() {
  clearContentBox();
  createContactPage(contentBox);

  homeButton.classList.remove("active-button");
  menuButton.classList.remove("active-button");
  contactButton.classList.add("active-button");
}

// event listeners
homeButton.addEventListener("click", generateHomePage);
menuButton.addEventListener("click", generateMenuPage);
contactButton.addEventListener("click", generateContactPage);

// run at page load
createHomePage(contentBox, beeImage);
