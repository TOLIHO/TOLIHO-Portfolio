// ==========================================================
// SCROLL DOT NAVIGATION
//
// Highlights whichever snapped section is currently in view.
// Clicking a dot just uses the browser's native anchor-jump +
// the site's existing `scroll-behavior:smooth`, so no click
// handler is needed here - this script only manages the
// "which dot is active" state.
//
// Requires:
//   - each snapped <section> to have a matching id
//   - a <nav class="scroll-dots"> with one
//     <a class="scroll-dot" href="#that-id"> per section
// ==========================================================

(function () {
    const sections = document.querySelectorAll(
        '.hero, .featured, .about-preview, .latest-blog, .contact-banner'
    );
    const dots = document.querySelectorAll('.scroll-dot');

    if (!sections.length || !dots.length) return;

    function dotFor(id) {
        return document.querySelector(`.scroll-dot[href="#${id}"]`);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const dot = dotFor(entry.target.id);
                if (!dot) return;
                dots.forEach((d) => d.classList.remove('active'));
                dot.classList.add('active');
            });
        },
        { threshold: 0.6 } // section counts as "current" once 60% visible
    );

    sections.forEach((section) => {
        if (section.id) observer.observe(section);
    });
})();
