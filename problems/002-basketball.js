/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let commandOne = 0
    let commandTwo = 0
    for (const point of points) {

        commandOne += Number(point[0] + point[1])
        commandTwo += Number(point[3] + point[4])
    }
    console.log(commandOne,'commandOne')
    console.log(commandTwo,'commandTwo')
    return commandTwo > commandOne ? 2 : commandTwo === commandOne  ? undefined : 1
}

module.exports = getWinner;


console.log(getWinner(['36-18', '22-31', '27-21', '19-34']))
