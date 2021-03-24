
const badWords = ['fuck', 'shit'];
const checkBadWords = function (badWords) {


};

((index + 1) % 3 === 0)

(/\s+/g, '')

// const myCheck = check("Holy shit! It's bullshit!");
const myCheck = checkBadWords("fuckingshit?");
console.log('Function № 8:', myCheck);


for (let index = 0; index < noCensoredArr.length; index++) {
  if (noCensoredArr[index].indexOf(badWords) >= 0) {
    censoredArr.push(noCensoredArr[index].replace(badWords, '****'));
  } else {
    censoredArr.push(noCensoredArr[index]);
  }
  result = censoredArr.join(" ");
}

return result;

let badWord = [];
let noCensoredArr = [];
let censoredArr = [];
let result = "";
badWord = 'fuck';
noCensoredArr = userInput;
console.log(noCensoredArr);

result = noCensoredArr.replaceAll(badWord, '****');

return result;

/ const replaceBadWords = function (userInput) {
let badWords = [];
let noCensoredArr = [];
let censoredArr = [];
let censoredResult = "";
let result = "";
badWords = ['shit', 'fuck'];
noCensoredArr = userInput;
// console.log(badWords.length);
// console.log(userInput);

// result = noCensoredArr.replaceAll(badWords, '****');



return result;
};
// const censored = replaceBadWords("Are you fucking kidding? Are you fucking kidding?");

const censored = replaceBadWords("Are you fucking kidding? Holy shit!");
// const censored = replaceBadWords("Holy shit!");
console.log(censored);