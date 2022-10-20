let money = prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату рождения")

let a1 = prompt("Введите статью расходов")
let a2 = prompt("Во сколько обойдется")
let a3 = prompt("Введите статью расходов")
let a4 = prompt("Во сколько обойдется")


let appData = {
moneys: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: false
}

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(money / 30)