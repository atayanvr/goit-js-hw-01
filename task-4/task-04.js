let credits = 23580;
const pricePerDroid = 3000;
const amount = prompt('Сколько дроидов Вы хотите купить?');
let totalPrice;

if (amount === null) {
  console.log('Отменено пользователем');
} else {
  totalPrice = Number(amount) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}