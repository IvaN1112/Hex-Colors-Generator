const button = document.querySelector('.btn');
const colorText = document.querySelector('#color-value');
const mainScreen = document.querySelector('.main-screen');
const colors = ['#BD811A', '#7890A5', '#24E3D1', '#CD67DC', '#A5AA88'];

colorText.innerText = colors[0];
mainScreen.style.background = colors[0];

button.addEventListener('click', function () {
  let randomColor = colors[Math.floor(Math.random() * 5)];
  colorText.innerText = randomColor;
  mainScreen.style.background = randomColor;
});
