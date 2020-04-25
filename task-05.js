let country = prompt('Укажите страну доставки');
let price;

if(country === null){
    alert('Отменено пользователем');
} else {
    country = country.toLowerCase();
}

switch(country){
    case 'Китай':
    price = 100;
    break;
    case 'Чили':
    price = 250;
    break;
    case 'Австралия':
    price = 170;
    break;
    case 'Индия':
    price = 80;
    break;
    case 'Ямайка':
    price = 120;
    break;

    default:
        alert("В вашей стране доставка не доступна");
}

if(country === 'Китай' ||
country === 'Чили' ||
country === 'Австралия' ||
country === 'Индия' ||
country === 'Ямайка' 
){
    alert(Доставка в ${country} будет стоить ${price} кредитов);
}