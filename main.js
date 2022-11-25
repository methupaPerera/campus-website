window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
})

const menuItem = document.querySelector("ul.navBar");
const menuBtn = document.querySelector("#open-menu-button");
const closeBtn = document.querySelector("#close-menu-button");

menuBtn.addEventListener("click", () => {
    menuItem.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
    menuItem.style.display = "none";
});