document.addEventListener('DOMContentLoaded', function() {
    const encodedEmail = 'bWFlYnlAbWFlYnkubWU=';
    const email = atob(encodedEmail);
    const link = document.getElementById('email-link');
    link.href = 'mailto:' + email;
}); 