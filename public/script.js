document.addEventListener('DOMContentLoaded', () => {
    const darkButton = document.getElementById('dark-theme');
    const lightButton = document.getElementById('light-theme');

    // Function to apply the theme
    const applyTheme = (theme) => {
        document.body.className = theme;
        fetch(`/${theme}`);
    };

    // Function to get the theme from cookies
    const getThemeFromCookies = () => {
        const cookies = document.cookie.split('; ');
        const themeCookie = cookies.find(row => row.startsWith('theme='));
        if (themeCookie) {
            return themeCookie.split('=')[1];
        }
        return 'light-mode'; // default theme
    };

    // Apply the theme
    const currentTheme = getThemeFromCookies();
    applyTheme(currentTheme);

    // Event listeners for buttons
    darkButton.addEventListener('click', () => applyTheme('dark-mode'));
    lightButton.addEventListener('click', () => applyTheme('light-mode'));
});
