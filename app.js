const button = document.querySelector('.btn');
const colorText = document.querySelector('#color-value');
const mainScreen = document.querySelector('.main-screen');
const colors = ['#BD811A', '#7890A5', '#24E3D1', '#CD67DC', '#A5AA88'];
const link1 = document.querySelector('.li1');
const link2 = document.querySelector('.li2');

colorText.innerText = colors[0];
mainScreen.style.background = colors[0];

button.addEventListener('click', function () {
  let randomColor = colors[Math.floor(Math.random() * 5)];
  colorText.innerText = randomColor;
  mainScreen.style.background = randomColor;
});

link1.addEventListener('mouseenter', function (e) {
  e.currentTarget.style.color = mainScreen.style.background;
});
link1.addEventListener('mouseleave', function (e) {
  e.currentTarget.style.color = '#000';
});

link2.addEventListener('mouseenter', function (e) {
  e.currentTarget.style.color = mainScreen.style.background;
});
link2.addEventListener('mouseleave', function (e) {
  e.currentTarget.style.color = '#000';
});
