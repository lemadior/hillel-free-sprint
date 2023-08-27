const burger = document.querySelector('.burger');
const featuresMobile = document.querySelector('.features');

const burgerMenuToggle = () => {
    featuresMobile.classList.toggle('isMobile');
}

burger.addEventListener('click', burgerMenuToggle);

// This part of code based on example from: https://developer.mozilla.org/ru/docs/Learn/Accessibility/HTML
document.onkeydown = function (e) {
    if (e.code === 'Enter') {
      // Кнопка Enter
      document.activeElement.click();
    }
};
