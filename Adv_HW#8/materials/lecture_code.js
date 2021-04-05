// const user = {
//   name: 'Bohdan',
//   password: '12345',
// };

// const admin ={
//   name:'Admin',
//   password:'klfgLAKJHlk'
// };

// function userInfo(users) {
//   console.log(`Name: ${users.name}, password: ${users.password}`);
// }

// userInfo(user);
// userInfo(admin);

// console.log(`${vladislav.finished} заданий готово`);
// console.log(vladislav.inprogress('Object'));
// console.log(`${vladislav.finished} заданий готово`);

// console.log(`${oleh.finished} заданий готово`);
// console.log(oleh.inprogress('Array'));
// console.log(`${oleh.finished} заданий готово`);

// const vladislav = {
//   name: 'Vladislav',
//   finished: 5,
//   inprogress: function(homework){
//     this.finished +=1;
//     return `${this.name} сделал домашку по ${homework}`;
//   }
// };

// const oleh = {
//   name: 'Oleh',
//   finished: 4,
//   inprogress: function(homework){
//     this.finished +=1;
//     return `${this.name} сделал домашку по ${homework}`;
//   }
// };

// const Student = function (name, finished, inprogress) {
//   this.name = name;
//   this.finished = finished;
//   this.inprogress = function (homework) {
//     this.finished += 1;
//     return `${this.name} сделал домашку по ${homework}`;
//   };
// }
// const vladislav = new Student('Vladislav', null);
// const oleh = new Student('Oleh', 4);

// console.log(vladislav);
// console.log(oleh);

// class Student {
//   constructor(name, finished) {
//     this.name = name;
//     this.finished = finished;
//   }

//   static sum(finished) {
//     return 10 - finished;
//   }

//   get getName() {
//     return this.name;

//   }

//   set setName(name) {
//     this.name = name;
//   }

// }

// const vladislav = new Student('Vladislav', 5);
// const oleh = new Student('Oleh', 4);

// // console.log(Student.sum(oleh.finished));
// // console.log(vladislav.getName);

// vladislav.setName = 'Oleh';
// console.log(vladislav);

class Ship {
  constructor(name, country, health) {
    this.name = name;
    this.country = country;
    this.health = health;
  }
}

class Battleship extends Ship {
  constructor(name, country, health, armour) {
    super(name, country, health);
    this.armour = armour;
  }
}

const bismark = new Battleship("Bismark", "Germany", 80000, 20000);
console.log("🚀 ~", bismark)


class Destroyer extends Ship {
  constructor(name, country, health, torpedoes) {
    super(name, country, health);
    this.torpedoes = torpedoes;
  }
}

const monaghan = new Destroyer("Monaghan", "USA", 8000, 4);
console.log("🚀 ~", monaghan);
