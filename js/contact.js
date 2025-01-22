let nav = document.getElementById('navlist');
let horznavElems = document.getElementById('navlist').getElementsByClassName('horznav');
let navelems = document.getElementsByClassName('navelem');
let toInvisible = document.getElementById('not-on-menu');
let downArrows = document.querySelectorAll('ul li a i');
let dropdownHoverClass = document.querySelectorAll('ul li a');
let talkingEconAnchor = document.getElementById('talkingeconomics');
let codingAnchor = document.getElementById('coding');
let travelAnchor = document.getElementById('travel');

function windowResizeHandler () {
    if ( screen.width > 320 ) {
    nav.style.display = "";
    }
}

function toggleNav () {       

    if ( nav.style.display === "" ) {

        nav.style.display = "block";
        nav.style.height = "100vh";
        document.body.style.overflow = 'hidden';
        toInvisible.style.display = "none";

        for (let i = 0; i < horznavElems.length; i++) {
            horznavElems[i].style.display = "none";
        }

        for (let i = 0; i < navelems.length; i++) {
            if (i === 0) {
                navelems[i].getElementsByTagName('a')[0].style.fontSize = "1.3rem";
                navelems[i].style.margin = "3rem 0rem 0rem 5rem";
            }
            else {
                navelems[i].getElementsByTagName('a')[0].style.fontSize = "1.3rem";
                navelems[i].style.margin = "0.2rem 0rem 0rem 5rem";
            }
        }

        for (let i = 0; i < downArrows.length; i++) {
            downArrows[i].className = "fas fa-angle-right fa-lg";
            downArrows[i].style.position = "fixed";
            downArrows[i].style.marginTop = "0.2rem";
            downArrows[i].style.right = "9.5%";
        }

        for (let i = 0; i < dropdownHoverClass.length; i++) {
            dropdownHoverClass[i].classList.remove("dropdown-head");
        }

        talkingEconAnchor.addEventListener("click", function () {
            talkingEconAnchor.setAttribute("href","./submenus/talkingeconomics.html");
        });

        codingAnchor.addEventListener("click", function () {
            codingAnchor.setAttribute("href","./submenus/coding.html");
        });

        travelAnchor.addEventListener("click", function () {
            travelAnchor.setAttribute("href","./submenus/travel.html");
        });

    }

    else {

        // to add all the other '' to make everything revert to normal
        nav.style.display = '';
        toInvisible.style.display = '';
        document.body.style.overflow = '';
    }

}

window.addEventListener("resize", windowResizeHandler);