/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMobileNav() {
  var x = document.getElementById("menu-links");
  if (x.className === "other-links") {
    x.className += " responsive";
  } else {
    x.className = "other-links";
  }

  var menuText = document.getElementById("open-menu-link");
  if (menuText.textContent === "Menu") {
    menuText.textContent = "Close Menu";
    menuText.className = "open-menu subtle-text"
  } else {
    menuText.textContent = "Menu";
    menuText.className = "open-menu"
  }
}
