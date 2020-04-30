'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число:', '');
  total += Number(input);
} while (input !== null);

console.log(`Общая сумма чисел равна : ${total}`);