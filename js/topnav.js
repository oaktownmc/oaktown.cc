const navbar = document.querySelector("#navbar");
const menuButton = document.querySelector("#navMenuButton");

navMenuButton.addEventListener("click", () => {
    navbar.classList.toggle("showMobileMenu");

    if (navbar.classList.contains("showMobileMenu")) {
        menuButton.textContent = "x";
    } else {
        menuButton.textContent = "$";
    }
});
