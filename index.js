let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null
    && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i=0;
    }
};
appData.moneyPerDay = appData.budget / 30;
alert('бюджет на 1 день: ' + appData.moneyPerDay);

console.log(appData);

var funct = (n) => {
    // Program Me
    return n.toString(2).replace(/0/g,'').length;
  };
  funct (4);

 var countBits = n => n.toString(2).split('0').join('').length;
  countBits(4);