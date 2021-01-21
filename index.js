let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i= i -1;
        }
    }
};

chooseExpenses ();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('бюджет на 1 день: ' + appData.moneyPerDay);
};

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
        console.log ("Маловато будет");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000) {
        console.log ("На поддержание штанов хватит");
    } else if (appData.moneyPerDay > 3000) {
        console.log ("Хороший достаток");
    } else {'Произошла ошибка'};
};

detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save =  +prompt("Какова сумма накоплений");
            percent =  +prompt("Под какой процент");

            appData.mouthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.mouthIncome)
    }
};

checkSavings ();

function chooseOptExpenses() {
    appData.optionalExpenses[1] = +prompt('Статья необязательных расходов?');
    appData.optionalExpenses[2] = +prompt('Статья необязательных расходов?');
    appData.optionalExpenses[3] = +prompt('Статья необязательных расходов?');
};