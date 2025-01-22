let nav = document.getElementById('navlist');
let navelems = document.getElementsByClassName('navelem');

function toggleNav () {       

    if ( nav.style.display === "" ) {
    nav.style.display = "block";
    for (let i = 0; i < navelems.length; i++) {
        navelems[i].style.padding = "2em 0em 0em 0em";
      }
    }
    else {
    nav.style.display = "";
    }
}

function windowResizeHandler () {
    if ( screen.width > 500 ) {
    nav.style.display = "";
    }
}

window.addEventListener("resize", windowResizeHandler);