const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarLinks = document.querySelector('.navbar-links');

  // add the 'show' class to navbarLinks by default
  navbarLinks.classList.add('show');

  navbarToggler.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
  });
  

//reposize the open menu
if (location.pathname === '/courses/detail.html') {
  // your code here
  // for example:
  adjustNavbarWidth();
}


function adjustNavbarWidth() {
  const navbarLinks = document.querySelector('.navbar-links.show');
  navbarLinks.style.width = 'fit-content';
}
