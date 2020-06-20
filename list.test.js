var load  = require('./load');
var users = load('./users.js', 'users');
var join  = load('./list.js', 'join');
console.log(users);

test('outputs the correct string', () => {
    expect(join(users)).toBe('abel,john,bruce');
});

