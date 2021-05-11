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

getRandomChinese(4)
  .then((result) => {
    // console.log('🚀 ~ result:', result);
    const h1 = document.getElementById('for_promise');
    h1.innerHTML = `${result}`;
  });
