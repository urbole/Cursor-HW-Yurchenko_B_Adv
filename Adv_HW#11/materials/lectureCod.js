"use strick";

function helloTeam() {
  console.log(this);
  console.log('Hello Team!');
}

function byeTeam() {
  console.log(this);
  console.log('Bye Team!');
}

document.querySelector('#myClick').onclick = function () {
  helloTeam();
  byeTeam();
};

document.querySelector('#myClick').addEventListener('click', helloTeam);
document.querySelector('#myClick').addEventListener('click', byeTeam);

//* EventListener

const optionA = document.querySelector('#optionA');
const optionB = document.querySelector('#optionB');

optionA.addEventListener('click', onOptionA);
optionB.addEventListener('click', onOptionB);

function onOptionA() {
  console.log('AAAAA');
  optionB.removeEventListener('click', onOptionB);
}
function onOptionB() {
  console.log('BBBBB');
  optionA.removeEventListener('click', onOptionA);
}

const itemOne = document.querySelector('#item_1');
const itemTwo = document.querySelector('#item_2');
const itemThird = document.querySelector('#item_3');

itemOne.addEventListener('click', function () {
  console.log(11111);
});

itemTwo.addEventListener('click', function (element) {
  console.log(22222);
  // console.log(e.target);
  element.stopPropagation();
});

itemThird.addEventListener('click', function (e) {
  console.log(33333);
  e.stopPropagation();
});

const list = document.querySelector('ul');
const addNumber = document.querySelector('#add-number');

list.addEventListener('click', function (e) {
  console.log(e.target);

  if (e.target.closest('li')) {
    console.log(true);
    e.target.innerHTML = e.target.innerHTML ** 2;
  }
});

addNumber.addEventListener('click', function () {
  const li = document.createElement('li');
  li.innerHTML = '10';
  list.appendChild(li);
});