"use strict";

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4],
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5],
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5],
  }
}];

// 1
const getSubjects = function (userInput) {
  const student = { ...userInput };
  const studentSubjects = Object.keys(student.subjects);
  const newArrItem = [];
  const upperFirstLetter = [];

  const isUpperCase = function (newArrItem) {
    const firstLetter = newArrItem[0];
    const upperFirstLetter = firstLetter.toUpperCase();
    const bigFirstLetter = upperFirstLetter + newArrItem.slice(1);

    return bigFirstLetter;
  };

  const getNormaliseKeyName = function (newArrItem) {
    const result = [];

    for (let i = 0; i < newArrItem.length; i++) {

      if (newArrItem[i] < 'a' || newArrItem[i] > 'z') {
        result.push(newArrItem[i].replace(newArrItem[i], " "));
      } else {
        result.push(newArrItem[i]);
      }
    }

    return result.join("");
  };

  for (let i = 0; i < studentSubjects.length; i++) {
    newArrItem.push(getNormaliseKeyName(studentSubjects[i]));
    upperFirstLetter.push(isUpperCase(newArrItem[i]));
  }

  return upperFirstLetter;
};

const subjectList = getSubjects(students[0]);
console.log('Function №1:', subjectList);

// 2
const getAverageMark = function (userInput) {
  const student = { ...userInput };
  const marksArrays = Object.values(student.subjects);
  let newArr = [];
  let marksArr = newArr;

  for (let index = 0; index < marksArrays.length; index++) {
    marksArr = marksArr.concat(marksArrays[index]);
  }

  const averageMark = function () {
    let sum = 0;

    for (let index = 0; index < marksArr.length; index++) {
      sum += marksArr[index];
    }
    
    marksArr = (sum / marksArr.length).toFixed(2);

    return +marksArr;
  };

  return averageMark();
};

const averageMark = getAverageMark(students[0]);
console.log('Function №2:', averageMark);

// 3
const getStudentInfo = function (userInput) {
  let averageMark = 0;
  averageMark = getAverageMark(userInput);
  delete userInput.subjects;
  const result = {
    ...userInput,
    averageMark
  };

  return result;
};

const studentInfo = getStudentInfo(students[0]);
console.log('Function №3:', studentInfo);


// 4
const getStudentsNames = function (students) {
  let result = [];

  for (const [name] in students) {

    if (Object.hasOwnProperty.call(students, [name])) {
      const element = students[name];
      const studentInfoArr = Object.values(element);
      result.push(studentInfoArr[0]);
    }
  }

  return result.sort();
};

const sortStudentsNames = getStudentsNames(students);
console.log('Function №4:', sortStudentsNames);

// 5
const getBestStudent = function (students) {
  let iteration = [];
  // let averageMark = 0;
  const result = "";

  for (const name in students) {
    if (Object.hasOwnProperty.call(students, name)) {
      iteration = students[name];

      console.log(iteration);
    }
  }

  return result;
};

const bestStudent = getBestStudent(students);
console.log(bestStudent);