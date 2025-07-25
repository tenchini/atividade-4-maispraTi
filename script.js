document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Menu Hamburger e Tema ---
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mainNav = document.getElementById('main-nav')

    if (hamburgerBtn && mainNav) {
        const icon = hamburgerBtn.querySelector('i')

        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open')

            if (mainNav.classList.contains('nav-open')) {
                icon.className = 'fa-solid fa-xmark'
            } else {
                icon.className = 'fa-solid fa-bars'
            }
        })
    }

    const themeSwitcher = document.getElementById('theme-switcher')
    const body = document.body
    const themeIcon = themeSwitcher.querySelector('i')
    const favicon = document.getElementById('favicon')

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme')
            themeIcon.className = 'fa-solid fa-moon'
            favicon.href = 'assets/favicon_light.png'
        } else {
            body.classList.remove('light-theme')
            themeIcon.className = 'fa-solid fa-sun'
            favicon.href = 'assets/favicon_dark.png'
        }
        localStorage.setItem('theme', theme)
    }

    const savedTheme = localStorage.getItem('theme') || 'dark'
    applyTheme(savedTheme)

    themeSwitcher.addEventListener('click', () => {
        const isLightTheme = body.classList.contains('light-theme')
        applyTheme(isLightTheme ? 'dark' : 'light')
    })

    // --- Lógica do Botão Voltar ao Topo ---
    const botaoTopo = document.getElementById('botao-topo')
    const scrollThreshold = 400

    function toggleBotaoTopo() {
        if (window.scrollY > scrollThreshold) {
            botaoTopo.classList.add('visivel')
        } else {
            botaoTopo.classList.remove('visivel')
        }
    }

    function scrollToTop(event) {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    window.addEventListener('scroll', toggleBotaoTopo)
    botaoTopo.addEventListener('click', scrollToTop)
})
