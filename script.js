let money = prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату рождения")

let question_1 = prompt("Введите статью расходов")
let question_2 = prompt("Во сколько обойдется")

let appData = {
moneys: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: false
}

alert(money / 30)