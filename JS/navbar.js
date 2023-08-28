document.getElementById("menu-button").addEventListener("click", function () {
  let navbar = document.getElementById("nav-list");
  let blackout = document.getElementById("blackout-body-navlist");
  if (navbar.style.visibility === "hidden") {
    navbar.style.visibility = "visible";
    blackout.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
    blackout.style.visibility = "hidden";
  }
});
