document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".about-card");

    window.addEventListener("scroll", () => {

        cards.forEach(card => {

            const top = card.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {
                card.classList.add("show");
            }

        });

    });

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        let count = 0;

        const target = Number(counter.dataset.target);

        const update = () => {

            count += Math.ceil(target / 50);

            if (count < target) {

                counter.innerHTML = count;

                requestAnimationFrame(update);

            } else {

                counter.innerHTML = target + "+";

            }

        };

        update();

    });

    const typing = document.getElementById("typing");

    if (typing) {

        const text = "About Me";

        let i = 0;

        (function type() {

            if (i < text.length) {

                typing.innerHTML += text.charAt(i);

                i++;

                setTimeout(type, 100);

            }

        })();

    }

});
/* ==========================================
   Scroll Reveal
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ==========================================
   Typing Animation
========================================== */

new Typed(".typing", {

    strings: [

        "Data Analyst",

        "SQL Developer",

        "Business Analyst"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1500,

    loop: true

});
/* ==========================================
   Back To Top
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   Mobile Menu
========================================== */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
/* ==========================================
   Active Navigation
========================================== */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   Cursor Glow
========================================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});
