document.addEventListener('DOMContentLoaded', () => {
    const donationAmounts = document.querySelectorAll('.donation-amount');
    const qrCodeContainer = document.getElementById('qr-code-container');
    const qrCodeImage = document.getElementById('qr-code');

    donationAmounts.forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.getAttribute('data-amount');
            const qrCodeSrc = `images/${amount}.jpg`;
            
            qrCodeImage.src = qrCodeSrc;
            qrCodeContainer.style.display = 'block';

            // Remove 'selected' class from all buttons
            donationAmounts.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to clicked button
            button.classList.add('selected');
        });
    });
});
