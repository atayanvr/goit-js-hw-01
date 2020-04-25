let total = 0;
let input = prompt("Введите число");

if (input === "") {
  alert("Было введено не число, попробуйте еще раз");
} else {
  total += input;
}

if (total === "" || total === 0) {
  alert("Вы не ввели число");
} else {
  alert(`Общая сумма введеных чисел, равна ${total}`);
}
