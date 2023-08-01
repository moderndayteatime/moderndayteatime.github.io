let header = document.querySelector('header');
let body = document.querySelector("body");

body.onscroll = function() {
    let scrollPosition = scrollY;
    
    if(scrollPosition > 10) {
        header.style.backgroundColor = "#FFFFFF";
    }else {
        header.style.backgroundColor = "#FFFFFF00";
    }

};


/*document.addEventListener("scroll", fuction() {
    let scrollPosition = window.scrollY,
    if (true) {
        header.style.backgroundColor = "black ";
    } else {
        header.style.backgroundColor = "black";
    }
})
*/
