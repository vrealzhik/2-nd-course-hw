// Задача 1
let i = 0;
while (i < 2) {
    alert("Привет!");
    i++
}


// Задача 2
let q = 1;
while ( q <= 5) {
    alert(q);
    q++;
}


// Задача 3
let z = 7;
while (z <= 22) {
    alert(z);
    z++;
}


// Задача 4
let obj = {
    "Коля" : 200,
    "Вася" : 300,
    'Петя' : 400
}

for (let mon in obj) {
    alert (`${mon} - зарплата ${obj[mon]} долларов.`);
}


// Задача 5
let n = 1000;
let num = 0;

do {
    n = n / 2;
    num++;
    if (n < 50) {
        alert(`Итоговое число - ${n}. Количество итераций = ${num}`);
    }
} while(n>=50)



// Задача 6
for(let day = 4, date = 1, m = 1; date <= 31; date++, m++) {
    if ( day === m) {
        alert(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
        day +=7;
    }
}