const applePriceKg = 15.678;
const mangoPriceKg = 123.965;
const kiwiPriceKg = 90.2345;
const banknote500UAH = 500;
const discount = Math.random().toFixed(2) * 100;

console.log("max price - ", Math.max(applePriceKg, mangoPriceKg, kiwiPriceKg));
console.log("min price - ", Math.min(applePriceKg, mangoPriceKg, kiwiPriceKg));

const sumPrices = applePriceKg + mangoPriceKg + kiwiPriceKg;
console.log("sum all prices - ", sumPrices);

const sumRoundedPrices = Math.floor(applePriceKg) +
  Math.floor(mangoPriceKg) + Math.floor(kiwiPriceKg);
console.log("rounded sum all prices - ", sumRoundedPrices);

const hundredsRoundedSumPrices = Math.round(sumPrices / 100) * 100;
console.log("rounded sum of all prices to hundreds - ", hundredsRoundedSumPrices);

const oddEvenCheck = sumRoundedPrices % 2 === 0; 
console.log("whether the sum of the rounded down prices is even - ", oddEvenCheck);

const change = banknote500UAH - sumPrices;
console.log("change upon payment  - ", change);

const meanPrices = (sumPrices / 3).toFixed(2);
console.log("rounded average - ", +meanPrices);

console.log("random discount - ", discount, "%");

const toPay = (sumPrices - (sumPrices / 100 * discount)).toFixed(2);
console.log("to pay with a discount - ", +toPay);

const income = ((sumPrices.toFixed(2)) / 2) - ((sumPrices.toFixed(2)) - toPay);
console.log("income - ", income);

const myString = `
  Максимальна ціна: ${Math.max(applePriceKg, mangoPriceKg, kiwiPriceKg)}\n
  Мінімальна ціна: ${Math.min(applePriceKg, mangoPriceKg, kiwiPriceKg)}\n
  Вартість всіх товарів: ${sumPrices}\n
  Округлена у меньшу сторону вртість всіх товарів: ${sumRoundedPrices}\n
  Округлена до сотень вртість всіх товарів: ${hundredsRoundedSumPrices}\n
  Чи є сума всіх товарів парним числом: ${oddEvenCheck}\n
  Сума решти, при оплаті всіх товарів (без округлення): ${change}\n
  Cереднє значення цін, округлене до другого знаку: ${meanPrices}\n
  Сумма до сплати з урахуванням знижки: ${toPay}\n
  Чистий прибуток, якщо клієнт заплатив зі знижкою: ${income}`;
console.log(myString);