// Скрит для темной темы
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // Проверяем, какая тема сейчас стоит
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.innerText = 'Сменить тему 🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = 'Сменить тему ☀️';
    }
}); // Конец скрипта