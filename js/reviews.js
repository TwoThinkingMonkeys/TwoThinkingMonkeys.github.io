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

// Filtering book reviews

let listLang = document.querySelectorAll('.list-lang');
let listLit = document.querySelectorAll('.list-lit');
let filtersItemsArr = [Array.from(listLang), Array.from(listLit)];
let itemBox = document.querySelectorAll('.img');
let filterGenreLang = document.querySelectorAll('.filter-container.lit > ul');

for (let i = 0; i<filtersItemsArr.length; i++) {

    let list = filtersItemsArr[i];

    for (let j = 0; j<list.length; j++) {

        list[j].addEventListener('click', function(){

            for (let k = 0; k<list.length; k++) {
                list[k].classList.remove('active');
            }

            this.classList.add('active');

            let dataFilterCurr = this.getAttribute('data-filter');

            if (this.classList.contains('list-lang')) {
                for (let l=0; l<filterGenreLang.length; l++) {
                    if (filterGenreLang[l].classList.contains(dataFilterCurr)) {
                        filterGenreLang[l].style.display = '';
                        filterGenreLang[l].firstElementChild.classList.add('active');
                    } else {
                        filterGenreLang[l].style.display = 'none';
                        for (let m=0; m<filterGenreLang[l].children.length; m++) {
                            filterGenreLang[l].children[m].classList.remove('active');
                        }
                    }
                }
            }

            let otherFilterItemsToSearch = filtersItemsArr.filter(arr => filtersItemsArr.indexOf(arr) != i).reduce((acc, val) => acc.concat(val), []);
            let otherActiveItems = otherFilterItemsToSearch.filter(elem => elem.classList.contains('active'));
            let dataFilterOthers = new Array();
            for (let s = 0; s<otherActiveItems.length; s++) {
                dataFilterOthers[s] = otherActiveItems[s].getAttribute('data-filter');
            }
            let dataFilterAllActiveItems = dataFilterOthers.concat(dataFilterCurr);
            console.log(dataFilterAllActiveItems)

            for (let q = 0; q<itemBox.length; q++) {
            
                if (dataFilterAllActiveItems.every(el=>itemBox[q].classList.contains(el))) {
                    itemBox[q].parentNode.parentNode.parentNode.style.display = '';
                } else {
                    itemBox[q].parentNode.parentNode.parentNode.style.display = 'none';
                }

            }

        })
    }
}

document.querySelectorAll('.list-lang.active')[0].click();
document.querySelectorAll('.list-lit.active')[0].click();

// window.addEventListener("load", function(){
//     document.querySelectorAll('.list-lit.active')[0].click();
//     document.querySelectorAll('.list-lang.active')[0].click();
// });

// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelectorAll('.list-lit.active')[0].click();
//     document.querySelectorAll('.list-lang.active')[0].click();
// });