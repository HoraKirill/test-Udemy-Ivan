let appData = {
    allMoney: 0,
    timeData: "",
    expenses: {
        v1: '',
        v2: ''
    },
    optionalExpenses: 0,
    income: [],
    savings: false
};
var money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
appData.allMoney = money;
appData.timeData = time;
appData.expenses.v1 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.v2 = prompt("Во сколько обойдется?", "");
alert('бюджет на 1 день: ' + appData.allMoney / 30);
console.log(appData);