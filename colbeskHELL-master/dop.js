
// Реалізувати друкарську машинку.
// У вас є текст "Hello World". (або юудь який інший на ваш розсуд)  Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.  Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"  Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


let writediv = document.getElementById('write')
let text = 'Hello OKTEN'


write(text, writediv)
async function write(text, element) {
    let arrsplit = text.split('')

    for (let t of arrsplit) {
        console.log(t);
        let time = Math.random() * 1000;
        await go(t, time, element)
    }

    function go(text, time, element) {
        return new Promise(resolve => {
            setTimeout( ()=> {
                element.innerHTML = element.innerHTML + text;
                resolve (text)
            }, time)
        })
    }
}




// отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов


arr = [4, 1, 3, 2, 5, 8, 9, 0, 7, 2]
sort = []
arr.forEach((i) => {
    setTimeout(() => {
        sort.push(i)
    }, i * 100)
})
setTimeout(() => {
    console.log(sort)
}, 1000)








