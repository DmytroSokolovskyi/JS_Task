// 1
// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
//
// let number = [23, 45, 67, 768, 776];
// console.log(number);
// let string = ['hi', 'my', 'name', 'is', 'Dmytro'];
// console.log(string);
// let all = ['hello', 'okten', 29, 2020, true];
// console.log(all);

// 2
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'hi';
// arr[1] = 'okten';
// arr[2] = 'web';
// arr[3] = 10;
// arr.push('Dmytro');
// arr.unshift(2020);
// console.log(arr);


// //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let = i = 0; i <= 9; i++ ) {
// document.write('<div>Hello</div>');
// }
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let = i = 0; i <= 9; i++ ) {
// document.write('<div>Hello' + i + '</div>');
// }

////- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello</h1>');
//     i++;
// }

// //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i <= 19) {
//     document.write(`<h1>Hello ${i}</h1>`);
//     i++;
// }

// //- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// for (let i = 20; i < 30; i++) {
//    arr.push(i);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }

// //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['Створити', 'масив', 'з', '10', 'строкрових', 'елементів.', 'Вивести', 'в', 'консоль', 'всі'];
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
//  }

// //- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = ['Створити', 'масив', 'з', 10, [12, 15, true], 'або', 15, true, false, 'random'];
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
//  }

// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = ['Створити', false, true, 'з', 10, [12, 15, true], 'або', 15, true, 'random'];
// for (let i = 0; i < 10; i++) {
//     if (typeof arr[i] == 'boolean') {
//         console.log(typeof arr[i]);
//     }
// }

// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['Створити', false, 'масив', 'з', 10, [12, 15, true], 'або', 15, true, 'random'];
// for (let i = 0; i < 10; i++) {
//     if (typeof arr[i] == 'number') {
//         console.log(typeof arr[i]);
//     }
// }

// //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['Створити', false, 'масив', 'з', 10, [12, 15, true], 'або', 15, true, 'random'];
// for (let i = 0; i < 10; i++) {
//     if (typeof arr[i] == 'string') {
//         console.log(typeof arr[i]);
//     }
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 434;
// arr[1] = true;
// arr[2] = 'hi';
// arr[3] = 78;
// arr[4] = false;
// arr[5] = 87;
// arr[6] = 1.4343;
// arr[7] = 'qwerty';
// arr[8] = 'wellcome';
// arr[9] = false;
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
//  }

// //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i);
//     document.write(i);
//  }

// //- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 1) {
//     console.log(i);
//     document.write(i);
//  }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i);
//  }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i += 1) {
//     if (i % 2 == 0) {
//     console.log(i);
//     document.write(i);
//     }
// }

// //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i += 1) {
//     if (i % 2 != 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 1; i <=2; i += 1) {
//     for (b = 1; b <= 60; b++) {
//         console.log(i, b);
//     }
// }

// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i <= 2; i++) {
//     for (let b = 0; b <= 59; b++) {
//         for (let c = 0; c <= 59; c++) {
//             console.log(i + ':' + b + ':' + c);
//         }
//             if (i === 2 && b === 20 && c === 0) {
//                 break;
//             }
//
//     }
// }

// Додатково

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let st ='';
// let arr = [ 'a', 'b', 'c'];
// for (i = 0; i < 3; i++) {
//  st = st + arr[i];
//  }
// console.log(st);
// document.write(st);

// //- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let st ='';
// let arr = [ 'a', 'b', 'c'];
// let j = arr.length
// let i = 0;
// while (i < j) {
//  st = st + arr[i];
//  i++
// }
// console.log(st);
// document.write(st);

// //- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let st = '';
// let arr = ['a', 'b', 'c'];
// for (s of arr) {
//      st = st + s;
// }
// console.log(st);
// document.write(st);

// Доопрацювання

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// let j = arr.length
// console.log(j);
// while (i < j ) {
//     console.log(arr[i])
//     i++;
// }

// //     2. перебрати його циклом for
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length
// for (let i = 0; i < j; i++) {
//     console.log(arr[i])
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// let j = arr.length
// while (i < j) {
//     if (i % 2 != 0)
//         console.log(arr[i])
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length
// for (let i = 0; i < j; i++) {
//     if (i % 2 != 0) {
//         console.log(arr[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// let j = arr.length
// while (i < j ) {
//     if (arr[i] % 2 == 0)
//         console.log(arr[i])
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let j = arr.length
// for (let i = 0; i < j; i++ ) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length
// for (let i = 0; i < j; i++) {
//     if (arr[i] % 3 == 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);

// 8. вивести масив в зворотньому порядку.
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length - 1;
// while (j >= 0) {
//     console.log(arr[j]);
//     j--;
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9.1
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length -1;
// while (j >= 0) {
//     console.log(arr[j]);
//     j--;
// }
// 9.2
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
// 9.3
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length
// while (j - 1 >= 0) {
//     if (j % 2 != 0)
//         console.log(arr[j])
//     j--;
// }
// 9.4
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 != 0) {
//         console.log(arr[i]);
//     }
// }
// 9.5
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let j = arr.length - 1;
// while (j >= 0) {
//     if (arr[j] % 2 == 0)
//         console.log(arr[j])
//     j--;
// }
// // 9.6
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let j = arr.length - 1; j >= 0; j--) {
//     if (arr[j] % 2 == 0) {
//         console.log(arr[j]);
//     }
// }
// 9.7
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let arrnew = [];
// let j = arr.length - 1;
// while (j >= 0) {
//     if (arr[j] % 3 == 0) {
//         arrnew.push('okten');
//     } else {
//         arrnew.push(arr[j]);
//     }
//     j--
// }
// console.log(arrnew);

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// let i = 0;
// while (i < 50) {
//     let r = Math.floor(Math.random() * 999) + 1;
//     if (r % 2 == 0) {
//         arr.push(r);
//     }
//     i = arr.length;
// }
// console.log(arr.length);
// console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// let i = 0;
// while (i < 50) {
//     let r = Math.floor(Math.random() * 999) + 1;
//     if (r % 2 != 0) {
//         arr.push(r);
//     }
//     i = arr.length;
// }
// console.log(arr.length);
// console.log(arr);

// 1
// створити пустий масив та :

//     1. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i = arr.length) {
//     let r = Math.floor(Math.random() * 999) + 1;
//     if (r % 2 == 0) {
//         arr.push(r);
//     }
// }
// console.log(arr.length);
// console.log(arr);
// 2. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i = arr.length) {
//     let r = Math.floor(Math.random() * 999) + 1;
//     if (r % 2 != 0) {
//         arr.push(r);
//     }
// }
// console.log(arr.length);
// console.log(arr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let arr = [];
// for (let i = 0; i < 77; i = arr.length) {
//     let r = Math.random();
//     arr.push(r)
// }
// console.log(arr.length);
// console.log(arr);

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i < 50; i = arr.length) {
//     let r = Math.floor(Math.random() * 732 - 8) + 8;
//         arr.push(r);
// }
// console.log(arr.length);
// console.log(arr);

// 2. вывести на консоль  каждый третий елемент
// let arr = [];
// let work = 3;
// for (let i = 1; i <= 100; i++) {
//     let r = Math.floor(Math.random() * 732 - 8) + 8;
//     arr.push(r);
// }
// console.log(arr);
// for (let i = 2; i < arr.length; i+=3) {
//     console.log(arr[i]);;
//
// }

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     let r = Math.floor(Math.random() * 732 - 8) + 8;
//     arr.push(r);
// }
// console.log(arr.length);
// console.log(arr);
// let z;
// for (z of arr) {
//     if (z % 3 == 0 && arr[z] % 2 == 0 ) {
//         console.log(arr[z] + ' парне число');
//     }
// }

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// let arr = [];
// let parne = [];
// for (let i = 1; i <= 100; i++) {
//     let r = Math.floor(Math.random() * 732 - 8) + 8;
//     arr.push(r);
// }
// console.log(arr.length);
// console.log(arr);
// let z;
// for (z of arr) {
//     if (z % 3 == 0 && arr[z] % 2 == 0 ) {
//         console.log(arr[z] + ' парне число ');
//         parne.push(arr[z])
//     }
// }
// console.log(parne);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     let r = Math.floor(Math.random() * 732 - 8) + 8;
//     arr.push(r);
// }
// console.log(arr);
//
// for (let j = 0; j < arr.length; j++ ) {
//     if (arr[j + 1] % 2 ==0) {
//         console.log(arr[j]);
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// let arr = [100, 250, 50, 168, 120, 345, 188];
// let z;
// let suma = 0;
// for (let i = 0; i < arr.length; i++) {
//     suma = suma + arr[i];
// }
// let check = Math.round( suma / arr.length);
// console.log(check);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// for (let i = 0; i < 10; i = arr.length) {
//     let r = Math.floor(Math.random() * 999) + 1;
//     if (r % 2 == 0) {
//         arr.push(r);
//     }
// }
// console.log(arr);
// let uarr =[];
// for (let i = 0; i < arr.length; i++) {
//     uarr.push(arr[i] * 5);
// }
// console.log(uarr);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let arr = ['Створити', false, 'масив', 'з', 10, [12, 15, true], 'або', 15, true, 'random'];
// let arrs = [];
// for (let i = 0; i < arr.length; i++) {
//   if ( typeof arr[i] === "number") {
//       arrs .push(arr[i]);
//   }
// }
// console.log(arrs);
