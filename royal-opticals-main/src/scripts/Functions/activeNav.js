const markActiveNav = () => {
    try {
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const currentFile = (pathParts.length ? pathParts.pop() : 'index.html');
        const headerAnchors = document.querySelectorAll('header nav a');
        headerAnchors.forEach((a) => {
            const href = a.getAttribute('href') || '';
            const hrefParts = href.split('/').filter(Boolean);
            const hrefFile = (hrefParts.length ? hrefParts.pop() : 'index.html');
            if (hrefFile === currentFile || (hrefFile === '' && currentFile === 'index.html')) {
                a.classList.add('active');
                a.setAttribute('aria-current', 'page');
            } else {
                a.classList.remove('active');
                a.removeAttribute('aria-current');
            }
        });
    } catch (e) {
        console.warn('Failed to mark active nav links (services)', e);
    }
}

export { markActiveNav }