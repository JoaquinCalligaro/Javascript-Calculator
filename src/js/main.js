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
btnSuma = document.getElementById('btnsuma');
btnResta = document.getElementById('btnmenos');
btnMultiplicar = document.getElementById('btnmultiplicacion');
btnDivision = document.getElementById('btndivision');
btnLimpiar = document.getElementById('btnlimpiar');
btnResultado = document.getElementById('btnresultado');
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
  if (display.innerText === '0') {
    display.innerText = '3';
  } else {
    display.innerText += '3';
  }
});

btn4.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '4';
  } else {
    display.innerText += '4';
  }
});

btn5.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '5';
  } else {
    display.innerText += '5';
  }
});

btn6.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '6';
  } else {
    display.innerText += '6';
  }
});

btn7.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '7';
  } else {
    display.innerText += '7';
  }
});

btn8.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '8';
  } else {
    display.innerText += '8';
  }
});

btn9.addEventListener('click', function () {
  if (display.innerText === '0') {
    display.innerText = '9';
  } else {
    display.innerText += '9';
  }
});

btn0.addEventListener('click', function () {
  display.innerText += '0';
});

btnLimpiar.addEventListener('click', function () {
  display.innerText = '0';
});

let num1 = 0;
let num2 = 0;
let operador = '';

//! suma
btnSuma.addEventListener('click', function () {
  num1 = Number(display.innerText);
  operador = '+';
  display.innerText = '0';
});

//! Resta
btnResta.addEventListener('click', function () {
  num1 = Number(display.innerText);
  operador = '-';
  display.innerText = '0';
});

//! Multiplicacion
btnMultiplicar.addEventListener('click', function () {
  num1 = Number(display.innerText);
  operador = '*';
  display.innerText = '0';
});

//! Division
btnDivision.addEventListener('click', function () {
  num1 = Number(display.innerText);
  operador = '/';
  display.innerText = '0';
});
//! Resultado
btnResultado.addEventListener('click', function () {
  num2 = Number(display.innerText);
  let resultado;
  if (operador === '+') {
    resultado = num1 + num2;
  } else if (operador === '-') {
    resultado = num1 - num2;
  } else if (operador === '*') {
    resultado = num1 * num2;
  } else if (operador === '/') {
    resultado = num1 / num2;
  }
  display.innerText = resultado;
});
