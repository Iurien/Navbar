window.onscroll = function() {
  const nav = document.querySelector('.navbar');
  const logo = document.querySelector('.navbar-brand img');

  if (window.scrollY > 50) {
    nav.classList.add('navbar-shrunk');
    logo.style.height = "30px"; // Новый размер при скролле
  } else {
    nav.classList.remove('navbar-shrunk');
    logo.style.height = "50px"; // Исходный размер
  }
};
