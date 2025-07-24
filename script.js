document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mainNav = document.getElementById('main-nav')

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open')
        })
    }

    const themeSwitcher = document.getElementById('theme-switcher')
    const body = document.body
    const themeIcon = themeSwitcher.querySelector('i')

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme')
            themeIcon.className = 'fa-solid fa-moon'
        } else {
            body.classList.remove('light-theme')
            themeIcon.className = 'fa-solid fa-sun'
        }
        localStorage.setItem('theme', theme)
    }

    const savedTheme = localStorage.getItem('theme') || 'dark'
    applyTheme(savedTheme)

    themeSwitcher.addEventListener('click', () => {
        const isLightTheme = body.classList.contains('light-theme')
        applyTheme(isLightTheme ? 'dark' : 'light')
    })
})
