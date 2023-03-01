/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/

const arrA = ["a", "a", "a"];
const expectedA = {
    a: 3,
};

const arrB = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expectedB = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arrC = [];
const expectedC = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */

function freq(arr){
    let newMap = {};
    for(i=0; i <arr.length; i++){
        if(arr[i] in newMap){
            newMap[arr[i]]++;
        } else {
            newMap[arr[i]]=1;
        }
    }
    return newMap;
}
        



console.log(freq(arrC))

console.log(freq(arrB))