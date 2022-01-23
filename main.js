var hamburgerMenu = document.querySelector("#hamburger-menu");
var hamburgerIcon = document.querySelector("#hamburger-icon");
var toggleItems = document.querySelectorAll(".hide");
var main = document.querySelector(".main");

hamburgerMenu.addEventListener('click',() => {
    toggleItems.forEach((link) => {
        link.classList.toggle("show");
    })
    hamburgerIcon.classList.toggle("hide");
    main.classList.toggle("hide");

    // För att hamburgaren ska täcka hela skärmen vid öppen. Kopplat till CSS.
    // if(hamburgerMenu.classList.contains("index")){
    //     var introContainer = document.querySelector(".introduction.index");
    //     var headingContainer = document.querySelector(".content-heading.index");
    //     var mainContainer = document.querySelector(".main.index");
    //     var footerContainer = document.querySelector(".footer.index");
    //     var headerContainer = document.querySelector(".header.index");
    //     introContainer.classList.toggle("hide-background");
    //     headingContainer.classList.toggle("hide-background");
    //     mainContainer.classList.toggle("hide-background");
    //     footerContainer.classList.toggle("hide-background");
    //     headerContainer.classList.toggle("show-background");
    //   }
})

