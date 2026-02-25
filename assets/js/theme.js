// Navbar Mobile Toggle
const $navbarBurgers = Array.prototype.slice.call(
  document.querySelectorAll('.navbar-burger'),
  0
);

if ($navbarBurgers.length > 0) {
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
}

// THEME TOGGLE LOGIC
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;

if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector('i');

  const currentTheme = htmlTag.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = htmlTag.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';

    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  });
}