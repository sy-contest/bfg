function getShareUrl() {
    // Get the canonical URL if available, otherwise use the current page URL
    const canonicalElement = document.querySelector('link[rel=canonical]');
    return canonicalElement ? canonicalElement.href : window.location.href;
}

function getShareTitle() {
    // Get the page title
    return document.title;
}

function shareOnFacebook() {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(getShareTitle());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(getShareTitle());
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(getShareTitle());
    window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
}

function shareOnTelegram() {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(getShareTitle());
    window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank');
}

function copyUrl() {
    const url = getShareUrl();
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
