
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document fully loaded and parsed");

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", function() {
            section.style.backgroundColor = "#e0e0e0";
        });
        section.addEventListener("mouseout", function() {
            section.style.backgroundColor = "#ffffff";
        });
    });
});

