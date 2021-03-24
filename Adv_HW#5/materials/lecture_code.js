
// .sort();
var myArray = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
myArray.sort(function (a, b) {
  return a-b;
});
console.log(myArray);



// import { isNill, areEquel, getIndexFromLength } from "./utils";

// Метод join() объединяет все элементы массива
// (или массивоподобного объекта) в строку.
const join = (target, separator = ",") => {
  // separator Необязательный
  // Определяет строку, разделяющую элементы массива.
  // В случае необходимости тип разделителя приводится к типу Строка.
  // Если он не задан, элементы массива разделяются запятой ','.
  // Если разделитель - пустая строка,
  // элементы массива ничем не разделяются в возвращаемой строке.

  let result = "";

  for (let index = 0; index < target.length; index++) {
    // Элемент массива с типом undefined
    // или null преобразуется в пустую строку.
    const element = isNill(target[index]) ? "" : target[index];

    result += index !== target.length - 1 ? element + separator : element;
  }

  // Если arr.length === 0,  то будет возвращена пустая строка.
  return result;
};

// Метод push() добавляет один или более элементов в конец массива
// и возвращает новую длину массива.
const push = (target, element) => {
  target[target.length] = element;

  return target.length;
};

// Метод pop() удаляет последний элемент из массива
// и возвращает его значение.
const pop = (target) => {
  if (target.length) {
    const lastElement = target[target.length - 1];

    target.length = target.length - 1;

    return lastElement;
  }
};

// Метод shift() удаляет первый элемент из массива
//и возвращает его значение. Этот метод изменяет длину массива.
// [1, 2, 3, 4]
const shift = (target) => {
  if (target.length) {
    const firstElement = target[0];
    const to = target.length - 1;

    let previous = target[to];

    for (let index = to; index > 0; index--) {
      const temp = target[index - 1];

      target[index - 1] = previous;
      previous = temp;
    }

    target.length = target.length - 1;

    return firstElement;
  }
};

// Метод unshift() добавляет один или более элементов в начало массива
// и возвращает новую длину массива.
const unshift = (target, element) => {
  const to = target.length + 1;
  let next = element;

  for (let index = 0; index < to; index++) {
    const temp = target[index];

    target[index] = next;
    next = temp;
  }

  return target.length;
};

// Метод indexOf() возвращает первый индекс,
// по которому данный элемент может быть найден в массиве или -1,
// если такого индекса нет.
const indexOf = (target, search) => {
  for (let index = 0; index < target.length; index++) {
    if (target[index] === search) return index;
  }

  return -1;
};

// Метод includes() определяет, содержит ли массив определённый элемент,
// возвращая в зависимости от этого true или false.
const includes = (target, search = NaN, fromIndex = 0) => {
  const from = getIndexFromLength(fromIndex, target.length);

  for (let index = from; index < target.length; index++) {
    if (areEquel(target[index], search)) return true;
  }

  return false;
};

// Метод concat() возвращает новый массив, состоящий из массива,
// на котором он был вызван, соединённого с другими массивами
// и/или значениями, переданными в качестве аргументов.
const concat = (target, ...insert) => {
  const concatenated = [];

  const iterate = (target, accumulator, recursive = true) => {
    for (let index = 0; index < target.length; index++) {
      const element = target[index];

      if (Array.isArray(element) && recursive) {
        iterate(element, accumulator, false);
      } else {
        accumulator.push(element);
      }
    }
  };

  iterate(target, concatenated);
  iterate(insert, concatenated);

  return concatenated;
};

// Метод slice() возвращает новый массив,
// содержащий копию части исходного массива.
const slice = (target, begin = 0, end = target.length) => {
  const from = getIndexFromLength(begin, target.length);
  const to = getIndexFromLength(end, target.length);

  const section = [];

  for (let index = from; index < to; index++) {
    section.push(target[index]);
  }

  return section;
};

