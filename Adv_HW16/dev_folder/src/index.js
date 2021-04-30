"use strick";

import {
  applePriceKg, mangoPriceKg, kiwiPriceKg, sumPrices, sumRoundedPrices,
  hundredsRoundedSumPrices, oddEvenCheck, change, meanPrices, toPay, income
} from './modules/HW1_main';
import { getAmount } from './modules/HW2_main';
import {
  getMaxDigit, raiseToPower, fixCamelCase, calculateSalaries,
  getRandomNumber, countLetters, convertCurrency, getRandomPassword,
  deleteLetters, isPalindrome, deleteDuplicateLetter
} from './modules/HW3_main';
import {
  getPairs, assignThemesToPairs, matchStudentsMarks, matchPairsMarks,
  students, pairs, themes, marks, pairsThemes
} from './modules/HW4_main';
import {
  getRandomArray, getAverage, getMedian, filterEvenNumbers, countPositiveNumbers,
  getDividedByFive, replaceBadWords, divideByThree
} from './modules/HW5_main';
import {
  studentsArr, getSubjects, getAverageMark, getStudentInfo, getArrNames,
  getBestStudent, calculateWordLetters
} from './modules/HW6_main';
import {
  ukraine, latvia, litva, getMyTaxes, getMiddleTaxes, getTotalTaxes, getMySalary
} from './modules/HW7_main';
import {
  generateBlocks, showBlocksBtn, blinkBlocksBtn, setIntervalBlink
} from './modules/HW10_main';
import { keyA, keyS, keyD, keyF } from './modules/HW11_main';
import { } from './modules/HW12_main';
import { } from './modules/HW15_main';

import './style.css';
import './styles/btn_styles.css';
import ico from './assets/img/dopler.jpeg';
import logo from './assets/img/logo.png';
import englishImg from './assets/img/english_lessons.png';
import audioForKeyA from './assets/audio/sound-A.mp3';
import audioForKeyS from './assets/audio/sound-S.mp3';
import audioForKeyD from './assets/audio/sound-D.mp3';
import audioForKeyF from './assets/audio/sound-F.mp3';

const audioA = new Audio(audioForKeyA),
  audioS = new Audio(audioForKeyS),
  audioD = new Audio(audioForKeyD),
  audioF = new Audio(audioForKeyF);

function setDisplayStyle(element) {
  if (element.getAttribute('style') === 'display: none;') {
    element.setAttribute('style', 'display: flex;');
  } else {
    element.setAttribute('style', 'display: none;');
  }
}

const main = document.body;
document.head.insertAdjacentHTML('afterbegin',
  `<link rel="shortcut icon" href="${ico}" type="image/x-icon">`
);

const hw1 = document.getElementById('hw1');
hw1.insertAdjacentHTML('beforeend',
  `<p>Максимальна ціна: <i>${Math.max(applePriceKg, mangoPriceKg, kiwiPriceKg)}</i></p>
    <p>Мінімальна ціна: <i>${Math.min(applePriceKg, mangoPriceKg, kiwiPriceKg)}</i></p>
    <p>Вартість всіх товарів: <i>${sumPrices}</i></p>
    <p>Округлена у меншу сторону вартість всіх товарів: <i>${sumRoundedPrices}</i></p>
    <p>Округлена до сотень вартість всіх товарів: <i>${hundredsRoundedSumPrices}</i></p>
    <p>Чи є сума всіх товарів парним числом: <i>${oddEvenCheck}</i></p>
    <p>Сума решти, при оплаті всіх товарів (без округлення): <i>${change}</i></p>
    <p>Cереднє значення цін, округлене до другого знаку: <i>${meanPrices}</i></p>
    <p>Сумма до сплати з урахуванням знижки: <i>${toPay}</i></p>
    <p>Чистий прибуток, якщо клієнт заплатив зі знижкою: <i>${income.toFixed(2)}</i></p>
`);

const hw2 = document.getElementById('hw2');
hw2.insertAdjacentHTML('beforeend', getAmount());

