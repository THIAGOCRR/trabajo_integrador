
document.addEventListener('DOMContentLoaded', () => {

  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.href === location.href || a.href.endsWith(location.pathname)) {
      a.setAttribute('aria-current', 'page');
    }
  });
});
