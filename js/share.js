function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
}

function shareOnTelegram() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank');
}

function copyUrl() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy URL: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const sharePopup = document.getElementById('sharePopup');
    const closePopup = document.querySelector('.close-popup');

    shareButton.addEventListener('click', () => {
        sharePopup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        sharePopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === sharePopup) {
            sharePopup.style.display = 'none';
        }
    });
});
