let nav = document.getElementById('navlist');
let navelems = document.getElementsByClassName('navelem');

function toggleNav () {       

    if ( nav.style.display === "" ) {
    nav.style.display = "block";
    for (let i = 0; i < navelems.length; i++) {
        navelems[i].style.padding = "2em 0em 0em 0em";
      }
    document.getElementById('name_page').style.margin = "0.5em 0em 0.3em 0em";
    document.getElementById('footer_copyright').style.paddingTop = "3.5em";
    }
    else {
    nav.style.display = "";
    document.getElementById('name_page').style.margin = "2.5em 0em 0.3em 0em";
    document.getElementById('footer_copyright').style.paddingTop = "9em";
    }
}


function windowResizeHandler () {
    if ( screen.width > 500 )
    nav.style.display = "";
}

window.addEventListener("resize", windowResizeHandler);