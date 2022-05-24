/**
 * 同じ長さの2つの配列から、交互に要素を取り、1つの配列にする
 * 
 * @param {any[]} arrayA 配列A
 * @param {any[]} arrayB 配列B
 * @returns any[] 交互に要素を取り結合した配列
 */
function concat(arrayA, arrayB) {
    let arrayC = [];
    for(let i=0; i < arrayA.length; i++){
        arrayC.push(arrayA[i],arrayB[i]);
    }
    return arrayC
}

module.exports = concat;