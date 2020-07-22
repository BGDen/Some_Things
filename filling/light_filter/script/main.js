const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event =>{
  if (event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['filter'];

  filterBox.forEach(elem =>{
    elem.classList.remove('hide');
    if(!elem.classList.contains(filterClass) && filterClass !== 'All'){
      elem.classList.add('hide');
    }
  });
})