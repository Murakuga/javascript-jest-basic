/**
 * 与えられた文字列を反対にする
 * @param {string} inputString 文字列
 * @returns {string} 反対になった文字列
 */
function reverse(inputString) {
    return inputString.split("").reverse().join("");
}


module.exports = reverse;
