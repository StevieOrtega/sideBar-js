const btn = document.getElementById("svg-btn");
const sideBarDisplay = document.getElementById("sidebar-page");
const xBtn = document.getElementById("sd-equis");
sideBarDisplay.style.display = "none";

function showSideBar() {
  if (sideBarDisplay.style.display == "none") {
    sideBarDisplay.style.display = "block";
  } else {
    sideBarDisplay.style.display = "none";
  }
}
btn.addEventListener("click", showSideBar);
xBtn.addEventListener("click", showSideBar);
