feather.replace();

document.querySelectorAll('.dropdown-container').forEach(element => {
  element.addEventListener('click', event => {
    event.target.classList.toggle('active');
  });
});