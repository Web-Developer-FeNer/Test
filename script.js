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
savings: false
}

function chooseExpenses() {
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
}
chooseExpenses()




appData.moneyDay = (appData.moneys / 30).toFixed()



alert(appData.moneyDay)