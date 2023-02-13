// Задача 1
let taskOne = "js";

taskOne = taskOne.toUpperCase();
console.log(taskOne);


// Задача 2
const taskTwo = ["Асфальт", "Восемь", "Альт", "Начало", "Конец"];
const search = "а";

function searchStast() {

    for ( let item of taskTwo) {
        if (item.toLowerCase().startsWith(search.toLowerCase())) {
            console.log(item)
        }
    }

}

searchStast();


// Задача 3
let taskThree = 32.58884;

console.log(`До меньшего - ${Math.floor(taskThree)}, до большего - ${Math.ceil(taskThree)}, до ближайшего целого ${Math.round(taskThree)}`);


// Задача 4
console.log(`Наименьшее - ${Math.min(52, 53, 49, 77, 21, 32)}, Наибольшее - ${Math.max(52, 53, 49, 77, 21, 32)}`);


// Задача 5
let random = () => {
    console.log(Math.round(Math.random() * 10));
}


// Задача 6
let taskSix = [];
let tot = 0;

let getRandomArrNum = (max) => {
    tot = Math.floor(max / 2);

    for(let i = 0; i < tot; i++) {
        taskSix.push(Math.floor(Math.random() * max));
    }
    console.log(taskSix);
} 

getRandomArrNum(17);


// Задача 7
const randomNum = (min, max) => {
    const taskSeven = Math.round(Math.random() * (max - min) + min);
    console.log(taskSeven);
}

randomNum(20, 30);


// Задача 8
let currentDate = new Date(); 

console.log(currentDate);


// Задача 9
let currentDateTaskNine = new Date();

currentDateTaskNine.setDate(currentDateTaskNine.getDate() + 73);

console.log(currentDateTaskNine);


// Задача 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const dayOfDate = (y, m, d, h, min, s) => {
    m = m - 1;
    let dateTaskTen = new Date(y, m, d, h, min, s);

    let fullDate = "Дата:" + dateTaskTen.getDate() + " " + months[dateTaskTen.getMonth()] + " " + dateTaskTen.getFullYear() + " - это " + days[dateTaskTen.getDay()];

    let fullTime = "Время:" + dateTaskTen.getHours() + ":" + dateTaskTen.getMinutes() + ":" + dateTaskTen.getSeconds();

    console.log(fullDate);
    console.log(fullTime);
}

dayOfDate(2027, 7, 9, 12, 30, 40);