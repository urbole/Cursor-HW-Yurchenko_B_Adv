"use strict";

const studentsArr = [{
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
/*
* * best practise:
* * const getSubjects = userInput => (
* *  Object.keys(userInput?.subjects).map(element => (
* *    element[0].toUpperCase() + element.slice(1).replaceAll('_', ' ')
* *  ))
* * );
*/
const getSubjects = userInput => {
  if (userInput.subjects) {
    const newArrSubjects = Object.keys(userInput.subjects);
    const changeInAppearance = newArrSubjects.map(element => (
      element[0].toUpperCase().concat(element.slice(1))).replaceAll('_', ' '));

    return changeInAppearance;
  }
};

const subjectList = getSubjects(studentsArr[0]);
// console.log('Function №1:', subjectList);

// 2
const getAverageMark = userInput => {
  let result = 0;
  if (userInput.subjects) {
    let newMark = [];
    let sum = 0;
    const markArr = Object.values(userInput.subjects);
    const ollMarkArr = markArr.flat();
    ollMarkArr.forEach(function (item, i, newMark) {
      sum = (sum + item / newMark.length);
      result = +sum.toFixed(2);
    });
  }

  return result;
};

const averageMark = getAverageMark(studentsArr[0]);
// console.log('Function №2:', averageMark);

// 3
const getStudentInfo = function (userInput) {
  const newStudentInfoObj = Object.values(userInput);
  const averageMark = getAverageMark(userInput);
  const name = newStudentInfoObj[0];
  const course = newStudentInfoObj[1];
  const result = { course, name, averageMark };

  return result;
};

const studentInfo = getStudentInfo(studentsArr[0]);
// console.log('Function №3:', studentInfo);

// 4
const getArrNames = function (studentsArr) {
  return studentsArr.map((student) => student.name).sort();
};

const sortStudentsNames = getArrNames(studentsArr);
// console.log('Function №4:', sortStudentsNames);

// 5
const getBestStudent = function (studentsArr) {
  let bestStudent = "";
  let result = "";

  for (let i = 0; i < studentsArr.length; i++) {
    const selfAverageMark = getAverageMark(studentsArr[i]);

    if (result < selfAverageMark) {
      result = selfAverageMark;
      bestStudent = studentsArr[i].name;
    }
  }

  return bestStudent;
};

const bestStudent = getBestStudent(studentsArr);
// console.log('Function №5:', bestStudent);

// 6
function calculateWordLetters(userInput) {
  const resultObj = {};
  const lettersArr = [...userInput];
  let itemLettersArr = 0;

  for (let count = 0; count < lettersArr.length; count++) {
    let counter = 0;
    itemLettersArr = lettersArr[count];

    for (let index = 0; index < lettersArr.length; index++) {
      if (itemLettersArr === lettersArr[index]) {
        counter = counter + 1;
      }
    }
    resultObj[lettersArr[count]] = counter;
  }

  return resultObj;
}
const costingResult = calculateWordLetters("тест");
// console.log('Function №6:', costingResult);

export {
  studentsArr, getSubjects, getAverageMark, getStudentInfo, getArrNames,
  getBestStudent, calculateWordLetters
};