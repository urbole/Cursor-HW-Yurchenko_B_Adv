//* 3 - Домашнє завдання по темі Функції
//? https://trostinsky.github.io/cursor-new-materials/js/homeworks/03-functions-uk.html

// 1
const getMaxDigit = function (data) {
  let result = 0;
  const newArr = data.toString().split('');

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > result) {
      result = newArr[i];
    }
  }
  return result;
};

// 2
const raiseToPower = function (num, raiseTo) {
  let result = num;

  for (let i = 1; i < raiseTo; i++) {
    result = result * num;
  }
  return result;
};

// 3
const fixValue = function (data) {
  const newStr = data.toLowerCase();
  const bigFirstLetter = newStr.slice(0, 1).toUpperCase();
  const result = bigFirstLetter + newStr.slice(1);
  return result;
};

// 4
const calculateSalaries = function (data) {
  const taxes = 18 + 1.5;
  const result = data - (data / 100 * taxes);
  return result;
};

// 5
const randomNumber = function (min, max) {
  const result = (Math.random() * (max - min) + min).toFixed();
  return result;
};

// 6
const countLetters = function (letter, data) {
  const newStr = data.toLowerCase();
  let count = 0;

  for (let i = 0; i < newStr.length; i++) {

    if (newStr[i] === letter) {
      count++;
    }
  }
  return count;
};

// 7 
// TODO - переделать - Врахуйте, інші валюти не конвертуються,
// TODO - потрібно виводити помилку, і також регістр uah не має значення.
const convertCurrency = function (data) {
  const currentUSD = 25;
  return data.includes('$')
    ? parseInt(data) * currentUSD
    : parseInt(data) / currentUSD;
};

// 8
const getRandomPassword = function (data, defaultLength) {
  defaultLength = 8;
  let result = '';

  if (data === undefined) {
    data = defaultLength;
  }

  for (let i = 0; i < data; i++) {
    result = result + (Math.random() * (9 - 0) + 0).toFixed();
  }
  return result;
};

// 9
const deleteLetters = function (letter, data) {
  const newStr = data.toLowerCase();
  let result = '';

  for (let i = 0; i < newStr.length; i++) {

    if (letter !== newStr[i]) {
      result = result + newStr[i];
    }
  }

  return result;
};

// 10
const isPalyndrom = function (data) {
  let result = false
  const newStr = (data.toLowerCase()).replaceAll(/\s/g, "");
  const reverseStr = newStr.split("").reverse().join("");
  result = newStr === reverseStr;
  return result;
};

// 11
const deleteDuplicateLetter = function (data) {
  const newStr = (data.toLowerCase()).replaceAll(/\s/g, "");
  let result ='';
  for (let i = 0; i < newStr.length; i++) {
if (newStr[i]) {
  
}

  }

};

// 1
console.log(`Function N1 - ${getMaxDigit(1236)}`);
// 2
console.log(`Function N2 - ${raiseToPower(2, 5)}`);
// 3
console.log(`Function N3 - ${fixValue('влад')}, ${fixValue('вЛАД')}`);
// 4
console.log(`Function N4 - ${calculateSalaries(1000)}`);
// 5
console.log(`Function N5 - ${randomNumber(1, 10)}`);
// 6
console.log(`Function N6 - ${countLetters('а', 'Асталавіста')}`);
// 7
console.log(`Function N7 - ${convertCurrency('202rub')}`);
// 8
console.log(`Function N8 - ${getRandomPassword()}`);
//9
console.log(`Function N9 - ${deleteLetters('a', 'blablabla')}`);
// 10
console.log(`Function N10 - ${isPalyndrom("Я несу гусеня")}`);
// 11
console.log(`Function N11 - ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);