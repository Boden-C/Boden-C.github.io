/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

let DUAL_ANIMATIONS = [["DIGITAL", "PORTFOLIO"]];
let ORIGINAL_PAGE_TITLE = document.getElementById("title").innerText;
let DID_ANIMATION = false;

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomChar() {
    var allChar = [];
    for (let i = 48; i <= 57; i++) {
        allChar.push(String.fromCharCode(i));
    }
    for (let i = 65; i <= 90; i++) {
        allChar.push(String.fromCharCode(i));
    }
    for (let i = 192; i <= 221; i++) {
        allChar.push(String.fromCharCode(i));
    }
    return allChar[Math.floor(Math.random() * allChar.length)];
}

//Animate title function
function animateTitleTransition(id, originalText, newText) {
    let currentTitle = document.getElementById(id);
    let times = 0;
    let r = [];
    let done = [];
    var chars = originalText.split("");

    function transition() {
        for (let i = 0; i < newText.length; i++) {
            done.push(false);
            r.push(getRandomChar());
        }
        currentTitle.innerText = r.join("");
        var titleChange = window.setInterval(() => {
            times++;
            for (let i = 0; i < newText.length; i++) {
                if (!done[i]) {
                    let chance =
                        0.08 + done.filter((x) => x === true).length * (done.filter((x) => x === true).length * 0.01);
                    if (Math.random() < chance) {
                        chars[i] = newText[i];
                        done[i] = true;
                    } else {
                        chars[i] = getRandomChar();
                    }
                    currentTitle.innerText = chars.join("");
                } else {
                    continue;
                }
            }
            if (done.indexOf(false) === -1 || times > 25) {
                clearInterval(titleChange);
                document.getElementById("title").innerText = newText;
                return;
            }
        }, 100);
    }

    if (originalText === "") {
        //If empty, start beginning animation before transition
        currentTitle.innerText = "";
        DID_ANIMATION = true;
        var titleCreate = window.setInterval(() => {
            if (times < newText.length) {
                let arr = currentTitle.innerText.split("");
                arr.push(getRandomChar());
                currentTitle.innerText = arr.join("");
            }
            if (currentTitle.innerText.length === newText.length) {
                clearInterval(titleCreate);
                return;
            }
        }, 100);
        timeout(100 * newText.length + 300).then(() => {
            transition();
        });
    } else {
        transition();
    }
}

function doAnimation(id) {
    if (!DID_ANIMATION) {
        animateTitleTransition(id, "", ORIGINAL_PAGE_TITLE);
    }

    var dual = null;
    for (let i in DUAL_ANIMATIONS) {
        if (DUAL_ANIMATIONS[i].indexOf(ORIGINAL_PAGE_TITLE) !== -1) {
            dual = DUAL_ANIMATIONS[i];
        }
    }
    if (dual !== null) {
        var swap = window.setInterval(() => {
            console.log(dual)
            var i = dual.indexOf(document.getElementById(id).innerText);
            if (i < 0 || i >= dual.length - 1) {
                i = 0;
            } else {
                i++;
            }
            animateTitleTransition(id, document.getElementById(id).innerText, dual[i]);
        }, 3000);
    }
}

doAnimation("title");

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += 0.1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

window.addEventListener("DOMContentLoaded", (event) => {
    let SCROLL_TO_TOP_VISIBLE = false;

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    document.addEventListener("scroll", () => {
        const scrollToTop = document.body.querySelector(".scroll-to-top");
        if (document.documentElement.scrollTop > 100) {
            if (!SCROLL_TO_TOP_VISIBLE) {
                fadeIn(scrollToTop);
                SCROLL_TO_TOP_VISIBLE = true;
            }
        } else {
            if (SCROLL_TO_TOP_VISIBLE) {
                fadeOut(scrollToTop);
                SCROLL_TO_TOP_VISIBLE = false;
            }
        }
    });
});
