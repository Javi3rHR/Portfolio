const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

// Todas las variables del css
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener('click', () => {
    // toggle -> Si no tiene la clase se la pone, y si la tiene se la quita
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg';
        toggleText.textContent='Light Mode';
    }else{
        toggleIcon.src='assets/icons/moon.svg';
        toggleText.textContent='Dark Mode';
    }
})

// color para asignar a la variable del color primario
toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
})