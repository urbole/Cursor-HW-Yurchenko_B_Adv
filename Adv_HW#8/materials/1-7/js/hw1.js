"use strick";

 //* 1 - Домашнє завдання по темі Змінні та типи даних.
 //? https://trostinsky.github.io/cursor-new-materials/js/homeworks/01-variable-types-uk.html

const apple = 15.678,
  kiwi = 123.965,
  banana = 90.2345,
  banknote = 500;

const maxPrice = Math.max(apple, kiwi, banana);
console.log('maxPrice:', maxPrice);

const minPrice = Math.min(apple, kiwi, banana);
console.log('minPrice:', minPrice);

const sumPrices = apple + kiwi + banana;
console.log('sumPrices:', sumPrices);

const sumFixedPrices = (Math.trunc(apple)) + (Math.trunc(kiwi)) + (Math.trunc(banana));
console.log('sumFixedPrices:', sumFixedPrices);

const sumRoundPrises = Math.trunc(sumPrices / 100) * 100;
console.log('sumRoundPrises:', sumRoundPrises);

const isDouble = sumFixedPrices % 2 === 0;
console.log('isDouble:', isDouble);

const changeAfterPay = (banknote - sumPrices).toFixed(2);
console.log('changeAfterPay:', changeAfterPay);

const averageValuePrices = +((apple + kiwi + banana) / 3).toFixed(2);
console.log('averageValuePrices:', averageValuePrices);

const randomSalle = +(Math.random() * (100 - 1) + 1).toFixed();
console.log('randomSalle:', randomSalle);

const amountWithSale = +(sumPrices - ((sumPrices / 100) * randomSalle)).toFixed(2);
console.log('amountWithSale:', amountWithSale);

const profit = +(amountWithSale - (sumPrices / 2)).toFixed(2);
console.log('profit:', profit);

console.log(`Максимальна ціна: ${maxPrice}`);
console.log(`Мінімальна ціна: ${minPrice}`);
console.log(`Вартість всіх товарів: ${(sumPrices).toFixed(2)}`);
console.log(`Чи є сума всіх товарів (округлена в меншу сторону) парним числом: ${isDouble}`);
// ...