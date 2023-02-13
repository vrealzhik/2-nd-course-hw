// Задача 7 Времена года
const game = () => {
    let monthNumber = Number(prompt("Введите число месяца"));

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:    
            alert("Зима");
            break;
        case 3:
        case 4:
        case 5:
            alert("Весна");
            break;    
        case 6:
        case 7:
        case 8:
            alert("Лето");
            break;
        case 9:
        case 10:
        case 11:
            alert("Осень");
            break;
        default:
            alert("Тaкого месяца нет");
            break;
    }
}


// Задача 11 Слова
const words = () => {
    let taskEleven = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    taskEleven = taskEleven.sort(() => Math.random() - 0.5);

    alert(taskEleven.join(" "));

    let firstWord = prompt("Какое было первое слово?");
    let secondWord = prompt("Какое было последнее слово?");

    if (taskEleven[0].toLowerCase() === firstWord.toLowerCase() && taskEleven[taskEleven.length-1].toLowerCase() === secondWord.toLowerCase()) {
        alert("Поздравляю, вы угадали оба слова!");
    } else if(taskEleven[0].toLowerCase() === firstWord.toLowerCase() || taskEleven[taskEleven.length-1].toLowerCase() === secondWord.toLowerCase()) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы ответили не верно");
    }
}