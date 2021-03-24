"use strict";

// 1
const getRandomArray = function (userInput, min, max) {
  const arrayNumbers = [];
  const getRandomNumber = () => Math.trunc(Math.random() * (max - min) + min);

  for (let index = 0; index < userInput; index++) {
    arrayNumbers.push(getRandomNumber());
  }

  return arrayNumbers;
};

const arrayRandomNumbers = getRandomArray(15, 1, 100);
console.log('Function № 1:', arrayRandomNumbers);

// 3
const getAverage = function (...numbers) {
  let sum = 0;
  let result = 0;
  
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  result = sum / numbers.length;
  return result;
};

const arithmeticAverage = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('Function № 3:', arithmeticAverage);

// 4
const getMedian = function (...numbers) {
  const newArr = [];
  let index = 0;
  let result = 0;
  newArr.push(...numbers);
  index = numbers.length / 2;
  newArr.sort((a, b) => a - b);

  if (index % 2 === 0) {
    result = (newArr[index - 1] + newArr[index]) / 2;
  } else {
    result = newArr[Math.floor(index)];
  }

  return result;
};

const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('Function № 4:', median);

// 5
const filterEvenNumbers = function (...numbers) {
  return numbers.filter(numbers => (numbers % 2 !== 0));
};

const resultFilter = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log('Function № 5:', resultFilter);

// 6
const countPositiveNumbers = function (...numbers) {
  return (numbers.filter(numbers => (numbers > 0)).length);
};

const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log('Function № 6:', positiveNumbers);

// 7
const getDividedByFive = function (...numbers) {
  return numbers.filter(numbers => (numbers % 5 === 0));
};

const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('Function № 7:', dividedByFive);

// 8
const replaceBadWords = function (userInput) {
  let resultStr = "";
  let badWords = ['shit', 'fuck'];
  resultStr = userInput;

  for (let i = 0; i < badWords.length; i++) {
    resultStr = resultStr.replaceAll(badWords[i], '****');
  }

  return resultStr;
}

const censored = replaceBadWords("Are you fucking kidding? fuck... Holy shit! It's bullshit");
console.log('Function № 8:', censored);


// 9
const divideByThree = function (userInput) {
  let newArr = [];
  const sizeElemArr = 3;
  const resultArr = [];
  newArr = (userInput.toLowerCase()).replaceAll(/\s+/g, '');

  for (let i = 0; i < Math.ceil(newArr.length / sizeElemArr); i++) {
    resultArr[i] = newArr.slice((i * sizeElemArr), (i * sizeElemArr) + sizeElemArr);
  }

  return resultArr;
};

const resultDivision = divideByThree('Live live commander');
console.log('Function № 9', resultDivision);