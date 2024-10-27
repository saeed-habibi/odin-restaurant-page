// imports
import "./styles.css";
import beeImage from "./assets/images/bee.svg";
import createHomePage from "./createHomePage.js";

// html handles
const contentBox = document.querySelector("#content");

createHomePage(contentBox, beeImage);