// Метод splice() изменяет содержимое массива,
// удаляя существующие элементы и/или добавляя новые.
const splice = (target, start, deleteCount = 0, ...insert) => {
  // start
  // Индекс, по которому начинает изменять массив.
  // Если больше длины массива, реальный индекс будет установлен на длину массива.
  // Если отрицателен, указывает индекс элемента с конца.
  // deleteCount
  // Целое число, показывающее количество старых удаляемых из массива элементов.
  // Если deleteCount равен 0, элементы не удаляются.
  // В этом случае вы должны указать как минимум один новый элемент.
  // Если deleteCount больше количества элементов, оставшихся в массиве,
  // начиная с индекса start, то будут удалены все элементы до конца массива.
  // ...insert
  // Необязательные параметры. Добавляемые к массиву элементы.
  // Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.
  const removed = [];
  const postponed = [];
  const dropped = [];

  const from = getIndexFromLength(start, target.length);

  if (deleteCount > target.length - from) {
    deleteCount = target.length - from;
  }

  const to =
    insert.length > deleteCount
      ? target.length + (insert.length - deleteCount)
      : target.length;

  for (let index = from; index < to; index++) {
    const element = target[index];
    const iteration = index - from;

    if (iteration < insert.length) {
      if (iteration < deleteCount) {
        push(removed, element);
      } else {
        push(postponed, element);
      }

      target[index] = insert[iteration];
      continue;
    }

    if (iteration < deleteCount) {
      push(removed, element);
      push(dropped, element);
      continue;
    }

    if (postponed.length > 0) {
      push(postponed, element);
      target[index] = shift(postponed);
    }

    if (dropped.length > 0) {
      target[index - dropped.length] = element;
    }
  }

  if (dropped.length > 0) {
    target.length = target.length - dropped.length;
  }

  return removed;
};

// Метод reverse() на месте обращает порядок следования элементов массива.
// Первый элемент массива становится последним, а последний — первым
const reverse = (target) => { };

const sort = (target, callback) => { };

// Метод reduce() применяет функцию callback
// к каждому элементу массива (слева-направо),
// возвращая одно результирующее значение.
const reduce = (target, callback, defaultValue) => {
  const hasDefault = defaultValue !== undefined;

  if (!hasDefault && target.length < 1) {
    throw new Error("Target could't be empty without initial value");
  }

  let accumulator = hasDefault ? defaultValue : target[0];

  const from = hasDefault ? 0 : 1;

  for (let index = from; index < target.length; index++) {
    accumulator = callback(accumulator, target[index], index, target);
  }

  return accumulator;
};

// Метод reduceRight() применяет функцию callback
// к  каждому значению массива (справа-налево),
// возвращая одно результирующее значение.
const reduceRight = (target, callback, defaultValue) => {
  const hasDefault = defaultValue !== undefined;

  if (!hasDefault && target.length < 1) {
    throw new Error("Target could't be empty without initial value");
  }

  let accumulator = hasDefault ? defaultValue : target[target.length - 1];

  const from = hasDefault ? target.length - 1 : target.length - 2;

  for (let index = from; index >= 0; index--) {
    accumulator = callback(accumulator, target[index], index, target);
  }

  return accumulator;
};

// Метод map() создаёт новый массив с результатом вызова указанной функции
// для каждого элемента массива.
const map = (target, callback) => {
  const replica = concat(target, []);

  for (let index = 0; index < replica.length; index++) {
    replica[index] = callback(target[index], index, target);
  }

  return replica;
};

// Метод filter() создаёт новый массив со всеми элементами,
// прошедшими проверку, задаваемую в передаваемой функции.
const filter = (target, callback) => {
  const filtered = [];

  for (let index = 0; index < target.length; index++) {
    const match = callback(target[index], index, target);

    if (match) {
      filtered.push(target[index]);
    }
  }

  return filtered;
};

// Метод forEach() выполняет указанную функцию один раз
// для каждого элемента в массиве.
const forEach = (target, callback) => {
  for (let index = 0; index < target.length; index++) {
    callback(target[index], index, target);
  }
};

// Метод every() проверяет, удовлетворяют ли все элементы массива
// условию, заданному в передаваемой функции.
const every = (target, callback) => {
  for (let index = 0; index < target.length; index++) {
    const isTruthy = callback(target[index], index, target);

    if (!isTruthy) return false;
  }

  return true;
};

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива
// условию, заданному в передаваемой функции.
const some = (target, callback) => {
  for (let index = 0; index < target.length; index++) {
    const isTruthy = callback(target[index], index, target);

    if (isTruthy) return true;
  }

  return false;
};

// Метод find() возвращает значение первого найденного в массиве элемента,
// которое удовлетворяет условию переданному в callback функции.
//  В противном случае возвращается undefined.
const find = (target, callback) => {
  for (let index = 0; index < target.length; index++) {
    const match = callback(target[index], index, target);

    if (match) return match;
  }
};

// Метод findIndex() возвращает индекс в массиве,
// если элемент удовлетворяет условию проверяющей функции.
// В противном случае возвращается -1.
const findIndex = (target, callback) => {
  for (let index = 0; index < target.length; index++) {
    const match = callback(target[index], index, target);

    if (match) {
      return index;
    }

    return -1;
  }
};
