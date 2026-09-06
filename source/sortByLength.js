'use strict';

/**
 * Функция, определяющая максимальное число в массиве
 * @param {Array<String>} strings - массив строк
 * 
 * @param {string} a - строка, выбранная из массива
 * 
 * @param {string} b - строка, выбранная из массива после строки a
 * 
 * @example
 * // returns ["fig", "new", "Like"]
 * max(["new", "like", "fig"]);
 * 
 * @returns {Array<String>}
 */

const sortByLength = function (strings) { 
    return strings.sort((a, b) => {
        if (a.length != b.length){
            return a.length - b.length;
        }
        else {
            return a.localeCompare(b);
        }
    })
}
