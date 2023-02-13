// Задача 1
const taskFirst = (a, b) => {
    if (a <= b) {
        alert(a);
    } else {
        alert(b);
    }
}
taskFirst(4, 8);
taskFirst(6, 6);
// Задача 2
// Насколько я знаю, 0 - четное число, поэтому для него отдельных условий вводить не стал :)
const taskSecond = (a) => {
    let result = a % 2;
    result === 0 ? alert('Число четное'): alert('Число нечетное');
}
taskSecond(10);
// Задача 3.1
let userNumOne = Number(prompt("Введите число"));
const taskThirdOne = (userNumOne) => {
    alert(userNumOne ** 2);
}
taskThirdOne(userNumOne);
// Задача 3.2
let userNumTwo = Number(prompt("Введите число"));
const taskThirdTwo = (userNumTwo) => {
    return(userNumTwo ** 2);
}
alert(taskThirdTwo(userNumTwo));
// Задача 4
let age = Number(prompt("Сколько Вам лет?"));
const taskFourth = (age) => {
    if (age < 0) {
        alert("Вы ввели неправильное значение");
    }  else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    }  else {
        alert("Добро пожаловать!");
    }
}
taskFourth(age);
// Задача 5
let firstNum = prompt("Введите первое число");
let secondNum = prompt("Введите второе число");
const taskFifth = (firstNum, secondNum) => {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert("Одно или оба значения не являются числом");
    } else {
        alert(firstNum * secondNum);
    }
}
taskFifth(firstNum, secondNum);
// Задача 6
let yourNum = prompt("Введите Ваше число");
const taskSixth = (yourNum) => {
    yourNum = Number(yourNum);
    if (isNaN(yourNum)) {
        alert("Значение не является числом");
    } else {
        let result = yourNum ** 3;
        alert(`${yourNum} кубе равняется ${result}`);
    }
}
taskSixth(yourNum);


// Задача 7
const game = () => {
    let monthNumber = Number(prompt("Введите число месяца"));

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:    
            alert("Зима")
            break;
        case 3:
        case 4:
        case 5:
            alert("Весна")
            break;    
        case 6:
        case 7:
        case 8:
            alert("Лето")
            break;
        case 9:
        case 10:
        case 11:
            alert("Осень")
            break;
        default:
            alert("Тaкого месяца нет")
            break;
    }
}

game();