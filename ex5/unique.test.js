const {count,dict} = require('./unique');

test('<テストで確かめること>', () => {
    expect(count(1, 1, 2, 3)).toEqual([1, 2, 3])
});

test('<テストで確かめること>', () => {
    expect(dict(1, 1, 2, 3)).toEqual({"1":2, "2":1, "3":1})
});
