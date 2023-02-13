// Задание 1
let a = 10;
alert (a);
a = 20;
alert (a);


// Задание 2
let yearOfIphone;
yearOfIphone = 2007;
alert (`Первый Айфон был выпущен в ${yearOfIphone} году`);


// Задание 3
let name = "Брендан Эйх";
alert (`Язык JavaScript был создан программистом по имени ${name}`);


// Задание 4
let firstNum;
let secondNum;
firstNum = 10;
secondNum = 2;
alert (`Сложение: ${firstNum + secondNum}. Разность: ${firstNum - secondNum}. Произведение: ${firstNum * secondNum}. Частное: ${firstNum / secondNum}.`);


// Задание 5
let b;
b = 2;
b = b ** 5;
alert (b);


// Задание 6
let aNum;
let bNum;
let result;
aNum = 9;
bNum = 2;
result = aNum % bNum;
alert (result);


// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);


//Задание 8
let age;
age = prompt("Сколько Вам лет?");
alert (age);


// Задание 9.0
let user = {
    name: "Владислав",
    age: 22,
    isAdmin: true
};
// Задание 9.1
user['city of residence'] = "Казань";
// Задание 9.2
user['age'] = 30;
// Задание 9.3
delete user['city of residence'];
// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (user[info]);


// Задание 10
let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);