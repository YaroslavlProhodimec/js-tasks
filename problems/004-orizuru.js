/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(60) === [10, 40, 10]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */



function computeOrizurus(total) {
    // p + p + 4p = total
    // 6p = total
    // p = total / 6
    const p = total / 6;
    const pete = p;
    const kate = 4 * p;
    const sergo = p;

    return [pete, kate, sergo];


}

console.log(computeOrizurus(6))
console.log(computeOrizurus(24))
console.log(computeOrizurus(60))
module.exports = computeOrizurus;
