// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div')
// document.body.appendChild(div)
// div.classList.add('text')
// div.innerText = 'Hello'
// div.style.backgroundColor = 'red'
// div.onclick = ev => document.body.removeChild(div)

// - Создайте кнопку, при клике на которую,
// она будет скрывать сама себя.
// let button = document.createElement('button')
// document.body.appendChild(button)
// button.style.height = '50px'
// button.style.width = '100px'
// button.style.backgroundColor = 'green'
// button.onclick = ev => button.style.display = 'none'

// - створити інпут який приймає вік людини та кнопку
// яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// let input = document.createElement('input')
// input.innerText = 'age'
// document.body.appendChild(input)
//
// let button = document.createElement('button')
// document.body.appendChild(button)
// button.style.height = '20px'
// button.style.width = '50px'
// button.style.backgroundColor = 'green'
// button.onclick = ev => input.value < 18 ||  ? alert('by-by') : alert('welcome')

// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.getElementById('menu');
// const list = document.getElementById('list');
// let block = false;
// menu.onclick = ev => {
//     if (block){
//     list.style.display = 'block';
//     block = false;
//     } else {
//         list.style.display = 'none';
//         block = true;
//     }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// const comentars = [
//     {title: 'Coment1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Coment2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Coment3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Coment4', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Coment5', body: 'lorem ipsum dolo sit ameti'}]
//
// comentars.forEach(value => {
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');
//     const p = document.createElement('p');
//     const button = document.createElement('button');
//     button.innerText = 'Сховати';
//     h3.innerText = value.title;
//     p.innerText = value.body;
//     div.appendChild(h3);
//     div.appendChild(p);
//     div.appendChild(button);
//     document.body.appendChild(div);
//     let show = false;
//     button.onclick = ev => {
//         if (show) {
//             p.style.display = 'block';
//             show = false;
//         } else {
//             p.style.display = 'none';
//             show = true;
//         }
//     }
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const form1 = document.forms.myform1;
// const form2 = document.forms.myform2;
// const button = document.getElementById('go');
// button.onclick = event => {
// console.log(form1.user1.value);
// console.log(form1.pass1.value);
// console.log(form2.user2.value);
// console.log(form2.pass2.value);
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// function mytable(stroka, cell, element) {
//     const myelement = document.createElement(element);
//     const table = document.createElement("table")
//     for (let i = 0; i < stroka; i++) {
//         const tr = document.createElement('tr')
//         for (let j = 0; j < cell; j++) {
//             const td = document.createElement('td')
//             td.innerText = `ячейкa`;
//             tr.appendChild(td);
//         }
// table.appendChild(tr)
//     }
//     myelement.appendChild(table);
//     document.body.appendChild(myelement);
// }
//
// mytable(3, 5, 'div')

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const form1 = document.forms.myform1;
// const button = document.getElementById('go');
// button.onclick = event => {
//     mytable(form1.number1.value, form1.number2.value, form1.text3.value)
//
//
//     function mytable(stroka, cell, content) {
//         console.log(arguments);
//         const table = document.createElement("table")
//         for (let i = 0; i < stroka; i++) {
//             const tr = document.createElement('tr')
//             for (let j = 0; j < cell; j++) {
//                 const td = document.createElement('td')
//                 td.innerText = content;
//                 tr.appendChild(td);
//             }
//             table.appendChild(tr)
//         }
//         document.body.appendChild(table);
//     }
//
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// const pictures = [
//     { src: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-1-1-650x366.jpg' ,alt: '1'},
//     { src: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-2.jpg' ,alt: '2'},
//     { src: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-4-650x433.jpg' ,alt: '3'},
//     { src: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-7-650x476.jpg' ,alt: '4'},
//     { src: 'https://proprikol.ru/wp-content/uploads/2019/08/kartinki-nyashnye-kotiki-11-650x433.jpg' ,alt: '5'}
// ];
// const myimg = document.createElement('img');
// const back = document.createElement('button');
// const next = document.createElement('button');
// const br = document.createElement('br')
// next.innerText = '>>>';
// back.innerText = '<<<';
// myimg.src= pictures[0].src;
// document.body.appendChild(myimg);
// document.body.appendChild(br);
// document.body.appendChild(back);
// document.body.appendChild(next);
// let index = 0;
// next.onclick = ev => {
//     index++
//     if(index == pictures.length) index = 0;
//     myimg.src = pictures[index].src
// }
// back.onclick = ev => {
//     if(index == 0) index = pictures.length - 1;
//     index--
//     myimg.src = pictures[index].src
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let bad = ['    ', ',,,,', '....', 'bad'];
// const input = document.createElement('input');
// const button = document.createElement('button');
// input.setAttribute('name', 'text');
// input.setAttribute('id', '1');
// input.setAttribute('type', 'text')
// button.setAttribute('name', 'butn');
// button.setAttribute('id', '1');
// button.innerText = 'GO'
// document.body.appendChild(input);
// document.body.appendChild(button);
// button.onclick = ev => {
//     let usertext = input.value.toLowerCase()
//     console.log(usertext);
//     bad.forEach(value => {
//         if (value === usertext) alert('NO')
//         }
//     )
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let bad = ['    ', ',,,,', '....', 'bad'];
// const input = document.createElement('input');
// const button = document.createElement('button');
// input.setAttribute('name', 'text');
// input.setAttribute('id', '1');
// input.setAttribute('type', 'text')
// button.setAttribute('name', 'butn');
// button.setAttribute('id', '1');
// button.innerText = 'GO'
// document.body.appendChild(input);
// document.body.appendChild(button);
// button.onclick = ev => {
//     let usertext = input.value.toLowerCase()
//     console.log(usertext);
//     bad.forEach(value => {
//         let word = usertext.indexOf(value) !== -1;
//         if (word) alert('NO')
//         }
//     )
// }

// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//  const myH = document.getElementsByTagName('h2');
//  const mycontent = document.getElementById('content');
//  mycontent.style.width = '20%';
//  mycontent.style.float = 'left';
//  const mywrap = document.getElementById('wrap');
// mywrap.style.width = '80%';
// mywrap.style.float = 'left';
//  const ul = document.createElement('ul');
// for (let i = 0; i < myH.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
// let go = 'go' + i;
// a.href = '#' + go;
// myH[i].setAttribute('id', go);
// a.innerText= myH[i].innerText;
// li.appendChild(a);
// ul.appendChild(li);
// }
// mycontent.appendChild(ul);

// // -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// const divtext = document.createElement('div');
// const divclick = document.createElement('div');
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
// const button = document.createElement('button');
// const label1 = document.createElement('label');
// const label2 = document.createElement('label');
// const label3 = document.createElement('label');
// label1.innerText = 'статуc false';
// label2.innerText = 'старше 29';
// label3.innerText = 'Киев';
// button.innerText = 'FILTER';
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';
// divclick.appendChild(label1);
// divclick.appendChild(input1);
// divclick.appendChild(label2);
// divclick.appendChild(input2);
// divclick.appendChild(label3);
// divclick.appendChild(input3);
// divclick.appendChild(button);
//
// document.body.appendChild(divtext);
// document.body.appendChild(divclick);
//
// function vuvud(arr) {
//     const divuvod = document.createElement('div');
//     for (let i = 0; i < arr.length; i++) {
//         const div = document.createElement('div');
//         const h3 = document.createElement('h3');
//         const p = document.createElement('p');
//         h3.innerText = arr[i].name;
//         p.innerText = arr[i].name + ' ' + arr[i].age + ' ' + arr[i].status + ' ' + arr[i].address.city + ' ' + arr[i].address.street + ' ' + arr[i].address.number;
//         div.appendChild(h3);
//         div.appendChild(p);
//         divuvod.appendChild(div)
//     }
//     return divuvod
// }
// let go = vuvud(usersWithAddress);
// divtext.appendChild(go);
//
// button.onclick = ev => {
//     let copy = JSON.parse(JSON.stringify(usersWithAddress));
//
//     if (input1.checked) copy = copy.filter(value => !value.status);
//     if (input2.checked) copy = copy.filter(value => value.age >= 29);
//     if (input3.checked) copy = copy.filter(value => value.address.city === 'Kyiv');
//     divtext. innerText = ' '
//     divtext.appendChild(vuvud(copy));
//
// }

