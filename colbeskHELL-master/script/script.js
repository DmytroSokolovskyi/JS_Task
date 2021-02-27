function wakeup(time, callback) {
    console.log('Звонить будильник');
    console.log('Ще 5 хв i встаю');

    setTimeout(() => {
        if (time <= 7) {
            console.log(`Вже ${time}:05 Вставай `)
            callback(null, `${time}:05`);
        } else {
            console.log(` ${time}:05 Вставай ти проспав бо перевели годину `)
            callback(`${time}:05`, null);
        }
    }, 2000)
}

function workday(day, callbeck) {
    console.log('Можливо сьогоднi вихiдний?');
    let workday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    setTimeout(() => {
        console.log('Перевiряемо')
        let needwork = workday.some(value => value === day)
        if (needwork) {
            callbeck(null, 'Сьогоднi звичайний робочий день')
        } else {
            callbeck('Повезло сьогоднi вихiдний, спи дальше', null)
        }
    }, 1000)
}

function washup(cb) {
    setTimeout(() => {
        console.log('Умивання, чистка зубiв')
        cb('Готово')
    }, 2000)
}

function breakfast(wife, cb) {
    console.log('Потрiбно поicти')
    setTimeout(() => {
        if (wife) {
            cb(null, 'Дружина проготуе щось смачненьке')
        } else {
            cb('Все в холодильнику', null)
        }
    }, 2000)
}

function weather(sity, cb) {
    console.log('Яка погода?')
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
                cb(tem1)
            })
    }, 1000)
}

function road(time, cb) {
    if (time < 9) {
        console.log('Lets go WORK')
    } else {
        console.log('Lets go HOME')
    }
    setTimeout(() => {
        if (time > 8 || time > 20) {
            time = time + 2
            cb(time, 'Сьогоднi всi пробки твоi')
        } else {
            time = time + 1
            cb(null, time)
        }
    }, 2000)

}

function work(time, cb) {
    console.log('Початок робочого часу')
    setTimeout(() => {
        time = time + 10
        console.log('Кiнець робочого часу')
        cb(time)
    }, 3000)
}

function prevy(cb) {
    console.log('Включаю комп')
    setTimeout(() => {
        cb('Подивився превью')
    }, 500)
}

function lekcia(time, cb) {
    console.log('Заходимо')
    console.log('Уважно слухаю')
    setTimeout(() => {
        time = time + 2
        console.log(`Лекцiя закiнчилась`)
        cb(time)
    }, 3000)
}

function dz(time, cb) {
    console.log(`Читаю таску`)
    setTimeout(() => {
        time = time +1
        console.log('Не так ты вже i уважно слухав, тре тепер пробувати ще раз')
        lekcia(time, (timep) => {
            if (timep > 24) {timep = timep - 24}
            console.log(`Перегляд закiнчився ${timep}`)
            try2(timep)
            function try2(time) {
                time = time + 1
                cb(time)
            }

        })
    }, 2000)
}

wakeup(7, (error, time) => {
    if (error) {
        console.log(` Aaa вже ${error} все я проспав `)
        return;
    }
    console.log(`Ура я проснувся в ${time}`)


    workday('Friday', (free, gowork) => {
        if (free) {
            console.log(free)
            return;
        }
        console.log(`${gowork} приводь себе в порядок`);


        washup(() => {
            console.log('Готово')

            breakfast(true, (error, eat) => {
                if (error) {
                    console.log(error)
                }
                if (eat) {
                    console.log(eat);
                    console.log('Дякую за снiданок')
                }
                console.log('Що там по погодi?')
                weather('lviv', (temp) => {

                    if (0 < temp < 20) {
                        console.log(`Погода нормальна ${temp} градусiв`)
                    }
                    if (temp >= 20) {
                        console.log('Спека влягайся легко')
                    }
                    console.log('Час вирушати на роботу')
                    road(8, (error, time) => {
                        if (error) {
                            console.log('Сьогоднi не твiй день')
                            road(time, () => {
                                console.log(`Тоже так н нiчого росклад )`)
                            })
                            return
                        }
                        console.log(`Хороший для роботи день на годиннику ${time} `)
                        work(time, (time) => {
                            console.log(`Ox вже ${time} пора додому`)
                            road(time, () => {
                                console.log(`Хороший робочий день, що добре закiнчуеться в ${time} год`)
                                breakfast(true, (error, info) => {
                                    if (error) {
                                        console.log(error)
                                    } else {
                                        console.log(info)
                                    }
                                    prevy((info) => {
                                        console.log(info)
                                        lekcia(20, (time) => {
                                            console.log(` О вже ${time} тре присвятити час сiмi`)
                                            time = time +1
                                            dz(time, (time) => {
                                                console.log(`O ${time}:00 вирубало за компом`)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


