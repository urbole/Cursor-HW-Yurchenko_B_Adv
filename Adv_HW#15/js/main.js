'use strick';

function* createIdGenerator() {
  let count = 1;

  while (true) {
    yield count++;
  }
}

const idGenerator = createIdGenerator();

console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);
console.log('🚀 ~ idGenerator.next().value ->', idGenerator.next().value);