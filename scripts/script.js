//  1. *************************************************************************

const myButton = document.getElementById('myButton');
const mySquare = document.getElementById('mySquare');

myButton.addEventListener('click', function() {
  mySquare.classList.toggle('small');
  if (mySquare.classList.contains('small')) {
    mySquare.style.backgroundColor = 'green';
  } else {
    mySquare.style.backgroundColor = 'red';
  }
});

//  2. *************************************************************************

const colorButton = document.getElementById('colorButton');
const customSquare = document.getElementById('customSquare');

colorButton.addEventListener('click', function() {
//   customSquare.classList.toggle('blue');

  if (customSquare.classList.contains('blue')) {
    customSquare.style.backgroundColor = 'pink';
  } else {
    customSquare.style.backgroundColor = 'blue';
  }

  // const squareColor = customSquare.style.backgroundColor;
  // console.log('Новый цвет квадрата: ', 'Синий');
});

//  3. *************************************************************************

const increaseButton = document.getElementById('increaseButton');
const squareToIncrease = document.getElementById('square');

const squareSize = 150;
const sizeIncrement = 20;

increaseButton.addEventListener('click', function() {
  const currentWidth = squareToIncrease.offsetWidth;
  const currentHeight = squareToIncrease.offsetHeight;

  const newWidth = currentWidth + sizeIncrement;
  const newHeight = currentHeight + sizeIncrement;

  squareToIncrease.style.width = newWidth + 'px';
  squareToIncrease.style.height = newHeight + 'px';
});

//  4. *************************************************************************

const createParagraphButton1 = document.getElementById('createParagraphButton1');
const root1 = document.querySelector('.root1');

createParagraphButton1.addEventListener('click', function() {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Произвольный текст';
  paragraph.style.color = 'blue';
  root1.appendChild(paragraph);
});

//  5. *************************************************************************

const createParagraphButton2 = document.getElementById('createParagraphButton2');
const root2 = document.querySelector('.root2');
let currentColor = 'blue';

createParagraphButton2.addEventListener('click', function() {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Произвольный текст';
  paragraph.style.color = currentColor;
  root2.appendChild(paragraph);
  
  if (currentColor === 'blue') {
    currentColor = 'green';
  } else {
    currentColor = 'blue';
  }
});