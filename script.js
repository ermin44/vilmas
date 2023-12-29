document.querySelectorAll('a[href^="#"], button[scrollhere]').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSelector = this.getAttribute('href') || this.getAttribute('scrollhere');
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
