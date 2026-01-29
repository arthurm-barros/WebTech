const body = document.getElementById('light_theme')
const theme_button = document.getElementById('theme')
theme_button.addEventListener('click', (event) => {
    event.preventDefault()
    body.id = body.id === 'light_theme' ? 'dark_theme' : 'light_theme'
    theme_button.src = body.id === 'light_theme' ? 'images/DarkButton.png' : 'images/LightButton.png'
})