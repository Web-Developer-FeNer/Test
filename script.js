let money, time


function start() {
    money = prompt("Ваш бюджет на месяц?")
    time = prompt("Введите дату рождения")

    while (isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет на месяц?")
    }
}
start()


let appData = {
moneys: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: false, 
chooseExpenses: function(){
    for (let i=0; i<2; i++){
        let a = prompt("Введите статью расходов")
        let b = prompt("Во сколько обойдется")
    
        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) 
        != null && a != "" && b != "" && a.length < 50 ){
            appData.expenses[a] = b
        } else {
            i = i - 1
        }
    }
},
detectDayBudget: function(){
    appData.moneyPerDay = (appData.moneys / 30).tiFixed()
    alert("Ежедневный бюджет " + moneyPerDay)
},
detectLevel: function() {
    if (appData.moneyPerDay < 100){
        console.log("Минимальный бюджет")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний бюджет")
    } else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень бюджет")
    } else {
        console.log("Ошибка")
    }
},
checkSavings: function() {
    if (appData.saving == true){
        let save = prompt("Какова сумма накоплений"),
            percent = prompt("Под какой процент")

        appData.monthIncome = save/100/12*percent
        alert("Доход в месяц - " + appData.monthIncome)
    }
},
chooseOptExpenses: function(){
    for(let i=0; i<3; i++){
        let opt = prompt("Статья необязтаельных расходов")
        appData.optionalExpenses[i] = opt
    }
},
chooseIncome: function(){
    let items = prompt("Что принесет дополнительный доход ? (перечислите через запятую)")
    appData.income = items.split(', ')
}
}