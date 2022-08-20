/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let allChar = [];
for (let i = 48; i <= 57; i++) {
    allChar.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
    allChar.push(String.fromCharCode(i));
}
for (let i = 192; i <= 221; i++) {
    allChar.push(String.fromCharCode(i));
}
function animation(title) {
    let times = 0;
    let r = [];
    let done = [];
    for (let i = 0; i < title.length; i++) {
        done.push(false);
        r.push(allChar[Math.floor(Math.random() * allChar.length)]);
    }
    document.getElementById("title").innerText = r.join("");
    var titleChange = window.setInterval(() => {
        times++
        for (let i = 0; i < title.length; i++) {
            if (!done[i]) {
                char = document.getElementById("title").innerText.split("").slice(0, title.length);
                if (Math.random() < (0.15 + (done.filter(x => x === false).length * 0.02))) {
                    char[i] = title[i]
                    done[i] = true;
                } else {
                    char[i] = allChar[Math.floor(Math.random() * allChar.length)]
                }
                document.getElementById("title").innerText = char.join("");
            } else {
                continue;
            }
        }
        if (done.indexOf(false) === -1 || times > 25) {
            clearInterval(titleChange);
            document.getElementById('title').innerText = title;
            return;
        }
    }, 100);
}
let title = document.getElementById("title").innerText;
animation(title);
if (title === "PORTFOLIO" || title === "DIGITAL") {
    var swap = window.setInterval(() => {
        if (document.getElementById("title").innerText === "PORTFOLIO") {
            animation("DIGITAL")
        } else if (document.getElementById("title").innerText === "DIGITAL") {
            animation("PORTFOLIO")
        }
    } , 2000);
}

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

window.addEventListener('DOMContentLoaded', event => {
    let scrollToTopVisible = false;

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            console.log('test')
            animation()
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })

    //timeout function




    //trigger constantly in the background



});
