// Задача 1
let result = 0;
const array = [3, 4, 1, 9];

const getResult = (array, callback) => {
    if (array.length !== 0) {
        callback();
        console.log(result);
    } else {
        console.log(0);
    }
}

const sum = () => {
    result = array.reduce((a,b)=>a+b);
}

const mult = () => {
    result = array.reduce((a,b)=>a*b);
}

getResult(array, mult);


// Задача 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

const compareUser =(a,b) => {
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
    return 0; 
}

const getSortedByAge = (array, compareFunction) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            const condition = compareFunction ? compareFunction(array[i], array[j]) > 0 : array[i].toString() > array[j].toString;
            if(condition) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array);
}

getSortedByAge(users, compareUser);


// Задача 3
let = result;
let arr = [1, '4', false, 9, 'two'];

const each = (arr, callbackTwo) => {
    if (arr.length !== 0) {
        callbackTwo();
        console.log(arr);
    } else {
        console.log(0);
    }
}

const reverseArr = () => {
    arr = arr.reverse();
}

const toNumberArr = () => {
    for(let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            arr.splice(i,1);
        } else {
            arr[i] = Number(arr[i]);
        }
    }
}

each(arr, toNumberArr);


// Задача 4

let dateTimer = setInterval(() => {
    let currentDateTaskFour = new Date();
	console.log(currentDateTaskFour);
}, 3000);

setTimeout(() => { 
    clearInterval(dateTimer);
    console.log("30 секунд прошло");
}, 30000)


// Задача 5
function calling() {
    console.log('Звоню!')
};

function beeps(callbackThree) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callbackThree();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
