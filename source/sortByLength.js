'use strict';

/**
 * Функция сортировки, сортирующая элементы в соответствии с заданной функцией сравнения
 * @param {Array<Var>, function} - массив элементов и функция сравнения
 * 
 * @example
 * // returns [1, 2, 3]
 * [2, 1, 3];
 * 
 * @example
 * // returns ["fig", "kiwi", "apple", "grape", "banana"]
 * ["apple", "banana", "kiwi", "fig", "grape"];
 * 
 * @returns {Array<Var>}
 */
const mysort = function (vars, compare) { 
    if (!Array.isArray(vars)){
    return vars;
    }
        let res = [...vars];
        if (res.length < 2){
            return res; 
        }

        for (let i = 0; i < res.length-1; i++){
            for (let j = 0; j < res.length-i-1; j++){
                if (compare(res[j], res[j+1]) > 0){
                        [res[j], res[j+1]] = [res[j+1], res[j]];
                }
            }
        }
    return res;
}

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
    if(!Array.isArray(strings) || typeof(strings[0]) !== "string" ){
        return strings;
    }
    let res = [...strings]

    return mysort(res, (a, b) => { if (a.length != b.length){
            return a.length - b.length;
        }
        else {
            return a.localeCompare(b);
        }
    })
}
