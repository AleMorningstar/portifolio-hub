const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu-mobile-links a");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-aberto");

    const menuAberto = menu.classList.contains("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", "false");

    });

});