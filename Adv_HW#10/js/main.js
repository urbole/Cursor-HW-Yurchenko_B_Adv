"use strick";

const main = document.body;
main.classList.add('main');
main.style.backgroundColor = '#242424';
main.style.boxSizing = 'border-box';

const box =
  `<div class="box"
    style="
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    width: 250px;
    height: 250px;">
  </div>`;
main.insertAdjacentHTML('afterbegin', box);

const container = document.querySelector('.box');

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

  for (let i = 1; i <= 25; i++) {
    idItem = ++idItem;
    container.insertAdjacentHTML('beforeend',
      `<div class="box__item" data-id="box__item-${idItem}"
      style="
      background-color:${generateColor()};
      width: 50px;
      height: 50px;
      display: inline-block;
      "></div>`
    );
  }
}

generateBlocks();