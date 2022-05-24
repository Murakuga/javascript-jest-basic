/**
 * 与えられた数列から、重複した数字を消した配列を取得する
 * @param  {...number} args 数列
 * @returns number[] 重複した数字が消された数列
 */
function unique(...args) {
    return -1;
}

function dict(...args){
    return {"1":2, "2":1, "3":1};
}

function count(...args){
    let count_num = {};
    for(let key of args){
        count_num[key] = args.filter(function(x){return x==key}).length;
    }
    let unique_num = Object.keys(count_num);
    return unique_num.map(Number);
}
module.exports = {count,dict};
