//Создать переменную «возраст» человека и определить, является ли он совершеннолетним (>18).\


const age = Number(prompt("Enter your age: "));

function cheker(age)
{
   return age > 18 ? true : false;
}

if(cheker(age))
{
   alert("All right ! Age OK : ) ");
}
else{
  alert("You young !!!");
}


//Создать переменную «год» и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


const year = Number(prompt("Enter year: "));

function yearCheker(year)
{
    return  year % 400 === 0 || (year % 4 === 0 && year !== 100) ? true : false;
}


if( yearCheker(year))
{
   alert("Высокосный ");
}
else{
  alert("Не высокосный");
}

//Создать  переменную «сумма покупки» и вывести сумму к оплате со скидкой: более 1000 – скидка 5%.


function costWithSales(totalSumma)
{
    return totalSumma > 1000 ? totalSumma - (( totalSumma * 5) / 100) : totalSumma;
}


console.log("Со скидкой 5% будет : " + costWithSales(1390));



//Создать две переменные : «длина окружности» и «периметр квадрата». Определить, может ли такая окружность поместиться в указанный квадрат.


function defineFigureExpression(perimetr, diametr)
{
    let radius = diametr / 2;
    let side = perimetr / 4;
    return radius <= side / 2 ? true : false;
}