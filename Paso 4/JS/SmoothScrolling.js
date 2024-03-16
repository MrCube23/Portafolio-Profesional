document.getElementById("goTopButton").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById("about").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("aboutmeSectionID").offsetTop - 95,
        behavior: 'smooth'
    });
});

document.getElementById("tools").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("toolsSectionID").offsetTop - 95,
        behavior: 'smooth'
    });
});

document.getElementById("works").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("projectsSectionID").offsetTop - 95,
        behavior: 'smooth'
    });
});

document.getElementById("contact").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("contactSectionID").offsetTop - 95,
        behavior: 'smooth'
    });
});