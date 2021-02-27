// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let boy = {
//     name: 'Dima',
//     age: 33,
//     haswife: true,
// };
// let girl = {
//     name: 'Olga',
//     age: 31,
//     hasson: true,
// };
// let man = {
//     name: 'Ivan',
//     age: 21,
//     haswife: true,
// };
// let lady = {
//     name: 'Natasha',
//     age: 34,
//     hascar: true,
// };
// let father = {
//     name: 'Leonid',
//     age: 54,
//     haswife: true,
// };


// //- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let user1 = {name: 'Maks', skills: ['komp', 'films'], work: {name: 'cook', place: 'cafee'}};
// let wifee = {log: 'Nadia', haveold: 33, status: ['maried', 'motheh'], have: {cat: 'pups', dog: 'Raff'}};
// let sun = {nik: 'Nestor', years: 4, toys: ['car', 'motobike', 'playstation'], param: {ves: 16, height: 78}};
// let dog = {poroda: 'Staf', legs: 4, isbig: false, game: ['Go Boy', 'Teke me'], girlfrend: {name: 'Anny', year: 3}};
// let cat = {kluchka: ['Massya', 'Miss'], badcat: true, hashome: true, boy: {nik: 'Kerry', color: 'Blask'}};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let boyKey in boy) {
//     console.log(boyKey);
// }
// for (let girlKey in girl) {
//     console.log(girlKey);
// }
// for (let manKey in man) {
//     console.log(manKey);
// }
// for (let ladyKey in lady) {
//     console.log(ladyKey);
// }
// for (let fatherKey in father) {
//     console.log(fatherKey);
// }
// for (let user1Key in user1) {
//     console.log(user1Key);
// }
// for (let wifeeKey in wifee) {
//     console.log(wifeeKey);
// }
// for (let sunKey in sun) {
//     console.log(sunKey);
// }
// for (let dogKey in dog) {
//     console.log(dogKey);
// }
// for (let catKey in cat) {
//     console.log(catKey);
//}

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let object = [boy, girl, man, lady, father, user1, wifee, sun, dog, cat];
// for (let objectKey in object) {
//     console.log(Object.keys(object[objectKey]));
//  }

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     {model: 'audi', year: 2012, power: 237, color: 'red'},
//     {model: 'BMW', year: 2011, power: 321, color: 'blue'},
//     {model: 'citroen', year: 2006, power: 231, color: 'green'},
//     {model: 'renaylt', year: 2019, power: 322, color: 'yellow'},
//     {model: 'opel', year: 2006, power: 211, color: 'white'},
//     {model: 'mazda', year: 2016, power: 212, color: 'purple'},
//     {model: 'lexus', year: 2020, power: 387, color: 'red'},
//     {model: 'lanus', year: 2010, power: 232, color: 'braun'},
//     {model: 'volga', year: 1990, power: 222, color: 'black'},
//     {model: 'cruisler', year: 1999, power: 111, color: 'gold'},
//     {model: 'жигули', year: 1960, power: 87, color: 'white'},
// ];

// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name: 'Lviv', population: 9004344, country: 'Ukraine', region: 'west'},
//     {name: 'Kyiv', population: 15404344, country: 'Ukraine', region: 'center'},
//     {name: 'Ternopil', population: 6704344, country: 'Ukraine', region: 'west'},
//     {name: 'Rivne', population: 8904344, country: 'Ukraine', region: 'west'},
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let mycars = [
//     {model: 'audi', year: 2012, power: 237, color: 'red', driver: {name: 'Vova', haveold: 34, gender: 'man', oput: 4 }},
//     {model: 'BMW', year: 2011, power: 321, color: 'blue', driver: {name: 'Kolya', haveold: 23, gender: 'man', oput: 7 }},
//     {model: 'citroen', year: 2006, power: 231, color: 'green', driver: {name: 'Nika', haveold: 19, gender: 'woman', oput: 1 }},
//     {model: 'renaylt', year: 2019, power: 322, color: 'yellow', driver: {name: 'Vanya', haveold: 45, gender: 'man', oput: 12 }},
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let carsit = 0;
// while (carsit < cars.length) {
//     console.log(cars[carsit]);
//     carsit++
// }
// let citiesit = 0;
// while (citiesit < cities.length) {
//     console.log(cities[citiesit]);
//     citiesit++
// }
// let mycarsit = 0;
// while (mycarsit < mycars.length) {
//     console.log(mycars[mycarsit]);
//     mycarsit++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < mycars.length; i++) {
//     console.log(mycars[i]);;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let car of cars) {
//     console.log(car);
// }
// for (let city of cities) {
//     console.log(city);
// }
// for (let mycar of mycars) {
//     console.log(mycar);
// }

// // - взять объекты из задания 1 и превратить каждый в json.
// let boyjson = JSON.stringify(boy);
// console.log(boyjson);
// let girljson = JSON.stringify(girl);
// console.log(girljson);
// let manjson = JSON.stringify(man);
// console.log(manjson);
// let ladyjson = JSON.stringify(lady);
// console.log(ladyjson);
// let fatherjson = JSON.stringify(father);
// console.log(fatherjson);

// // - взять json из задания 11 и превратить их обратно в объекты.
// boyjson = JSON.parse(boyjson);
// console.log(boyjson);
// girljson = JSON.parse(girljson);
// console.log(girljson);
// manjson = JSON.parse(manjson);
// console.log(manjson);
// ladyjson = JSON.parse(ladyjson);
// console.log(ladyjson);
// fatherjson = JSON.parse(fatherjson);
// console.log(fatherjson);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let carsKey in cars) {
//     console.log(JSON.stringify(cars[carsKey]));;
// }
// взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let citiesKey in cities) {
//     console.log(JSON.stringify(cities[citiesKey]));;
// }

// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let mycarsnew1 = [];
// for (let mycarsKey in mycars) {
//     console.log(mycars[mycarsKey]);
//     console.log(JSON.stringify(mycars[mycarsKey]));
//     mycarsnew1.push(JSON.stringify(mycars[mycarsKey]))
// }
// console.log(mycarsnew1);

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {
//         name: 'Maks',
//         skills: ['komp', 'films'],
//         work: {name: 'cook', place: 'cafee'}
//     }, {
//         name: 'Nadia',
//         haveold: 33,
//         skills: ['maried', 'motheh'],
//         have: {cat: 'pups', dog: 'Raff'}
//     }, {
//         name: 'Nestor',
//         years: 4,
//         skills: ['car', 'motobike', 'playstation'],
//         param: {ves: 16, height: 78}
//     }, {
//         name: 'Staf',
//         legs: 4,
//         isbig: false,
//         skills: ['Go Boy', 'Take me'],
//         girlfrend: {name: 'Anny', year: 3}
//     }, {
//         name: 'kitty',
//         skills: ['Massya', 'Miss'],
//         badcat: true,
//         hashome: true,
//         boy: {nik: 'Kerry', color: 'Black'}
//     },
// ];
// for (let user of users) {
//     for (let userskill of user.skills) {
//         console.log(user.name + ' have skils ' + userskill);
//     }
// }

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let skiluser = [];
// for (let user of users) {
//     for (let userskill of user.skills) {
//         skiluser.push(userskill);
//     }
// }
// console.log(skiluser);

// // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let user of users) {
//     for (let userElement of user.skills) {
//         console.log(userElement);
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let adress = [];
// for (let user of users) {
//    adress.push(user.address);
// }
// console.log(adress);

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement. Всі данні в одному блоці.
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let divuser = document.createElement("div");
//     let addr = '';
//     for (let userKey in user.address) {
//          addr = `${addr} ${user.address[userKey]}`;
//     }
//     divuser.innerText = `${user.name} ${user.age} ${user.status} ${addr} `
//     console.log(divuser);
//     document.body.appendChild(divuser);
// }

// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let divuser = document.createElement("div");
//     let div1 = document.createElement('div');
//     let div2 = document.createElement('div');
//     let div3 = document.createElement('div');
//     let div4 = document.createElement('div');
//     let addr = '';
//     for (let userKey in user.address) {
//          addr = `${addr} ${user.address[userKey]}`;
//     }
// div1.innerText = user.name;
// div2.innerText = user.age;
// div3.innerText = user.status;
// div4.innerText = addr;
// divuser.appendChild(div1);
// divuser.appendChild(div2);
// divuser.appendChild(div3);
// divuser.appendChild(div4);
//
//     console.log(divuser);
//     document.body.appendChild(divuser);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let divuser = document.createElement("div");
//     let div1 = document.createElement('div');
//     let div2 = document.createElement('div');
//     let div3 = document.createElement('div');
//     let div4 = document.createElement('div');
//     let ul = document.createElement('ul');
//     for (let userKey in user.address) {
//         let li = document.createElement('li');
//          li.innerText =  user.address[userKey];
//          ul.appendChild(li)
//     }
// div1.innerText = user.name;
// div2.innerText = user.age;
// div3.innerText = user.status;
// div4.appendChild(ul)
// divuser.appendChild(div1);
// divuser.appendChild(div2);
// divuser.appendChild(div3);
// divuser.appendChild(div4);
//
//     console.log(divuser);
//     document.body.appendChild(divuser);
// }


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false,
//     address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     let idElement = usersWithId[i];
//     let id = usersWithId[i].id;
//     for (let j = 0; j < citiesWithId.length; j++) {
//         let useradr = citiesWithId[j];
//         let userid = citiesWithId[j].user_id;
//         if (id === userid) {
//             idElement.address =  useradr;
//             usersWithCities.push(idElement)
//         }
//     }
// }
// console.log(usersWithCities);

// - створити розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу
// let byId = document.getElementById('myid');
// let idtext = byId.innerText;
// console.log(idtext);
// let className = document.getElementsByClassName('mydiv');
// for (let classNameElement of className) {
//    let classText = classNameElement.innerText;
//     console.log(classText);
// }
// let className = document.getElementsByTagName('div');
// for (let classNameElement of className) {
//    let classText = classNameElement.innerText;
//     console.log(classText);
// }

// - змінити цей текст використовуючи селектори id, class,  tag
// let byId = document.getElementById('myid');
// let idtext = byId.innerText;
// byId.innerText = 'zamina';
// let className = document.getElementsByClassName('mydiv');
// for (let classNameElement of className) {
//     classNameElement.innerText = 'zamina';
// }
// let className = document.getElementsByTagName('div');
// for (let classNameElement of className) {
//    classNameElement.innerText = 'zamina';
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let byId = document.getElementById('myid');
// byId.style.height = '200px';
// byId.style.width = '200px';
// let className = document.getElementsByClassName('mydiv');
// for (let classNameElement of className) {
// classNameElement.style.height = '200px';
// classNameElement.style.width = '200px';
// classNameElement.style.backgroundColor = 'red';
// }
// let className = document.getElementsByTagName('div');
// for (let classNameElement of className) {
//    classNameElement.style.height = '200px';
//    classNameElement.style.width = '200px';
//    classNameElement.style.backgroundColor = 'blue';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// let tr = document.createElement('tr') ;
// let td = document.createElement('td') ;
// let td2 = document.createElement('td') ;
// let td3 = document.createElement('td') ;
// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);
// document.body.appendChild(table);

// - за допомоги document.createElement,
// appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr') ;
//     for (let j = 0; j < 3; j++) {
//         let td = document.createElement('td') ;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr') ;
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td') ;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let m = +prompt('рядки');
// let n = +prompt('ячейки');
//
// let table = document.createElement('table');
// for (let i = 0; i < m; i++) {
//     let tr = document.createElement('tr') ;
//     for (let j = 0; j < n; j++) {
//         let td = document.createElement('td') ;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);



// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// let allteg = document.getElementsByTagName('*');
//  // console.log(allteg);
// for (let Element of allteg) {
//     if (Element.className) {
//         console.log(Element);
//     }
// }

// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let tagp = document.getElementsByTagName('p');
// for (let tagpElement of tagp) {
//     tagpElement.innerText = 'hello oktenweb!'
// }

// // - знайти всі div та змінити ім колір на червоний
// let div = document.getElementsByTagName('div')
// for (let divElement of div) {
//     divElement.style.backgroundColor = 'red';
// }


// ============
// ====class===
//     ============

// let allh2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let myul = document.createElement('ul');
// for (const allh2Element of allh2) {
//     let myli = document.createElement('li');
//     myli.innerText = allh2Element.innerText
//     myul.appendChild(myli)
// }
// content.appendChild(myul)
//

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// let wrap = document.getElementsByClassName('wrap')[0];
// console.log(wrap);
// for (let i = 0; i < rules.length; i++) {
//     let rule = rules[i];
//     let mydiv = document.createElement('div');
//     let myh2 = document.createElement('h2');
//     let myp = document.createElement('p');
//     myh2.innerText = rule.title;
//     myp.innerText = rule.body;
//     mydiv.appendChild(myh2);
//     mydiv.appendChild(myp);
//     wrap.appendChild(mydiv);
// }