const hw3 = document.getElementById('hw3');
hw3.insertAdjacentHTML('beforeend',
  `<h3>Результати виконання функцій:</h3>
    <p>1. console.log(&#96;&#36;&#123;getMaxDigit(41288931)&#125;&#96;) - <i>${getMaxDigit(41288931)}</i></p>
    <p>2. raiseToPower(5, 3) - <i>${raiseToPower(5, 3)}</i></p>
    <p>3. fixCamelCase("tEST") - <i>${fixCamelCase("tEST")}</i></p>
    <p>4. calculateSalaries(18, 1.5, 25000) - <i>${calculateSalaries(18, 1.5, 25000)}</i></p>
    <p>5. getRandomNumber(10, 100) - <i>${getRandomNumber(10, 100)}</i></p>
    <p>6. countLetters('Hello World', 'l') - <i>${countLetters('Hello World', 'l')}</i></p>
    <p>7. convertCurrency('2801uah') - <i>${convertCurrency('2801uah')}</i></p>
    <p>8. getRandomPassword(4) - <i>${getRandomPassword(4)}</i></p>
    <p>9. deleteLetters('Hello, hello World', 'h') - <i>${deleteLetters('Hello, hello World', 'h')}</i></p>
    <p>10. isPalindrome('Я с леди все же свиделся') - <i>${isPalindrome('Я с леди все же свиделся')}</i></p>
    <p>11. deleteDuplicateLetter('Бісквіт був дуже ніжним') - <i>${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</i></p>
`);

const hw4 = document.getElementById('hw4');
hw4.insertAdjacentHTML('beforeend',
  `<h3>Результати виконання функцій:</h3>
    <p>1. getPairs(students) - <i>${JSON.stringify(getPairs(students))}</i></p>
    <p>2. assignThemesToPairs(pairs, themes) - <i>${JSON.stringify(assignThemesToPairs(pairs, themes))}</i></p>
    <p>3. matchStudentsMarks(students, marks) - <i>${JSON.stringify(matchStudentsMarks(students, marks))}</i></p>
    <p>4. matchPairsMarks(pairsThemes) - <i>${JSON.stringify(matchPairsMarks(pairsThemes))}</i></p>
`);

const hw5 = document.getElementById('hw5');
hw5.insertAdjacentHTML('beforeend',
  `<h3>Результати виконання функцій:</h3>
    <p>1. getRandomArray(15, 1, 100) - <i>${JSON.stringify(getRandomArray(15, 1, 100))}</i></p>
    <p>3. getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
      - <i>${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i></p>
    <p>4. getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
      - <i>${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</i></p>
    <p>5. filterEvenNumbers(1, 2, 3, 4, 5, 6) - <i>${JSON.stringify(filterEvenNumbers(1, 2, 3, 4, 5, 6))}</i></p>
    <p>6. countPositiveNumbers(1, -2, 3, -4, -5, 6) - <i>${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</i></p>
    <p>7. getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
      - <i>${JSON.stringify(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))}</i></p>
    <p>8. replaceBadWords("Are you fucking kidding? fuck... Holy shit! It's bullshit")
      - <i>${replaceBadWords("Are you fucking kidding? fuck... Holy shit! It's bullshit")}</i></p>
    <p>9. divideByThree('Live live commander' - <i>${JSON.stringify(divideByThree('Live live commander'))}</i></p>
`);

const hw6 = document.getElementById('hw6');
hw6.insertAdjacentHTML('beforeend',
  `<h3>Результати виконання функцій:</h3>
    <p>1. getSubjects(studentsArr[0]) - <i>${JSON.stringify(getSubjects(studentsArr[0]))}</i></p>
    <p>2. getAverageMark(studentsArr[0]) - <i>${getAverageMark(studentsArr[0])}</i></p>
    <p>3. getStudentInfo(studentsArr[0]) - <i>${JSON.stringify(getStudentInfo(studentsArr[0]))}</i></p>
    <p>4. getArrNames(studentsArr) - <i>${JSON.stringify(getArrNames(studentsArr))}</i></p>
    <p>5. getBestStudent(studentsArr) - <i>${getBestStudent(studentsArr)}</i></p>
    <p>6. calculateWordLetters("тест") - <i>${JSON.stringify(calculateWordLetters("тест"))}</i></p>
`);

