"use strick";

function getDelay50ms() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 50);
  });
}

async function getRandomChinese(length) {
  let newStr = '';
  let count = 0;

  while (count < length) {
    count++;
    await getDelay50ms();
    newStr += String.fromCharCode(parseInt(String(Date.now()).slice(-5)));
  }

  return newStr;
}

getRandomChinese(14)
  .then((result) => {
    console.log('🚀 ~ result:', result);
  });
