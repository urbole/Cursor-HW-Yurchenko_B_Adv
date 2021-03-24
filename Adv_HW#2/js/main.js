let startNumber = null,
    finishNumber = null,
    result = 0;

do {
    startNumber = +prompt('Введіть ціле число, від якого ми почнемо складати');
} while (Number.isNaN(startNumber) || startNumber <= 0);

do {
    finishNumber = +prompt('Введіть ціле число, до якого ми будемо складати');
} while (Number.isNaN(finishNumber) || finishNumber <= 0);

const isSkipEvenNumber = confirm('Чи потрібно пропускати при складанні парні числа');

for (let i = startNumber; i <= finishNumber; i++) {
    if (isSkipEvenNumber === false || i % 2) {
        result += i;
    }
}

alert(`Сума чисел від: ${startNumber}, до: ${finishNumber}, дорівнює - ${result}.`);