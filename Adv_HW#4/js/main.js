"use strict";

const students = [
  "Олександр",
  "Ігор",
  "Олена",
  "Іра",
  "Олексій",
  "Світлана"
];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних"
];
const marks = [4, 5, 5, 3, 4, 5];


// 1
const getPairs = function (students) {
  const firstPair = [students[0], students[2]];
  const secondPair = [students[1], students[3]];
  const thirdPair = [students[4], students[5]];
  const studentsInPairs = [];
  studentsInPairs.push(firstPair, secondPair, thirdPair);

  return studentsInPairs;
};

const pairs = getPairs(students);
console.log(pairs);

// 2
const assignThemesToPairs = function (pairs, themes) {
  const themesForPairs = [];

  for (let index = 0; index < pairs.length; index++) {
    const pair = pairs[index];
    const theme = themes[index];
    themesForPairs.push([pair.join(' і ')].concat(theme));
  }

  return themesForPairs;
};

const pairsThemes = assignThemesToPairs(pairs, themes);
console.log(pairsThemes);


// 3
const matchStudentsMarks = function (students, marks) {
  const markListStudent = [];

  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    const mark = marks[index];
    markListStudent.push([student].concat(mark));
  }

  return markListStudent;
};

const studentsMarks = matchStudentsMarks(students, marks);
console.log(studentsMarks);


// 4
const matchPairsMarks = function (pairsThemes) {
  let marksPairsForProjects = [];

  const getRandomMark = () => Math.trunc(Math.random() * (5 - 1) + 1);

  for (let index = 0; index < pairsThemes.length; index++) {
    marksPairsForProjects.push(pairsThemes[index].concat(getRandomMark()));
  }
  
  return marksPairsForProjects;
};

const marksPairs = matchPairsMarks(pairsThemes);
console.log(marksPairs);