// - створити функцію яка виводить масив
// let arrnev = [12, false, 'hello', 34, true];
// function logarr (arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// logarr(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
//
// function createarr (arr) {
// let arrnev = [];
//     for (let i = 0; i < 20; i++) {
//      arrnev.push(parseInt(Math.random() * 99));
//     }
//     return arrnev;
// }
// createarr(arrnev);
// logarr(arrnev);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minn (a, b, c) {
//     let mins = Math.min(a, b, c);
//     return mins;
// }
// let mins = minn(9,44,4);
// console.log(mins);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max (a, b, c) {
//     let domax = Math.max(a, b, c);
//     return domax;
// }
// let maxx = max(9,44,4);
// console.log(maxx);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function sort () {
//     console.log(arguments);
//     let mymin =arguments[0];
//     let mymax =0;
//     for (let argument of arguments) {
//       if (argument < mymin) {mymin = argument};
//       if (argument > mymax) {mymax = argument};
//     }
//     console.log(mymax);
//     return mymin
// }
// let min = sort(9,44,4, 46, 2, 87);
// console.log(min);

// - створити функцію яка повертає найбільше число з масиву
// function maxarr (masuv) {
//     let mymax = masuv[0];
//     for (let argument of masuv) {
//       if (argument > mymax) {mymax = argument};
//     }
//     console.log(mymax);
//     return mymax
// }
// let arr = [34, 66, 62, 232, 443, 44, 34]
// let max = maxarr(arr);
// console.log(max);

// // - створити функцію яка повертає найменьше число з масиву
// function minarr (masuv) {
//     let mymin = masuv[0];
//     for (let argument of masuv) {
//         if (argument > mymin) {mymin = argument};
//     }
//     console.log(mymin);
//     return mymin
// }
// let arr = [34, 66, 62, 232, 443, 44, 34]
// let min = minarr(arr);
// console.log(min);

// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arr = [43, 33, 12, 63, 78, 24];
// let summa = function (suma) {
//     let itogo = 0;
//     for (let sumaElement of suma) {
//         itogo = itogo + sumaElement
//     }
//     return itogo
// }
// console.log(summa(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [43, 33, 12, 63, 78, 24];
// let seredne = (suma) => {
//     let itogo = 0;
//     for (let sumaElement of suma) {
//         itogo = itogo + sumaElement
//     }
//     let sered = itogo / suma.length
//     return sered
// }
// console.log(seredne(arr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let usersWithId = [12, false, {id: 1, name: 'vasya', age: 31, status: false}, 'Hello', 34, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// function objeck (arr) {
// let obj = 0;
//     for (let arrElement of arr) {
//         if (typeof(arrElement) === 'object') {
//             obj++;
//         }
//     }
//     return obj
// }
// let number = objeck(usersWithId);
// console.log(number);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let usersWithId = [12, false, {id: 1, name: 'vasya', age: 31, status: false}, 'Hello', 34, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// function objeck (arr) {
// let obj = 0;
//     for (let arrElement of arr) {
//         if (typeof(arrElement) === 'object'&& !Array.isArray(arrElement)) {
//             for (let arKey in arrElement) {
//                 obj++
//             }
//         }
//     }
//     return obj
// }
// let number = objeck(usersWithId);
// console.log(number);

// - створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function suma (arr1, arr2) {
//     let sums = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sums.push(arr1[i] + arr2[i]);
//     }
//         return sums
// }
// let suma1 = suma([1,2,3,4],[2,3,4,5]);
// console.log(suma1);

// - *** приймає масив та число "i",
// та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array = [43, 33, 12, 63, 78, 24];
// function zamina (arr, i) {
//     let myarr = JSON.parse(JSON.stringify(arr));
//     console.log(myarr);
//     let start = myarr[i];
//     myarr[i] = myarr[i + 1];
//     myarr[i+1] = start;
//     return myarr
// }
// let zamina1 = zamina(array, 4);
// console.log(zamina1);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
// let array = [12, 43, 31, 0, 6, 0, 3 ];
// function perenos(arr) {
//     let mynewarr = [];
//     let myarr = [];
//     let mynul = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             mynul.push(arr[i])
//         } else {
//             myarr.push(arr[i])
//         }
//     }
//     mynewarr = myarr + ',' + mynul
//     return mynewarr
// }
// let perenos1 = perenos(array);
// console.log(perenos1);

