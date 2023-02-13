//Задача 1
const taskOne = [1, 5, 4, 10, 0, 3]; 

for (let i = 0; i < taskOne.length; i++) {
  console.log(taskOne[i]);
  if (taskOne[i] === 10) break;
}


//Задача 2
const taskTwo = [1, 5, 4, 10, 0, 3]; 

console.log(taskTwo.indexOf(4));


//Задача 3
let taskThree = [1, 3, 5, 10, 20];

console.log(taskThree.join(" "));


//Задача 4
const taskFour = [];
const taskFourOneMore = [];

for (let i = 1; i <= 10; i++){
    randomNum = Math.floor(Math.random() * 11);  
    taskFour.push(randomNum);
    if (randomNum % 2 === 0) {
      taskFourOneMore.push(randomNum);
    }
}

console.log(taskFour);
console.log(taskFourOneMore);

//Задача 4 --- Второй вариант решения. Не знаю, какой из них по заданию будет лучше
const fourTask = [];
const fourTaskOneMore = [];

for (let n = 1; n <= 10; n++) {
  numRandom = Math.floor(Math.random() * 11);  
  fourTask.push(numRandom);
}

for (let item of fourTask) {
  if (item % 2 === 0) {
    fourTaskOneMore.push(item);
  }
}

console.log(fourTask);
console.log(fourTaskOneMore);


//Задача 5
const taskFive = [
    [],
    [],
    [],
  ];
  
for (let inTask of taskFive) {
    for (let a = 0; a < 3; a++) {
      inTask.push(1);
    }
}
  
console.log(taskFive);


//Задача 6
const taskSix = [1, 1, 1];

for(let b = 0; b < 3; b++)
  taskSix.push(2);

console.log(taskSix);

//Задача 6 --- Можно записать и так, но будет ли правильно?
const sixTask = [1, 1, 1];

sixTask.push(2, 2, 2);

console.log(sixTask);


//Задача 7
const taskSeven = [9, 8, 7, "a", 6, 5];

taskSeven.sort();
taskSeven.pop();

console.log(taskSeven);


//Задача 8
const taskEight = [9, 8, 7, 6, 5]

let userNum = Number(prompt("Введите число от 0 до 10"));

taskEight.includes(userNum) ? console.log(`В массиве есть число ${userNum}`) : console.log(`В массиве нет числа ${userNum}`);


//Задача 9
let taskNine = 'abcdef';

taskNine = taskNine.split('').reverse().join('');

console.log(taskNine);


//Задача 10
const taskTen = [];
let sum = 0;
let q = 0;

while(q < 6)  {
  sixRandom = Math.floor(Math.random() * 11);
  taskTen.push(sixRandom);
  sum = sum + sixRandom;
  q++;
}

sum = sum / q;

console.log(sum);
console.log(taskTen);

//Задача 10 --- Также второй вариант решения :
const tenTask = [];
let total = 0;
let w = 0;

while(w < 6)  {
  sixRandom = Math.floor(Math.random() * 11);
  tenTask.push(sixRandom);
  w++;
}

for (let elem of tenTask) {
    total = total + elem;
}

total = total / w;

console.log(total);
console.log(tenTask);


//Задача 11
const taskEleven = [
    [1, 2, 3],
    [4, 5, 6]
];
const taskElevenOneMore = [];
  
for (let taskIn of taskEleven) {
    for (let elem of taskIn) {
      taskElevenOneMore.push(elem);
    }
}
  
console.log(taskElevenOneMore);
//Задача 11 второе решение
const taskElevenTwo = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(taskElevenTwo.flat());


//Задача 12
const taskTwelve = [];
let sumElem = 0;

while(sumElem < 10) {
  randomNum = Math.floor(Math.random() * 11);
  taskTwelve.push(randomNum);
  sumElem++;
}

for (let i = 1; i < taskTwelve.length; i++) {
  result = taskTwelve[i] + taskTwelve[i - 1];
  console.log(result);
}

console.log(taskTwelve);