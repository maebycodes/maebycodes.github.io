document.addEventListener('DOMContentLoaded', function() {
    const encodedEmail = 'bWFlYnlAbWFlYnkubWU=';
    const email = atob(encodedEmail);

    // modify all links with the email-link class
    const links = document.getElementsByClassName('email-link');
    for (let link of links) {
        link.href = 'mailto:' + email;
    }

    // modify all text elements with the email-text class
    const texts = document.getElementsByClassName('email-text');
    for (let text of texts) {
        text.textContent = email;
    }
});