"use strick";

const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};
const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};

// 1
function getMyTaxes(salary) {
  return +(salary * this.tax).toFixed(2);
}

// console.log("🚀 ~ Function - №1", getMyTaxes.call(ukraine, 12500));

// 2
function getMiddleTaxes() {
  const middleTax = +(this.tax * this.middleSalary).toFixed(2);

  return middleTax;
}

// console.log("🚀 ~ Function - №2", getMiddleTaxes.call(litva));

// 3
function getTotalTaxes() {
  const sumTaxes = +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
  return sumTaxes;
}

// console.log("🚀 ~ Function - №3", getTotalTaxes.call(ukraine));

// 4
// console.log(`🚀 ~ Expect result for "Function №4" in 10 seconds:`);

function getMySalary() {
  const minSalary = 1500,
    maxSalary = 2000;
  const getRandomSalary = +((Math.random() * (maxSalary - minSalary)) + minSalary).toFixed(2);
  const resultTaxes = (this.tax * getRandomSalary);
  const profit = +(getRandomSalary - resultTaxes).toFixed(2);

  return {
    salary: getRandomSalary,
    taxes: resultTaxes,
    profit: profit
  };
}

setInterval(() => {
  const result = getMySalary.call(latvia);
  // console.log(`🚀 ~ Function - №4  - 10sec timeout `, getMySalary.call(latvia));
  return result;
}, 10000);

export {
  ukraine, latvia, litva, getMyTaxes, getMiddleTaxes, getTotalTaxes, getMySalary
};