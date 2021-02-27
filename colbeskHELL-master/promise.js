function wakeup(time) {
    return new Promise((resolve, reject) => {
        console.log('Звонить будильник');
        console.log('Ще 5 хв i встаю');

        setTimeout(() => {
            if (time <= 7) {
                console.log(`Вже ${time}:05 Вставай `)
                resolve(`${time}:05`);
            } else {
                console.log(` ${time}:05 Вставай ти проспав бо перевели годину `)
                reject(`${time}:05`);
            }
        }, 2000)
    })
}


function workday(day) {
    return new Promise((resolve, reject) => {
        console.log('Можливо сьогоднi вихiдний?');
        let workday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        setTimeout(() => {
            console.log('Перевiряемо')
            let needwork = workday.some(value => value === day)
            if (needwork) {
                resolve('Сьогоднi звичайний робочий день')
            } else {
                reject('Повезло сьогоднi вихiдний, спи дальше')
            }
        }, 1000)
    })
}


function washup() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Умивання, чистка зубiв')
            resolve('Готово')
        }, 2000)
    })

}


function breakfast(wife) {
    return new Promise((resolve, reject) => {
        console.log('Потрiбно поicти')
        setTimeout(() => {
            if (wife) {
                resolve('Дружина проготуе щось смачненьке')
            } else {
                reject('Все в холодильнику голодний робочй день')
            }
        }, 2000)
    })
}


function weather(sity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Дивимось прогноз')
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${sity},ua&APPID=36e8ef5b0a909a30b16824cc25b798d3`)
                .then(response => {
                    return response.json()
                })
                .then(temp => {
                    const tempsity = temp.weather[0].icon
                    console.log(`У ${sity} на даний момент ${tempsity} градусiв`)
                    return tempsity
                })
                .then(ret => {
                    let tem1 = parseFloat(ret.slice(0, 2))
                    resolve(tem1)
                })
                .catch(reason => {
                    reject(reason)
                })
        }, 1000)
    })

}

function road(time) {
    return new Promise((resolve, reject) => {
        if (time < 9) {
            console.log('Lets go WORK')
        } else {
            console.log('Lets go HOME')
        }
        setTimeout(() => {
            if (time > 8 && time < 10) {
                time = time + 2
                reject('Сьогоднi всi пробки твоi')
            } else {
                time = time + 1
                resolve(time)
            }
        }, 2000)
    })
}


function work(time) {
    return new Promise((resolve, reject) => {
        console.log('Початок робочого часу')
        setTimeout(() => {
            time = time + 10
            console.log('Кiнець робочого часу')
            resolve(time)
            reject('Щось трапилось на роботi')
        }, 3000)
    })
}


function prevy() {
    return new Promise(resolve => {
        console.log('Включаю комп')
        setTimeout(() => {
            resolve('Подивився превью')
        }, 500)
    })
}

function lekcia(time) {
    return new Promise(resolve => {
        console.log('Заходимо')
        console.log('Уважно слухаю')
        setTimeout(() => {
            time = time + 2
            console.log(`Лекцiя закiнчилась`)
            resolve(time)
        }, 3000)
    })
}


function dz(time) {
    return new Promise(resolve => {
        console.log(`Читаю таску ${time}:00`)
        setTimeout(() => {
            time = time + 1
            console.log('Не так ты вже i уважно слухав, тре тепер пробувати ще раз')
            lekcia(time)
                .then(time => {
                    if (time > 24) {
                        time = time - 24
                    }
                    console.log(`Перегляд закiнчився ${time}:00`)
                    console.log('Потрiбно пробувати писати')
                    time = time + 1
                    resolve(time)
                })
        }, 2000)
    })
}


wakeup(7)
    .then(time => {
        console.log('Ура я проснувся в', time);
        return workday('Monday')
    })
    .then(msg => {
        console.log(msg, 'приводь себе в порядок')
        washup()
        return breakfast(true)
    })
    .then(msg => {
        console.log(msg, 'Дякую за снiданок')
        console.log('Що там по погодi?')
        return weather('lviv')
    })
    .then(temp => {
        if (0 < temp < 20) {
            console.log(`Погода нормальна ${temp} градусiв`)
        }
        if (temp >= 20) {
            console.log('Спека влягайся легко')
        }
        console.log('Час вирушати на роботу')
        return road(8)
    })
    .then(time => {
        console.log('Хороший для роботи день на годиннику' + ' ' + time + ':00 ')
        return work(time)
    })
    .then(time => {
        console.log(`Ox вже ${time}:00 пора додому`)
        return road(19)
    })
    .then(tim => {
        console.log(`Хороший робочий день, що добре закiнчуеться в ${tim}:00 год`)
        return breakfast(true)
    })
    .then(msg => {
        console.log(msg)
        console.log('Дякую')
        return washup()
    })
    .then(msg => {
        console.log(msg);
        return prevy()
    })
    .then(msg => {
        console.log(msg);
        return lekcia(20)
    })
    .then(time => {
        console.log(` О вже ${time}:00 тре присвятити час сiмi`)
        return dz(23)
    })
    .then(time => {
        console.log(`O ${time}:00 вирубало за компом`)
    })
    .catch(reason => {
        console.log(reason)
    }) .finally(() => {
    console.log('Якось так')
})



