console.log('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).');
const result1 = [];
for (let i = 20; i <= 30; i += 0.5) {
    result1.push(i);
}
console.log(result1.join(' '));

console.log('2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i}$ = ${i * 27} UAH`);
}

console.log('3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
const num3 = 30;
for (let i = 1; i <= 100; i++) {
    if (i * i <= num3) {
        console.log(i);
    }
}

console.log('4. Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).');
const num4 = 349;
let checkNumber = true;
for (let i = 2; i < num4; i++) {
    if (num4 % i === 0) {
        checkNumber = false;
    }
}
if (checkNumber) {
    console.log('Число простое');
} else {
    console.log('Число не простое :)');
}

console.log('5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');
let num5 = 81;
while (num5 % 3 === 0) {
    num5 /= 3;
}
console.log(num5);
if (num5 === 1) {
    console.log('Можно получить');
} else {
    console.log('Нельзя получить');
}