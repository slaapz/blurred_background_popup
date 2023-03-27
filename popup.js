const buttonEl = document.querySelector('.btn');
const closeButtonEl = document.querySelector('.close-btn');
const containerEl = document.querySelector('.container');
const popupContainerEl = document.querySelector('.popup-container');

buttonEl.addEventListener('click', () => {
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
});

closeButtonEl.addEventListener('click', () => {
    popupContainerEl.classList.add('active');
    containerEl.classList.remove('active');
});