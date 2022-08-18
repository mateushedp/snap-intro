const navbar = document.querySelector('.navbar');
const navbarItem = document.querySelectorAll('.navbar-item');
const navButton = document.querySelector('.hamburger');
const overlay = document.querySelector('#overlay');

function closeLinks() {
  navbarItem.forEach((item) => {
    var arrow = item.querySelector('#arrow-icon');
    var dropdown = item.querySelector('.dropdown');

    arrow.classList.remove('open');
    dropdown.classList.remove('open');
  });
}

function toggleDropdown(item, event) {
  var arrow = item.querySelector('#arrow-icon');
  var dropdown = item.querySelector('.dropdown');

  if (!arrow.classList.contains('open')) {
    closeLinks();
    arrow.classList.add('open');
    dropdown.classList.add('open');
    event.stopPropagation();
  } else {
    closeLinks();
  }
}

function closeAllDropdowns() {
  closeLinks();
}

function toggleMobileNavbar() {
  closeLinks();
  navbar.classList.toggle('open');
  overlay.classList.toggle('open');
  navButton.classList.toggle('open');
}

navButton.addEventListener('click', () => {
  toggleMobileNavbar();
});

overlay.addEventListener('click', () => {
  toggleMobileNavbar();
});
