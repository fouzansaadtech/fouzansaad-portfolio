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
