const container = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (e) => {
  if (container.classList.contains('active')) {
    container.classList.remove('active');
    container.classList.add('not-active');
  } else {
    container.classList.add('active');
    container.classList.remove('not-active');
  }
});
