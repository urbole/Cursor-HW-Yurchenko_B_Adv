"use strick";

// const body = document.getElementById('main');
const keyA = document.querySelector('#btn-a');
const keyS = document.querySelector('#btn-s');
const keyD = document.querySelector('#btn-d');
const keyF = document.querySelector('#btn-f');
const audioA = document.getElementById('sound-a');
const audioS = document.getElementById('sound-s');
const audioD = document.getElementById('sound-d');
const audioF = document.getElementById('sound-f');

// body.addEventListener('keydown', function (e) {

//   if (e.keyCode === 65) {
//     audioA.play();
//   } else if (e.keyCode === 83){
//     audioS.play();    
//   } else if (e.keyCode === 68){
//     audioD.play();    
//   } else if (e.keyCode === 70){
//     audioF.play();    
//   } else {
//     console.log(`Кнопка - "${(e.key)}" не используется`);
//   }
// });

// body.addEventListener('click', function(e){

//   if(e.target === keyA){
//     audioA.play();
//   } else if (e.target === keyS){
//     audioS.play();
//   } else if (e.target === keyD){
//     audioD.play();
//   } else if (e.target === keyF){
//     audioF.play();
//   }
// });

export {
  keyA, keyS, keyD, keyF,audioA,audioS,audioD,audioF,
};
