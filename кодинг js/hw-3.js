// Задание 1
let password = "пароль";

let enterPass = prompt ("Введите пароль");

result = (password == enterPass) ? "Пароль введен верно" : "Пароль введен неправильно";
alert(result);


// Задание 2
let c = Number(prompt("Введите число"));

result = (c > 0 && c < 10) ? "Верно" : "Неверно";
alert(result);


// Задание 3
let firstNum = Number(prompt("Введите первое число"));
let secondNum = Number(prompt("Введите второе число"));

result = (firstNum > 100 || secondNum > 100) ? "Верно" : "Неверно";
alert(result);

// Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);


// Задание 5
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


// Задание 7
let number = prompt("Пожалуйста, введите любое число");

if (isNaN(number)) {
    alert("Вы ввели не число");
} else {
    number = Number(number);
    switch (number % 2) {
        case 0:
            alert("Вы ввели Четное число")
            break;
    
        default:
            alert("Вы ввели Нечетное число")
            break;
    }
}


// Задание 8 и 9
let clientOS = {
    IOS: 1,
    Android: 0
};
let info = prompt("Уточните, какой у вас телефон?(IOS/Android)");
info = (clientOS[info]);
let clientDeviceYear = Number(prompt("Укажите год выпуска вашего телефона"));
if (info == 0 && clientDeviceYear >= 2015) {
    alert("Установите версию приложения для Android по ссылке");
} else if ( info == 1 && clientDeviceYear >= 2015){
    alert("Установите версию приложения для iOS по ссылке");
    
} else if (info == 0 && clientDeviceYear < 2015) {
    alert("Установите облегченную версию приложения для Android по ссылке");

} else {
    alert("Установите облегченную версию приложения для iOS по ссылке");
}