import "./style.css";
import nightwind from "nightwind/helper";

nightwind.init();

const toggleDarkMode = document.querySelector("#toggle-darkmode");

toggleDarkMode.addEventListener("click", () => nightwind.toggle());
