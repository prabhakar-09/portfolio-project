function toggleMenu(){
// targeting whole element in the HTML 
// block using the inbuilt JS method
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}