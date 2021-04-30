"use strick";

// const main = document.body;
// main.classList.add('main');
// main.style.backgroundColor = '#242424';
// main.style.boxSizing = 'border-box';
// main.style.display = 'flex';
// main.style.flexDirection = 'column';
// main.style.alignItems = 'center';
// const title =
//   `<h2 id="title"
//     style="color:bisque;
//     margin-top: 10%;
//     text-align: center;">
//   </h2>`;
// main.insertAdjacentHTML('afterbegin', title);
// const myTitle = document.getElementById('title');
// myTitle.innerHTML = 'Adv_HW#10 "DOM"';

const generateColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

function generateBlocks() {
  const btnDisabled = document.getElementById('show_blocks');
  btnDisabled.setAttribute('style', "display:none");
  const btnBlink = document.getElementById('blink_blocks');
  btnBlink.setAttribute('style',
    `display:inline-block;
      background-color: #242424;
      color: bisque;
      padding: 0 10px;
      height: 50px;
      width: 150px;
      cursor: pointer;
      border-radius: 3px;
      border: 1px solid bisque;`
  );
  const box =
    `<div class="box"
      style="display: flex;
      flex-wrap: wrap;
      margin: 50px auto;
      width: 250px;
      height: 250px;">
    </div>`;
  btnBlink.insertAdjacentHTML('afterend', box);
  const container = document.querySelector('.box');
  let idItem = 0;

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
    style="display:inline-block;
    background-color: bisque;
    color: #242424;
    padding: 0 10px;
    height: 50px;
    width: 150px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #242424;">
      Show blocks
  </button>`;
// myTitle.insertAdjacentHTML('afterend', showBlocksBtn);
// document.getElementById('show_blocks').addEventListener('click', generateBlocks);
// const showBtn = document.getElementById('show_blocks');
const blinkBlocksBtn = `<button id="blink_blocks" style="display:none;">Blink blocks</button>`;
// showBtn.insertAdjacentHTML('afterend', blinkBlocksBtn);
// document.getElementById('blink_blocks').addEventListener('click', setIntervalBlink);

function changeColorBG() {
  const btnDisabled = document.getElementById('blink_blocks');
  btnDisabled.setAttribute('style', "display:none");
  const blockItem = document.querySelectorAll('.box__item');
  blockItem.forEach(item => item.style.backgroundColor = generateColor());
}

function setIntervalBlink(time = 1000) {
  setInterval(() => changeColorBG(), 1000);
}

export {
  generateColor,
  generateBlocks,
  showBlocksBtn,
  blinkBlocksBtn,
  changeColorBG,
  setIntervalBlink
};