console.log('1. Вивести на сторінку в один рядок через кому числа від 10 до 20.');
const result1 = [];
for (let i = 10; i <= 20; i++) {
    result1.push(i);
}
console.log(result1.join(', '));

console.log('2. Вивести квадрати чисел від 10 до 20.');
const result2 = [];
for (let i = 10; i <= 20; i++) {
    result2.push(i * i);
}
console.log(result2.join(', '));

console.log('3. Вивести таблицю множення на 7.');
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

console.log('4. Знайти суму всіх цілих чисел від 1 до 15.');
let sum4 = 0;
for (let i = 1; i <= 15; i++) {
    sum4 += i;
}
console.log(sum4);

console.log('5. Знайти добуток усіх цілих чисел від 15 до 35.');
let sum5 = 15;
for (let i = 16; i <= 35; i++) {
    sum5 *= i;
}
console.log(BigInt(sum5));

console.log('6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
let sum6 = 0;
for (let i = 1; i <= 500; i++) {
    sum6 += i;
}
console.log(sum6 / 500);

console.log('7. Вивести суму лише парних чисел в діапазоні від 30 до 80.');
let sum7 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum7 += i;
    }
}
console.log(sum7);

console.log('8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.');
const result8 = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result8.push(i);
    }
}
console.log(result8.join(', '));

console.log('9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');
const naturalNumber = 12;
const result9 = [];
for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        result9.push(i);
    }
}
console.log(result9.join(', '));

console.log('10. Визначити кількість його парних дільників.');
let sum10 = 0;
for (let i of result9) {
    if (i % 2 === 0) {
        sum10 += 1;
    }
}
console.log(sum10);

console.log('11. Знайти суму його парних дільників.');
let sum11 = 0;
for (let i of result9) {
    if (i % 2 === 0) {
        sum11 += i;
    }
}
console.log(sum11);

console.log('12. Надрукувати повну таблицю множення від 1 до 10.');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}