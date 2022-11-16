//criar classe show-links
const pressBTN = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

pressBTN.addEventListener("click", function() {
    console.log(links.classList.contains("links"))
    if(links.classList.contains("show-links")) {
        links.classList.remove("show-links")
    } else {
        links.classList.add("show-links")
    }
})