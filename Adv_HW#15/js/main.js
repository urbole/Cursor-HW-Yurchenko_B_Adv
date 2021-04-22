'use strick';

function* createIdGenerator() {
  let count = 1;

  while (true) {
    yield count++;
  }
}

const idGenerator = createIdGenerator();
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);

const infoOfCurrentSize = document.getElementById('current_font-size');
const upFontSizeBtn = document.getElementById('up_font-size');
const downFontSizeBtn = document.getElementById('down_font-size');
const resetFontSizeBtn = document.getElementById('reset_font-size');
const hwTitle = document.getElementById('title');
const styleHwTitle = getComputedStyle(hwTitle);
const computedFontSizeTitle = styleHwTitle.fontSize.slice(0, -2);
const wrapBtnReset = document.getElementById('wrap_reset-btn');

infoOfCurrentSize.innerText = `current font size: ${computedFontSizeTitle}px`;
let currentFontSize = computedFontSizeTitle;

function* newFontGenerator(data) {

  while (true) {
    if (data === 'up') {
      currentFontSize = +currentFontSize + 2;
      yield currentFontSize;
    } else if (data === 'down') {
      currentFontSize = currentFontSize - 2;
      yield currentFontSize;
    } else if (data === 'reset') {
      currentFontSize = computedFontSizeTitle;
      yield currentFontSize;
    }
  }
}
const fontGeneratorUp = newFontGenerator('up');
const fontGeneratorDown = newFontGenerator('down');
const fontGeneratorReset = newFontGenerator('reset');

console.log('🚀 ~ fontGenerator.next("up").value ->', fontGeneratorUp.next().value);
console.log('🚀 ~ fontGenerator.next("up").value ->', fontGeneratorUp.next().value);
console.log('🚀 ~ fontGenerator.next("up").value ->', fontGeneratorUp.next().value);
console.log('🚀 ~ fontGenerator.next("reset").value ->', fontGeneratorReset.next().value);
console.log('🚀 ~ fontGenerator.next("down").value ->', fontGeneratorDown.next().value);
console.log('🚀 ~ fontGenerator.next("down").value ->', fontGeneratorDown.next().value);
console.log('🚀 ~ fontGenerator.next("down").value ->', fontGeneratorDown.next().value);
console.log('🚀 ~ fontGenerator.next("reset").value ->', fontGeneratorReset.next().value);

upFontSizeBtn.addEventListener('click', () => {
  hwTitle.style.fontSize = `${fontGeneratorUp.next().value}px`;
  resetFontSizeBtn.setAttribute('style', 'display:block');
  infoOfCurrentSize.innerText = `current font size: ${hwTitle.style.fontSize}`;
});

downFontSizeBtn.addEventListener('click', () => {
  hwTitle.style.fontSize = `${fontGeneratorDown.next().value}px`;
  resetFontSizeBtn.setAttribute('style', 'display:block');
  infoOfCurrentSize.innerText = `current font size: ${hwTitle.style.fontSize}`;
});

resetFontSizeBtn.addEventListener('click', () => {
  hwTitle.style.fontSize = `${fontGeneratorReset.next().value}px`;
  hwTitle.removeAttribute('style');
  resetFontSizeBtn.setAttribute('style', 'display:none');
  infoOfCurrentSize.innerText = `current font size: ${computedFontSizeTitle}px`;
});