// - Додає в боді блок з текстом ""Hello owu
// function body(text) {
//     let div = document.createElement('div');
//     div.innerText = text;
//     document.body.appendChild(div)
// }
// body("Hello owu")

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function body(element, text) {
//         let elem = document.createElement('element');
//     elem.innerText = text;
//     document.body.appendChild(elem)
// }
// body('div',"Hello okten")

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент,
//     індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let mycars = [
//     {model: 'audi', year: 2012, power: 237, color: 'red', driver: {name: 'Vova', haveold: 34, gender: 'man', oput: 4 }},
//     {model: 'BMW', year: 2011, power: 321, color: 'blue', driver: {name: 'Kolya', haveold: 23, gender: 'man', oput: 7 }},
//     {model: 'citroen', year: 2006, power: 231, color: 'green', driver: {name: 'Nika', haveold: 19, gender: 'woman', oput: 1 }},
//     {model: 'renaylt', year: 2019, power: 322, color: 'yellow', driver: {name: 'Vanya', haveold: 45, gender: 'man', oput: 12 }},
// ];
// let array = [43, 33, 12, 63, 78, 24];
// function avtohtml(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//     let elem = document.createElement(element);
//         let car = arr[i];
//     let text = '';
//         for (let arrElement in car.driver) {
//             console.log(arrElement);
//             text = `${text} ${car.driver[arrElement]}`;
//         }
//         let blok = document.createElement('div');
//         blok.innerText = `${car.model} ${car.year} ${car.power} ${car.color}  ${text}`
//         elem.appendChild(blok)
// document.body.appendChild(elem)
// }
// }
// avtohtml(mycars, 'div' )

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент,
//     індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок
// let mycars = [
//     {model: 'audi', year: 2012, power: 237, color: 'red', driver: {name: 'Vova', haveold: 34, gender: 'man', oput: 4}},
//     {model: 'BMW', year: 2011, power: 321, color: 'blue', driver: {name: 'Kolya', haveold: 23, gender: 'man', oput: 7}},
//     {
//         model: 'citroen',
//         year: 2006,
//         power: 231,
//         color: 'green',
//         driver: {name: 'Nika', haveold: 19, gender: 'woman', oput: 1}
//     },
//     {
//         model: 'renaylt',
//         year: 2019,
//         power: 322,
//         color: 'yellow',
//         driver: {name: 'Vanya', haveold: 45, gender: 'man', oput: 12}
//     },
// ];
// function carsto(arr, elem) {
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         let blok = document.createElement(elem);
//         for (let arrKey in element) {
//             let blokparam = document.createElement(elem);
//             let opus = element[arrKey]
//             if (typeof opus === 'object') {
//                 let opysobject = document.createElement(elem);
//                 for (let objKey in opus) {
//                     let objparam = document.createElement(elem);
//                     objparam.innerText = opus[objKey];
//                     opysobject.appendChild(objparam);
//                 }
//                 blokparam.appendChild(opysobject)
//             } else {
//                 let startparam = document.createElement(elem);
//                 startparam.innerText = element[arrKey];
//                 blokparam.appendChild(startparam);
//             }
//             blok.appendChild(blokparam)
//         }
//         document.body.appendChild(blok)
//     }
// }
// carsto(mycars, 'div')


// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function siti(arruser, arrsity) {
//     let usersWithCities = [];
//     for (let i = 0; i < arruser.length; i++) {
//         let idElement = arruser[i];
//         let id = arruser[i].id;
//         for (let j = 0; j < arrsity.length; j++) {
//             let useradr = arrsity[j];
//             let userid = arrsity[j].user_id;
//             if (id === userid) {
//                 idElement.address =  useradr;
//                 usersWithCities.push(idElement)
//             }
//         }
//     }
// return usersWithCities
//
// }
// let siti1 = siti(usersWithId, citiesWithId);
// console.log(siti1);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив,
// та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок,
// текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься
//     в блоці wrap файла rule.html

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
// ];
// function forrules (arr) {
//     let wrap = document.getElementsByClassName('wrap')[0];
//     for (let i = 0; i < arr.length; i++) {
//     let rule = arr[i];
//     let mydiv = document.createElement('div');
//     let myh2 = document.createElement('h2');
//     let myp = document.createElement('p');
//     myh2.innerText = rule.title;
//     myp.innerText = rule.body;
//     mydiv.appendChild(myh2);
//     mydiv.appendChild(myp);
//     wrap.appendChild(mydiv);
// }
// }
// let test = forrules(rules);
// console.log(test);

//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
function trueornot (number) {
    let mynubber = 2;
function stepen (potochne) {
    mynubber = potochne * potochne
    return mynubber
}
while (number > mynubber) {
   stepen(mynubber)
}
    if (number === mynubber) {
        console.log( 'YES');
    } else {console.log( 'NO'); }
}
trueornot(16)












