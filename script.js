document.addEventListener("DOMContentLoaded", function () {
    /*====Animation page load ===*/
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 200);
});

const sections =
    document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
});

window.addEventListener("scroll", () => {
    section.forEach(sections => {
        const position =
            section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

const programs =
    document.querySelectorAll(".program");

programs.forEach((program, index) => {
    program.style.opacity = "0";
    program.style.transform = "scale(0.9)";
    program.style.transition = `all 0.8 ease $
    { index * 0.3 } s`;
});

window.addEventListener("scroll", () => {
    programs.forEach(program => {
        const position =
            program.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            program.style.opacity = "1";
            program.style.transform = "scale(1)";
        }
    });
});
