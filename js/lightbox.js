// ==========================================================
// LIGHTBOX (click-to-expand images)
//
// Add class="expandable" to any <img> on the page and this makes
// it click-to-enlarge. Works anywhere the script is included, not
// just on project pages - drop the same <script src="js/lightbox.js">
// tag into a blog post if you want the same behaviour there too.
// ==========================================================

(function () {
    const images = document.querySelectorAll('img.expandable');
    if (!images.length) return;

    // Built once and reused for every image, rather than creating a
    // new overlay per click.
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '\u00D7'; // ×
    overlay.appendChild(closeBtn);

    document.body.appendChild(overlay);

    function open(src, alt) {
        overlayImg.src = src;
        overlayImg.alt = alt || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // stop background scroll while open
    }

    function close() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    images.forEach((img) => {
        img.addEventListener('click', () => open(img.src, img.alt));
    });

    // Clicking anywhere on the dark backdrop closes it; clicking the
    // enlarged image itself does not (so a stray tap doesn't dismiss
    // it while someone's just looking at detail).
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
})();
