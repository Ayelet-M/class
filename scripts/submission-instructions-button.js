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
        background: '#0e101a',
        color: '#00ff41',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '13px',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        padding: '10px 18px',
        borderRadius: '999px',
        boxShadow: '0 8px 24px rgba(0, 255, 65, 0.25)',
        border: '1px solid rgba(0, 255, 65, 0.4)',
        transition: 'all 0.2s ease'
    });

    button.addEventListener('mouseenter', () => {
        button.style.background = '#00ff41';
        button.style.color = '#05170a';
        button.style.borderColor = '#00ff41';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '#0e101a';
        button.style.color = '#00ff41';
        button.style.borderColor = 'rgba(0, 255, 65, 0.4)';
    });

    document.body.appendChild(button);
})();
