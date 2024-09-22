document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const postId = 'blog-post-1'; // Replace this with a unique identifier for each blog post
    let isLiked = localStorage.getItem(`liked_${postId}`) === 'true';

    updateLikeButton();

    likeButton.addEventListener('click', () => {
        isLiked = !isLiked;
        localStorage.setItem(`liked_${postId}`, isLiked);
        updateLikeButton();
        animateHeart();
    });

    function updateLikeButton() {
        if (isLiked) {
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
