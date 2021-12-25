window.addEventListener('scroll', () => {
  let contents = document.querySelectorAll('.child-container');
  let logoImages = document.querySelectorAll('.logoImage');
  contents.forEach((content) => {
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    contentPosition < screenPosition
      ? content.classList.add('active')
      : content.classList.remove('active');
  });

  logoImages.forEach((logoImage) => {
    let logoImagePosition = logoImage.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    logoImagePosition < screenPosition
      ? logoImage.classList.add('active')
      : logoImage.classList.remove('active');
  });
});
