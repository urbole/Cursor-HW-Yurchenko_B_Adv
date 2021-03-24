var x = { 0: 10 }
var y = { '0': 11 }
var z = { [y]: 12 }






function doStuff() {
  const x = 10
  
  const obj1 = {
    foo: {
      bar: 20,
    }
  }
  
  const obj2 = obj1
  
  obj1.foo = 30
  
  console.log(obj1);
  console.log(obj2);
}

/**
 * heap
 * [
 * 
 * 
 * #43 [.....30..................................]
 * 
 * 
 * 
 * 
 * #87 [.............56........................]
 * 
 * 
 * 
 * #734 [...20...................................]
 * 
 * ]
 */

/**
 * stack start
 * -----------------------
 * ...
 * -----------------------
 * anonymous function
 * ...
 * -----------------------
 * doStuff
 * ...
 * - local variable x (10)
 * - local variable obj1 (#87)
 * - local variable obj2 (#87)
 * ...
 * -----------------------
 * log
 * ...
 */
doStuff()





const phone = {
  size: 7.8,
  weight: 0.284,
  name: 'iPhone',
  price: 15000,
  operationSystem: 'iOS',
}

phone.operationSystem





const obj1 = {
  foo: {
    ttt: 10,
  },
}

const obj2 = {
  ...obj1,
  foo: {
    ...obj1.foo,
  },
  bar: 20,
}

const obj3 = Object.assign({ func: () => {} }, obj1, obj2)

const str = JSON.stringify(obj3)
console.log('str', str);
const obj4 = JSON.parse(str)

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

console.log(obj1.foo === obj2.foo);
console.log(obj1 === obj2);
console.log(obj3.foo === obj4.foo)




console.log(obj3.foo);
console.log(obj3['foo']);

const key = 'foo'
console.log(obj3[key]);



const transportKey = 'foo'

if (transportKey === 'scooter') {
  console.log(`I'm taking a scooter`);
} else if (transportKey === 'motorbike') {
  console.log(`Let's take a motorbike`);
} else if (transportKey === 'car') {
  console.log(`A car would be nide`);
} else {
  console.log(`The plane is my transport`);
}

const transportMap = {
  scooter: () => console.log(`I'm taking a scooter`),
  motorbike: () => console.log(`Let's take a motorbike`),
  car: () => console.log(`A car would be nide`),
  plane: () => console.log(`The plane is my transport`),
}

console.log(transportMap);

const validTransportKey = transportMap.hasOwnProperty(transportKey)
  ? transportKey
  : 'plane'

const func = transportMap[validTransportKey]

func()

console.log(Object.keys(transportMap));
console.log(Object.values(transportMap));
console.log(Object.entries(transportMap));




const x = {
  do1: function () {},
  do2() {},
  do3: () => {}
}




const country = {
  cities: ['kyiv'],

  setCities(cities) {
    this.cities = cities
  }
}

country.setCities(['lviv'])

console.log(country);





function foo() {
  console.log(this)
}

foo()

var x = { bar: foo }

x.bar()

new foo()

foo.apply({})



function getValidator() {
  return {
    shouldHaveOnlyLatin: false,
    shouldHaveDigits: false,

    latinOnly() {
      this.shouldHaveOnlyLatin = true
      return this
    },

    hasDigits() {
      this.shouldHaveDigits = true
      return this
    },

    /**
     * @param {string} value 
     */
    validate(value) {
      let isValid = true

      if (this.shouldHaveOnlyLatin) {
        isValid = value.split('').every(
          c => {
            const lowerChar = c.toLowerCase()
            return 'a' <= lowerChar && lowerChar <= 'z'
          }
        )
      }

      if (this.shouldHaveDigits) {
        isValid = value.split('').some(c => '0' <= c && c <= '9')
      }

      return isValid
    }
  }
}

const validator = getValidator()
  .latinOnly()
  .hasDigits()

const latinValidator = getValidator()
  .latinOnly()

const value = 'foo'

const result = validator.validate(value)

console.log(value, result)

const phone = {
  price: 150,
  name: 'iPhone',
  foo: {
    bar: 10,
  }
}

const {
  price: phonePrice,
  foo,
  ...otherProperties
} = phone

console.log(otherProperties)

const { bar } = foo

const price = 10

const array = [1, 2, 3, 4, 5]
const [, second, ...others] = array

console.log(second);
console.log(others);

let a = 10
let b = 20;

[a, b] = [b, a]

console.log('a', a);
console.log('b', b);

const name = 'Bob'

const person = {
  name,
}

console.log(person)