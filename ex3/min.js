/**
 * 与えられた数列から最も小さな数字を取得
 * @param  {...number} args 数列
 * @returns {number} 最も小さな数字
 */
function min(...args) {
    return Math.min(...args);    
}

module.exports = min;