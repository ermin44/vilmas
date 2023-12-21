document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log("Anchor found: ", anchor.href); // This should log in the console
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
