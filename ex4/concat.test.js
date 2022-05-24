const concat = require('./concat');

test('配列の要素を順番に取り出す', () => {
    const array1 = ['a','c'];
    const array2 = ['b','d']
    expect(concat(array1,array2)).toEqual(['a','b','c','d'])
});
