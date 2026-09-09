'use strict';

/**
 * Функция, сортирующая массив строк и вовзращающая новый массив
 * @param {Array<String>} strings - массив строк
 * 
 * @param {String} a - строка, выбранная из массива
 * 
 * @param {String} b - строка, выбранная из массива после строки a
 * 
 * @example
 * // returns ["fig", "new", "Like"]
 * max(["new", "like", "fig"]);
 * 
 * @returns {Array<String>}
 */

const sortByLength = function (strings) { 
    if (strings.isArray(arr) && strings.every(item => typeof item === 'string')){
        let res = [...strings];
        if (strings.length < 2){
            return res; 
        }
        for (let i = 0; i < res.length-1; i++){
         for (let j = 0; j < res.length-i-1; j++){
               if (res[j].length > res[j+1].length || 
                    res[j].length == res[j+1].length && res[j] > res[j+1]){
                        [res[j], res[j+1]] = [res[j+1], res[j]];
                }
            }
        }
    return res;
    }
    return strings;
}