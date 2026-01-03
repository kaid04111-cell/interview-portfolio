const btn = document.getElementById('color-toggle');

btn.addEventListener('click', () => {
    // This code switches the CSS variables
    const currentBg = getComputedStyle(document.documentElement).getPropertyValue('--main-bg').trim();

    if (currentBg === '#ffffff') {
        document.documentElement.style.setProperty('--main-bg', '#222222');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-color', '#e74c3c');
    } else {
        document.documentElement.style.setProperty('--main-bg', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#333333');
        document.documentElement.style.setProperty('--header-color', '#4A90E2');
    }
});


