// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeSwitcher = document.getElementById("slider");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeSwitcher.checked = true;
} else {
  body.classList.remove("dark-theme");
  themeSwitcher.checked = false;
}

themeToggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  body.classList.toggle("dark-theme");
  
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
  const header = document.getElementById('header');
  const body = document.body;
  const logo = document.getElementById('logo');

  
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    
    header.style.setProperty('--header-bg-color-light', '#111111');
    header.style.setProperty('--header-border-color-light', '#fff');
    

    
    logo.src = "images/logo_dark.svg"; // 
  } else {
    
      header.style.setProperty('--header-bg-color-light', '#f9f9f9');
    header.style.setProperty('--header-border-color-light', '#000'); 
 

    
    logo.src = "images/logo_light.svg"; // Шлях до SVG для теми "light"
  }
}



// Modal menu
(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.forEach((el) => {
    el.addEventListener('click', toggleMenu);
  });



  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();


