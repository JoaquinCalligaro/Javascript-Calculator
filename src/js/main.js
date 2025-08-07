btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
btn5 = document.getElementById('btn5');
btn6 = document.getElementById('btn6');
btn7 = document.getElementById('btn7');
btn8 = document.getElementById('btn8');
btn9 = document.getElementById('btn9');
btn0 = document.getElementById('btn0');
// btnSuma = document.getElementById('btnsuma');
display = document.getElementById('display');

btn1.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '1';
  } else {
    display.innerText += '1';
  }
});

btn2.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '2';
  } else {
    display.innerText += '2';
  }
});

btn3.addEventListener('click', function () {
  display.innerText += '3';
});

btn4.addEventListener('click', function () {
  display.innerText += '4';
});

btn5.addEventListener('click', function () {
  display.innerText += '5';
});

btn6.addEventListener('click', function () {
  display.innerText += '6';
});

btn7.addEventListener('click', function () {
  display.innerText += '7';
});

btn8.addEventListener('click', function () {
  display.innerText += '8';
});

btn9.addEventListener('click', function () {
  display.innerText += '9';
});

btn0.addEventListener('click', function () {
  display.innerText += '0';
});

// btnSuma = addEventListener('click', function () {
//   display.innerText += '+';
// });
