"use strict";

//* 2 -  Домашнє завдання по темі Цикли та Розгалуження
//? https://trostinsky.github.io/cursor-new-materials/js/homeworks/02-conditions-loops-uk.html

let startValue = 0,
  finishValue = 0,
  num = startValue,
  result = 0;

do {
  startValue = +prompt('Start number?');
} while (Number.isInteger(startValue) !== true || startValue <= 0);

do {
  finishValue = +prompt('Finish number?');
} while (Number.isInteger(finishValue) !== true || finishValue <= 0);

const delayEven = confirm('Delay even number?');

for (let i = startValue; i <= finishValue; i++) {
  if (delayEven === false || i % 2 === 1) {
    result += i;
  }
}

alert(`Start value ${startValue}; Finish value ${finishValue}; Delay even - ${delayEven}; Sum: ${result}`);
