/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {

    return +number[0] + +number[1] + +number[2]  === +number[3] + +number[4] + +number[5]
}

console.log(checkTicket('005212'))
console.log(checkTicket('133700'))
console.log(checkTicket('123032'))
module.exports = checkTicket;
