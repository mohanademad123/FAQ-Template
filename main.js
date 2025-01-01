const accordionItems = document.querySelectorAll('.accordtion .item li');

accordionItems.forEach(item => {
  const heading = item.querySelector('.heading-item');
  const content = item.querySelector('.content');
  const openButton = heading.querySelector('#open');
  const closeButton = heading.querySelector('#close');

  openButton.addEventListener('click', () => {
    item.classList.add('active');
    content.classList.add('active');
    openButton.classList.add('active');
    closeButton.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    item.classList.remove('active');
    content.classList.remove('active');
    openButton.classList.remove('active');
    closeButton.classList.remove('active');
  });
});
