//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// function MyTag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// // -a
// let mytitleOfTag = '<a>';
// let myaction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let mytagattrs = [
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//     {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}];
// const a = new MyTag(mytitleOfTag, myaction, mytagattrs);
// console.log(a);
//
// // -div
// let divname = '<div>';
// let divction = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let divattrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//     ];
// const div = new MyTag(divname, divction, divattrs);
// console.log(div);
//
// // -h1
// let h1name = '<h1>';
// let h1action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ';
// let h1attrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
// ];
// const h1 = new MyTag(h1name, h1action, h1attrs);
// console.log(h1);
// // -span
// let spanname = '<span>';
// let spanaction = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// const span = new MyTag(spanname, spanaction);
// console.log(span);
// // -input
// let inputname = '<input>';
// let inputaction = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.';
// let inputattrs = [
//     {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы'},
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'pattern', actionOfAttr: 'Устанавливает шаблон ввода.'},
// ];
// const input = new MyTag(inputname, inputaction, inputattrs);
// console.log(input);
// // -form
// let formname = '<form>';
// let formaction = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let formattrs = [
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'},
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
// ];
// const form = new MyTag(formname, formaction, formattrs);
// console.log(form);
// // -option
// let optionname = '<option>';
// let optionaction = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ';
// let optionattrs = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
// ];
// const option = new MyTag(optionname, optionaction, optionattrs);
// console.log(option);
// // -select
// let selectname = '<select>';
// let selectaction = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. ';
// let selectattrs = [
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
//     {titleOfAttr: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'},
// ];
// const select = new MyTag(selectname, selectaction, selectattrs);
// console.log(select);
//

//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
//
// }
//
// let mytitleOfTag = '<a>';
// let myaction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let mytagattrs = [
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//     {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}];
// const a = new Tag(mytitleOfTag, myaction, mytagattrs);
// console.log(a);
// const div = new Tag(divname, divction, divattrs);
// console.log(div);
// const h1 = new Tag(h1name, h1action, h1attrs);
// console.log(h1);
// const input = new Tag(inputname, inputaction, inputattrs);
// console.log(input);
// const form = new Tag(formname, formaction, formattrs);
// console.log(form);
// const option = new Tag(optionname, optionaction, optionattrs);
// console.log(option);
// const select = new Tag(selectname, selectaction, selectattrs);
// console.log(select);

//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//     об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================//
// const car = {
//     type: 'Cabriolet',
//     model: 'Opel',
//     year: 2019,
//     maxspeed: 280,
//     capacity: 2.5,
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     },
//     info () {
//         if (this.driver) {
//             console.log(this.type, this.model, this.year, this.maxspeed, this.capacity, this.driver)
//         } else
//             console.log(this.type, this.model, this.year, this.maxspeed, this.capacity);
//     },
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed += newSpeed;
//     },
//     changeYear (newValue) {
//         this.year = newValue;
//     },
//     addDriver (drivercar) {
//         this.driver = drivercar;
//     }
// }
// const driver1 = {name:'Ivan', haveold: 23, havecar: true}
// car.drive()
// car.increaseMaxSpeed(29)
// car.changeYear(23)
// car.addDriver(driver1)
// car.info()

//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//     виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і доавляет його в поточний об'єкт car
// function Car(type, model, year, maxspeed, capacity) {
//     this.type = type;
//     this.model = model;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.capacity = capacity;
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//     this.info = function () {
//         if (this.driver) {
//             console.log(this.type, this.model, this.year, this.maxspeed, this.capacity, this.driver)
//         } else
//             console.log(this.type, this.model, this.year, this.maxspeed, this.capacity);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (drivercar) {
//         this.driver = drivercar;
//     };
// }
// const opel = new Car('Cabriolet', 'Opel', 2006, 260, 2.2);
// const driver1 = {name:'Ivan', haveold: 23, havecar: true};
// console.log(opel);
// opel.drive();
// opel.increaseMaxSpeed(255);
// opel.changeYear(2020);
// opel.addDriver(driver1);
// opel.info();
// console.log(opel.driver);

