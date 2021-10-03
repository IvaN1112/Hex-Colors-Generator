const button = document.querySelector('.btn');
const colorText = document.querySelector('#color-value');
const mainScreen = document.querySelector('.main-screen');
const colors = ['#BD811A', '#7890A5', '#24E3D1', '#CD67DC', '#A5AA88'];
const link1 = document.querySelector('.li1');
const link2 = document.querySelector('.li2');

let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

colorText.innerText = colors[2];
mainScreen.style.background = colors[2];

button.addEventListener('click', function () {
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += hexValues[Math.floor(Math.random() * 16)];
  }
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
