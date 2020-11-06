window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header'),
//   menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      header.classList.toggle('header_active');
      hamburger.classList.toggle('hamburger_active');
  });

//   menuItem.forEach(item => {
//       item.addEventListener('click', () => {
//           hamburger.classList.toggle('hamburger_active');
//           menu.classList.toggle('menu_active');
//       })
//   })
})