//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor (type, model, year, maxspeed, capacity)
//     {
//     this.type = type;
//     this.model = model;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.capacity = capacity;
//     }
//
//   drive () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//     info () {
//         if (this.driver) {
//             console.log(this.type, this.model, this.year, this.maxspeed, this.capacity, this.driver)
//         } else
//             console.log(this.type, this.model, this.year, this.maxspeed, this.capacity);
//     };
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxspeed += newSpeed;
//     };
//     changeYear (newValue) {
//         this.year = newValue;
//     };
//     addDriver (drivercar) {
//         this.driver = drivercar;
//     };
// }
// const opel = new Car('Cabriolet', 'Opel', 2006, 260, 2.2);
// const driver1 = {name:'Ivan', haveold: 23, havecar: true};
// console.log(opel);
// opel.drive();
// opel.increaseMaxSpeed(255);
// opel.changeYear(2020);
// opel.addDriver(driver1);
// opel.info();
// console.log(opel.driver);

// --створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Lady {
//     constructor(name, year, rozmir) {
//         this.name = name;
//         this.year = year;
//         this.rozmir = rozmir;
//     }
// }
//
// const ira = new Lady('Ira', 23, 37);
// const olya = new Lady('Olya', 18, 39);
// const anya = new Lady('Anya', 27, 31);
// const galuna = new Lady('Galuna', 22, 30);
// const toma = new Lady('Toma', 24, 34);
// const tanya = new Lady('Tanya', 25, 35);
// const natalia = new Lady('Natalia', 21, 33);
// const nadia = new Lady('Nadia', 20, 36);
// const maruna = new Lady('Maruna', 23, 40);
// const yulia = new Lady('Yulia', 25, 32);
//
// const ladys = [ira, olya, anya, galuna, toma, tanya, natalia, nadia, maruna, yulia];
//
// class Princ {
//     constructor(name, year, tyfelka) {
//         this.name = name;
//         this.year = year;
//         this.tyfelka = tyfelka;
//     }
//
//     poshyk(garem) {
//         for (const element of ladys) {
//             if (this.tyfelka == element.rozmir) {
//                 console.log(`Hi ${element.name} you my love `)
//             }
//         }
//     }
// }
//
// const igor = new Princ('Igor', 25, 33)
// igor.poshyk(ladys)

//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Lady (name, year, rozmir) {
//         this.name = name;
//         this.year = year;
//         this.rozmir = rozmir;
// }
//
// const ira = new Lady('Ira', 23, 37);
// const olya = new Lady('Olya', 18, 39);
// const anya = new Lady('Anya', 27, 31);
// const galuna = new Lady('Galuna', 22, 30);
// const toma = new Lady('Toma', 24, 34);
// const tanya = new Lady('Tanya', 25, 35);
// const natalia = new Lady('Natalia', 21, 33);
// const nadia = new Lady('Nadia', 20, 36);
// const maruna = new Lady('Maruna', 23, 40);
// const yulia = new Lady('Yulia', 25, 32);
//
// const ladys = [ira, olya, anya, galuna, toma, tanya, natalia, nadia, maruna, yulia];
//
// function Princ (name, year, tyfelka) {
//         this.name = name;
//         this.year = year;
//         this.tyfelka = tyfelka;
//
//
//     this.poshyk = function (garem) {
//         let find = false;
//         for (const element of ladys) {
//             if (this.tyfelka === element.rozmir) {
//                 console.log(`Hi ${element.name} you my love `)
//                 find = true
//             }
//         }
//         if (!find) {console.log('Потрiбно шукати в другому мiсцi')}
//     }
// }
//
// const igor = new Princ('Igor', 25, 2343)
// igor.poshyk(ladys)