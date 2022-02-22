// const toggleThemeBtn = document.getElementById('toggleTheme')
// const toggleThemeImage = document.getElementById('card-grafic')

// toggleThemeBtn.addEventListener('click', () => {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark')
//     } else {
//         document.body.classList.add('dark') 
//     toggleThemeImage.src = 'assets/grafic/grafic-black.svg' 
//     } 
// })


if (!localStorage.theme) localStorage.theme = 'light'
document.body.className = localStorage.theme

toggleTheme.onclick = () => {
    document.body.classList.toggle('dark')
    toggleTheme.innerText = document.body.classList.contains('dark') ? 'light theme' : 'dark theme'
    localStorage.theme = document.body.className || 'light'
}