// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
const text = document.getElementById('writetext');
text.value = localStorage.getItem('text')
text.oninput = (ev) => {
    localStorage.setItem('text', ev.target.value);
}

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, 
// селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу 
// (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
//
let form = document.forms.info;
let array = JSON.parse(localStorage.getItem('local'))
console.log(array);

for (let key in array) {
    if (key.startsWith('ch') || key.startsWith('ra')) {
        form[key].checked = array[key]
    }
    form[key].value = array[key];
}

form.onchange = () => {
    let obj = {};
    for (let utem of form) {
        if (utem.type === 'radio' || utem.type === 'checkbox') {
            obj[utem.name] = utem.checked;
        } else {
            obj[utem.name] = utem.value;
        }

    }

    localStorage.setItem('local', JSON.stringify(obj))
}
//


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
const navigator = document.getElementById('navigator');
const save = document.getElementById('button');
const left = document.getElementById('left');
const right = document.getElementById('right');
let textar = document.forms.story.mytext;


save.onclick = ev => {
    localStorage.setItem(`history${localStorage.length + 1}`, textar.value);
    textar.value = '';
};

let i = localStorage.length - 1;
console.log(i);

left.onclick = ev => {
    let arr = [];
    for (const iter in localStorage) {
        if (iter.startsWith('history'))
        arr.push(localStorage.getItem(iter))
    }
    console.log(arr)
    textar.value = arr[i]
    i--
    if (i === 0) {i = localStorage.length - 1}
};

right.onclick = ev => {
    let arr = [];
    for (const iter in localStorage) {
        if (iter.startsWith('history'))
            arr.push(localStorage.getItem(iter))
    }
    console.log(arr)
    console.log(i)

    textar.value = arr[i]
    i++
    if (i === localStorage.length - 1) {i = 0}
};


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
//     При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
//     которые уже заполнены данными объекта
//
const forma = document.forms.user;
const buttoncreate = document.getElementById('createUser');
let userall = [];
const mybook = document.getElementById('mybook')


buttoncreate.onclick = ev => {
    let user = {};
    for (const pole of forma) {
        user[pole.id] = pole.value;
    }
    console.log(user);
    userall.push(user);
    console.log(userall);
    localStorage.setItem(`myUser`, JSON.stringify(userall))
}

elementHTML(JSON.parse(localStorage.getItem('myUser')));


function elementHTML(arr) {
    for (const elem of arr) {
        console.log(elem);
        let divelem = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let butred = document.createElement('button')
        let butdel = document.createElement('button')

        h2.innerText = elem.name;
        p.innerText = `${elem.family} ${elem.otchestvo}  ${elem.tel}  ${elem.email}  ${elem.family} `;
        butred.innerText = 'Редактувати';
        butdel.innerText = 'Удалити';
butdel.onclick = ev => {
    del(elem)
}

butred.onclick = ev => {
    redakt(elem)
}


        divelem.appendChild(h2);
        divelem.appendChild(p);
        divelem.appendChild(butred);
        divelem.appendChild(butdel);
        mybook.appendChild(divelem);
}
}

function del(obg) {
    const history = JSON.parse(localStorage.getItem('myUser'));
    const goooguser = history.filter(user => user.name !== obg.name);
    console.log(goooguser);
    localStorage.setItem('myUser', JSON.stringify(goooguser))
}

function redakt(obg) {
    const history = JSON.parse(localStorage.getItem('myUser'));

    for (const obgKey in obg) {
        console.log(obgKey);
        forma[obgKey].value = obg[obgKey];
    }

}







