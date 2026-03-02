(function addInstructionsButton() {
    const match = window.location.pathname.match(/(week\d+)\/([^/]+)\/code_deliverable\/?/);
    if (!match) {
        return;
    }

    const week = match[1];
    const project = match[2];

    if (document.getElementById('student-instructions-floating-button')) {
        return;
    }

    const button = document.createElement('a');
    button.id = 'student-instructions-floating-button';
    button.href = new URL(`../../../instructions.html?week=${week}&project=${project}`, window.location.href).toString();
    button.textContent = 'Instructions';
    button.setAttribute('aria-label', 'Open student instructions');

    Object.assign(button.style, {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '9999',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textDecoration: 'none',
        fontWeight: '700',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '10px 16px',
        borderRadius: '999px',
        boxShadow: '0 10px 24px rgba(102, 126, 234, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
    });

    button.addEventListener('mouseenter', () => {
        button.style.filter = 'brightness(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.filter = 'none';
    });

    document.body.appendChild(button);
})();
