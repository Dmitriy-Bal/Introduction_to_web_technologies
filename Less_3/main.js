/*
Формат сдачи ДЗ - один архив, со всеми файлами, либо pull request на github.

Необходимо создать html-страницу с названием index.html, в которой подключить файл main.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:

Cоздать функцию greeting, которая принимает в качестве параметра имя человека и выводит приветствие, используя переданное ей имя, в консоль.

Необходимо продемонстрировать работу функции: у пользователя запросить его имя и вызвать функцию greeting, передав туда полученное от пользователя значение.
*/


function Greetings() {
    let name = prompt('Введите Ваше имя:').toLowerCase();

    let capFirstLetter = name[0].toUpperCase();
    console.log(capFirstLetter);

    let restOfGreeting = name.slice(1);
    console.log(restOfGreeting);

    let newGreeting = capFirstLetter + restOfGreeting;
    console.log(newGreeting);

    msg = `Привет, ${newGreeting}!!!`
    alert(msg)
};

Greetings();
console.log(msg);