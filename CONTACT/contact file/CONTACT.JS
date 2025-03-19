// Function to toggle between English and Tamil addresses
function toggleLanguage() {
    const englishAddress = document.getElementById('address-english');
    const tamilAddress = document.getElementById('address-tamil');

    // Toggle visibility of English and Tamil addresses
    if (englishAddress.style.display === 'none') {
        englishAddress.style.display = 'block';
        tamilAddress.style.display = 'none';
    } else {
        englishAddress.style.display = 'none';
        tamilAddress.style.display = 'block';
    }

    // Change the button text to reflect the current language state
    const langButton = document.querySelector('.lang-toggle');
    if (englishAddress.style.display === 'block') {
        langButton.textContent = 'Switch to Tamil';
    } else {
        langButton.textContent = 'Switch to English';
    }
}
