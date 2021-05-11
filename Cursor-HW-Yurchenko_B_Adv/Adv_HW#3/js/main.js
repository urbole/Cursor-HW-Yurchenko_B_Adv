"use strict";

// 1
const getMaxDigit = (number) => {
  let result = 0;
  const myString = String(number);

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] > result) {
      result = myString[i];
    }
  }
  return result;
};

// 2
const raiseToPower = function (numberToBeRaised, exponent) {
  let result = numberToBeRaised;

  for (let i = 1; i < exponent; i++) {
    result *= numberToBeRaised;
  }

  return result;
};

// 3
const fixCamelCase = function (source) {
  const transformToLowerCase = source.toLowerCase();
  const cutFirstLetter = transformToLowerCase[0];
  const bigFirstLetter = cutFirstLetter.toUpperCase();
  let result = bigFirstLetter + transformToLowerCase.slice(1);

  return result;
};

// 4
const calculateSalaries = function (incomeTax, militaryDuty, totalAmount) {
  return (totalAmount - (totalAmount * ((incomeTax + militaryDuty) / 100)));
};

// 5
const getRandomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

// 6
const countLetters = function (userInput, letter) {
  let counter = 0;
  const source = userInput.toLowerCase();

  for (let i = 0; i < source.length; i++) {
    if (source[i] === letter) {
      counter++;
    }
  }
  return counter;
};

// 7
const convertCurrency = function (userInput) {
  let result = 0;
  const rateUAH = 28;
  const sum = parseFloat(userInput);

  if (userInput.includes('uah') > 0 && sum > 0) {
    result = +(sum / rateUAH).toFixed(2);
  } else if (userInput.includes('$') > 0 && sum > 0) {
    result = +(sum * rateUAH).toFixed(2);
  } else {
    result = 'Error';
  }

  return result;
};

// 8
const getRandomPassword = function (password = 8) {
  return Math.trunc((Math.random() * (1 - 0.1) + 0.1) * (10 ** password));
};

// 9
const deleteLetters = function (userInput, letter) {
  let letterToDelete = new RegExp(letter, 'gi');

  return userInput.replace(letterToDelete, '');
};

// 10
const isPalindrome = function (userInput) {
  const withoutSpaces = (userInput.toLowerCase()).split(' ').join('');
  const testReverse = withoutSpaces.split('').reverse().join('');
  let result = null;

  if (withoutSpaces === testReverse) {
    result = true;
  } else {
    console.log('Error');
  }

  return result;
};

// 11
function deleteDuplicateLetter(source) {
  const lowerCaseSource = source.toLowerCase();
  let sentenceWithoutDuplicate = '';

  for (let i = 0; i < lowerCaseSource.length; i++) {
    if (lowerCaseSource.indexOf(lowerCaseSource[i]) ===
      lowerCaseSource.lastIndexOf(lowerCaseSource[i])) {
      sentenceWithoutDuplicate += lowerCaseSource[i];
    }
  }

  return sentenceWithoutDuplicate;
}

// 1
console.log(`${getMaxDigit(41288931)}`);
// 2
console.log(raiseToPower(5, 3));
// 3
console.log(fixCamelCase("tEST"), fixCamelCase("TEST"));
// 4
console.log(calculateSalaries(18, 1.5, 25000));
// 5
console.log(getRandomNumber(10, 100));
// 6
console.log(countLetters('Hello World', 'l'));
// 7
console.log(convertCurrency('2801uah'));
// 8
console.log(getRandomPassword(4));
// 9
console.log(deleteLetters('Hello, hello World', 'h'));
// 10
console.log(isPalindrome('Я с леди все же свиделся'));
// 11
console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));