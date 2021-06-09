!function openMobileMenu(){

    const menuIcon = document.getElementById("hamburger-menu")
    const menuMobile = document.getElementById("menu-items-mobile")

    menuIcon.addEventListener("click", () => {

        if(menuMobile.style.display == "flex"){
            menuMobile.style.display = "none"
        } else {
            menuMobile.style.display = "flex"
        };
        
    });

}();