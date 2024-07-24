const hamBtn = document.querySelector('.ham-btn');

const closeBtn = document.querySelector('.close-btn');

const profileCards = document.querySelector('#profile-cards');

const shadowBlock = document.querySelector('.shadow');

hamBtn.addEventListener('click', () => {
  profileCards.classList.add('active');
  shadowBlock.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  profileCards.classList.remove('active');
  shadowBlock.classList.remove('active');
});