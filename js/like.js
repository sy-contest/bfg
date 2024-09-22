document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    let count = parseInt(localStorage.getItem('likeCount') || '0');
    let hasLiked = localStorage.getItem('hasLiked') === 'true';

    updateLikeButton();

    likeButton.addEventListener('click', () => {
        if (!hasLiked) {
            count++;
            hasLiked = true;
            animateHeart();
        } else {
            count--;
            hasLiked = false;
        }
        localStorage.setItem('likeCount', count);
        localStorage.setItem('hasLiked', hasLiked);
        updateLikeButton();
    });

    function updateLikeButton() {
        likeCount.textContent = count;
        if (hasLiked) {
            likeButton.classList.add('liked');
            likeButton.querySelector('i').classList.remove('far');
            likeButton.querySelector('i').classList.add('fas');
        } else {
            likeButton.classList.remove('liked');
            likeButton.querySelector('i').classList.remove('fas');
            likeButton.querySelector('i').classList.add('far');
        }
    }

    function animateHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-animation');
        heart.innerHTML = '❤️';
        likeButton.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});
