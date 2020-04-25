const credits = 23580;
const pricePerDroid = 3000;
let amount = prompt('Сколько вы хотите купить дроидов?');
let totalPrice;

if(amount === null){
    console.log(Отменено пользователем!);
} else {
    totalPrice = amount * pricePerDroid;

    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!');
    } else{
        credits-=totalPrice;
        console.log('Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.');
    }
}