function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("mobileMenu");
  
    navbar.classList.toggle("responsive");
  
    if (menuIcon.textContent === "$") {
      menuIcon.textContent = "x";
    } else {
      menuIcon.textContent = "$";
    }
}