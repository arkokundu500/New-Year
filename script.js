let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100)
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50)
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)
    });
});

document.getElementsByClassName("confetti-button")[0].addEventListener("click", function() {
let canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 600;
let container = document.getElementsByClassName("button-wrapper")[0];
container.appendChild(canvas);

let confetti_button = confetti.create(canvas);
confetti_button(
    {
        particleCount: 200,
        spread:100,
        startVelocity: 30,
        scalar:0.9,
        ticks:90,
    }
).then(() => container.removeChild(canvas));
});
