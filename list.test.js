var utils  = require('course-utilities');
var users = utils.load('./users.js', 'users');
var join  = utils.load('./list.js', 'join');
console.log(users);

test('outputs the correct string', () => {
    expect(join(users)).toBe('abel,john,bruce');
});