const hw7 = document.getElementById('hw7');
hw7.insertAdjacentHTML('beforeend',
  `<h3>Результати виконання функцій:</h3>
    <p>1. getMyTaxes.call(ukraine, 12500) - <i>${getMyTaxes.call(ukraine, 12500)}</i></p>
    <p>2. getMiddleTaxes.call(litva) - <i>${getMiddleTaxes.call(litva)}</i></p>
    <p>3. getTotalTaxes.call(ukraine) - <i>${getTotalTaxes.call(ukraine)}</i></p>
    <p>4. getMySalary.call(latvia) - <i><span id="for_hw7_f4"></span></i></p>
`);
const forViewSalaryInterval = document.getElementById('for_hw7_f4');
setInterval(() => {
  forViewSalaryInterval.innerHTML = `${(JSON.stringify(getMySalary.call(latvia)))}`;
}, 10000);

const hw9 = document.getElementById('hw9');
hw9.innerHTML =
  `<h2>#9</h2>
    <img class="english_img" src="${englishImg}"
      alt='a blackboard with the text "English lessons" written on it'>`;

const hw10 = document.getElementById('hw10');
hw10.insertAdjacentHTML('beforeend', showBlocksBtn);
document.getElementById('show_blocks').addEventListener('click', generateBlocks);
hw10.insertAdjacentHTML('beforeend', blinkBlocksBtn);
document.getElementById('blink_blocks').addEventListener('click', setIntervalBlink);
main.addEventListener('keydown', function (e) {

  if (e.keyCode === 65) {
    audioA.play();
  } else if (e.keyCode === 83) {
    audioS.play();
  } else if (e.keyCode === 68) {
    audioD.play();
  } else if (e.keyCode === 70) {
    audioF.play();
  } else {
    console.log(`Кнопка - "${(e.key)}" не используется`);
  }
});
main.addEventListener('click', function (e) {

  if (e.target === keyA) {
    audioA.play();
  } else if (e.target === keyS) {
    audioS.play();
  } else if (e.target === keyD) {
    audioD.play();
  } else if (e.target === keyF) {
    audioF.play();
  }
});

const hw12 = document.getElementById('hw12');
hw12.insertAdjacentHTML('beforeend', `<h1 id="for_promise"></h1>`);
const hw14 = document.getElementById('hw14');
hw14.innerHTML =
  `<h2>#14</h2>
    <img class="english_img" src="${englishImg}" 
      alt='a blackboard with the text "English lessons" written on it'>`;

const logoBtn = document.getElementById('logo_btn');
logoBtn.innerHTML = `<img src="${logo}" alt="logo Cursor">`;
const containerForBtns = document.getElementById('wrap_btns');
logoBtn.addEventListener('click', (() => {
  setDisplayStyle(containerForBtns);
  nextSlide.setAttribute('style', 'display: block;');
  logoBtn.setAttribute('style', 'display: none;');
  hw1.setAttribute('style', 'display: block;');
  const hw16 = document.getElementById('hw16');
  hw16.setAttribute('style', 'display: none;');
}));

let count = 1;
function* createIdGenerator(data) {

  while (count <= 16 || count >= 0) {
    if (data === 'up') {
      count++;
      yield count;
    } else if (data === 'down') {
      count--;
      yield count;
    }
  }
}
const idGeneratorUp = createIdGenerator('up');
const idGeneratorDown = createIdGenerator('down');

const nextSlide = document.getElementById('next_hw');
nextSlide.addEventListener('click', function () {
  const nextWrapHW = document.getElementById(`hw${idGeneratorUp.next().value}`);
  const wrapHW = nextWrapHW.previousElementSibling;
  wrapHW.setAttribute('style', 'display: none;');
  nextWrapHW.setAttribute('style', 'display: flex;');
  prevSlide.setAttribute('style', 'display: block;');

  if (nextWrapHW.getAttribute('id') === "hw16") {
    nextSlide.setAttribute('style', 'display: none;');
    prevSlide.setAttribute('style', 'display: none;');
    logoBtn.setAttribute('style', 'display: block;');
    logoBtn.addEventListener('click', (() => window.location.reload()));
  }
});

const prevSlide = document.getElementById('prev_hw');
prevSlide.addEventListener('click', function () {
  const prevWrapHW = document.getElementById(`hw${idGeneratorDown.next().value}`);
  prevWrapHW.setAttribute('style', 'display: flex;');
  const wrapHW = prevWrapHW.nextElementSibling;
  wrapHW.setAttribute('style', 'display: none;');

  if (prevWrapHW.getAttribute('id') === 'hw1') {
    prevSlide.setAttribute('style', 'display: none;');
  }
});