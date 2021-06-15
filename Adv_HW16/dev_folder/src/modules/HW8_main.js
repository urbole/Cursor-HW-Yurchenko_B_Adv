class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.isDismiss = false;
    this.arrMarks = [];
  }

  get getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks() {
    return !this.isDismiss ? this.arrMarks : null;
  }

  set setMarks(mark) {
    return !this.isDismiss ? this.arrMarks.push(mark) : null;
  }

  get getAverageMark() {
    return this.arrMarks.reduce((sum, number) => sum + number, 0) / this.arrMarks.length;
  }

  dismiss() {
    this.isDismiss = true;
    console.log(`Студент ${this.fullName} відраховано`);
  }

  recover() {
    this.isDismiss = false;
    console.log(`Студент ${this.fullName} поновлен`);
  }
}

const student = new Student('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Бендер');

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship, 30000);
  }

  get getScholarship() {
    !this.isDismiss && this.getAverageMark >= 4 ?
      console.log(`${this.fullName}, отримав 1400 грн. стипендії.`) :
      console.log(`${this.fullName}, не отримує стипендії.`)
  }
}

const budgetStudent = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', '2', 'Остап Родоманський');

console.log('Basic:');
console.log(student.getInfo);
student.arrMarks = [5, 4, 4, 5];
console.log(student.getMarks);
student.setMarks = 5;
console.log(student.getMarks);
console.log(student.getAverageMark);
student.dismiss();
console.log(student.getMarks);
student.recover();
student.setMarks = 5;
console.log(student.getMarks);

console.log('Advanced:');
console.log(budgetStudent.getInfo);
budgetStudent.arrMarks = [4, 4, 4, 5];
console.log(budgetStudent.getMarks);
budgetStudent.setMarks = 3;
console.log(budgetStudent.getMarks);
console.log(budgetStudent.getAverageMark);
