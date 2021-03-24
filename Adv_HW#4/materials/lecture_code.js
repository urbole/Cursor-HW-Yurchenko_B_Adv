const creatures = ['elf', 'ogre', 'dwarf'];

function kill(creature) {
  const index = creatures.indexOf(creature);
  creatures.splice(index, 1);
}

while (creatures.includes('ogre')) {
  kill('ogre');
}

const squad = creatures.concat(['wizard', 'hobbit']);

if (creatures.includes('ogre')) {
  console.log('AAAAAAA, ogre!');
}

console.log('creatures', creatures);
console.log('squad', squad);



// concat

const creatures = ['elf', 'ogre', 'dwarf'];

function kill(creature) {
  const index = creatures.indexOf(creature);
creatures.splice(index, 1);
}

kill('ogre');

const squad = creatures.concat('wizard', 'hobbit'); 
const squad = creatures.concat(['wizard', 'hobbit']);

const squad = [].concat(['wizard', 'hobbit']);

const temp = ['wizard', 'hobbit'];
const squad = [].concat(temp);

temp.push('ogre');


if (creatures.includes('ogre')) {
  console.log('AAAAAAA, ogre!');
}

console.log('creatures', creatures);
console.log('temp', temp);
console.log('squad', squad);

// indexOf

const creatures = ['elf', 'ogre', 'dwarf'];

function kill(creature) {
  const index = creatures.indexOf(creature);
creatures.splice(index, 1);
}

kill('elf');

if (creatures.includes('ogre')) {
  console.log('AAAAAAA, ogre!');
}

console.log(creatures);


// includes

const creatures = ['elf', 'ogre', 'dwarf'];

if (creatures.includes('ogre')) {
  console.log('AAAAAAA, ogre!');
}


/**
 * It will print cities to the console
 * @param {string[]} cities Cities of Ukraine
 */

function printCities(cities) {
  const upperCaseCities = [];

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const firstLetter = city[0].toUpperCase();
    const remainder = city.slice(1);
    upperCaseCities.push(`${firstLetter}${remainder}`);
    // cities[i] = `${firstLetter}${remainder}`;

  }
  console.log(upperCaseCities.join(', '));
}

const cities = ['kyiv', 'lviv', 'odessa'];

printCities(cities);

for (const city of cities) {
  if (city === 'kyiv') {
    console.log('Prices are crazy!');
  }
}



let a = [55];
let b = a;

a = [123]

console.log(a);
console.log(b);

// reverse

const str = 'uk,en,ua,ru';
const array = str.split(',');
const reversedArray = array.reverse();
const joinedStr = reversedArray.join(', ');

console.log('str: ', str);
console.log('array: ', array);
console.log('reversedArray: ', reversedArray);
console.log('joinedStr: ', joinedStr);


// join

const str = 'uk,en,ua,ru';
const array = str.split(',');
// const joinedStr = array.join();
// const joinedStr = array.join('');
const joinedStr = array.join('; ');

console.log('str: ', str);
console.log('array: ', array);
console.log('joinedStr: ', joinedStr);


// split
const str = 'uk,en,ua,ru';
const array = str.split(',');

console.log('str: ', str);
console.log('array: ', array);



// spice

const teachers = ['Bob', 'Mark', 'Clark', 'Emma'];
const freeTeachers = teachers.splice(2, 0, 'Smith');
console.log('freeTeachers', freeTeachers);
console.log('teachers', teachers);

// slice

const teachers = ['Bob', 'Mark', 'Clark', 'Smith'];
const freeTeachers = teachers.slice(-2, -1);
console.log('freeTeachers', freeTeachers);
console.log('teachers', teachers);


function getNumbers(amount) {
  const numbers = [];

  for (let index = 0; index < amount; index++) {
    const input = prompt('enter a number');
    const number = Number.parseInt(input);
    numbers.push(number);
  }

  return numbers;
}

function getMax(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number > max) {
      max = number;
    }
  }

  return max;
}

const numbers = getNumbers(4);
const max = getMax(numbers);

console.log(numbers);
console.log(max);

const teacher1 = "Bob";
const teacher2 = "Mark";
const array = [
  [1, 2, 3],
  teacher1,
  teacher2
];

console.log(array[array.length - 1]);

const teachers = ['Bob', 'Mark'];
const t = teachers.shift();
console.log(teachers);

