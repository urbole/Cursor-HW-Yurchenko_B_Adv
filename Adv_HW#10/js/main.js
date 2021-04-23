"use strick";

const main = document.body;
main.classList.add('main');
main.style.backgroundColor = '#242424';
main.style.boxSizing = 'border-box';
const title =
  `<h2 class="tile"
    style="color:bisque;
    padding-top: 10%;
    text-align: center;">
    Adv_HW#10 "DOM"
  </h2>`;
main.insertAdjacentHTML('afterbegin', title);
const generateColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

function generateBlocks() {
  let idItem = 0;
  const btnDisabled = document.getElementById('show_blocks');
  btnDisabled.setAttribute('style', "display:none");
  const btnBlink = document.getElementById('blink_blocks');
  btnBlink.setAttribute(
    'style',
      `display:inline-block;
      border: none;
      background-color: bisque;
      color: #242424;
      margin: 5px;
      padding: 0 10px;
      height: 50px;
      cursor: pointer;
      border-radius: 3px;
      border: 1px solid #242424;`
  );
  const box =
    `<div class="box"
      style="display: flex;
      flex-wrap: wrap;
      margin: 50px auto;
      width: 250px;
      height: 250px;">
    </div>`;
  main.insertAdjacentHTML('afterend', box);
  const container = document.querySelector('.box');

  for (let i = 1; i <= 25; i++) {
    idItem = idItem++;
    container.insertAdjacentHTML('beforeend',
      `<div class="box__item"
        style="background-color:${generateColor()};
        width: 50px;
        height: 50px;
        display: inline-block;">
      </div>`
    );
  }
}

const showBlocksBtn =
  `<button id="show_blocks"
    style=" border: none;
    background-color: bisque;
    color: #242424;
    margin: 5px;
    padding: 0 10px;
    height: 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #242424;">
      Show blocks
  </button>`;
main.insertAdjacentHTML('afterbegin', showBlocksBtn);
document.getElementById('show_blocks').addEventListener('click', generateBlocks);
const showBtn = document.getElementById('show_blocks');
const blinkBlocksBtn =
  `<button id="blink_blocks"
    style="display:none;
    border: none;
    background-color: bisque;
    color: #242424;
    margin: 5px;
    padding: 0 10px;
    height: 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #242424;">
      Blink blocks
  </button>`;
showBtn.insertAdjacentHTML('afterend', blinkBlocksBtn);
document.getElementById('blink_blocks').addEventListener('click', setIntervalBlink);

function changeColorBG() {
  const blockItem = document.querySelectorAll('.box__item');
  blockItem.forEach(item => item.style.backgroundColor = generateColor());
}

function setIntervalBlink(time = 1000) {
  setInterval(() => changeColorBG(), 1000);
}