// // ----------------- using exports ----------------- 
// var join = require('./list');
// var users = require('./users');

// console.log(join(users));

// test('outputs the correct string', () => {
//     expect(join(users)).toBe('abel,john,bruce');
// });

// ----------------- using eval ----------------- 
// load files
var fs   = require("fs");
var listCode = fs.readFileSync('./list.js', 'utf8');
var usersCode = fs.readFileSync('./users.js', 'utf8');

// evaluate code in js file
eval(listCode);
eval(usersCode);

test('outputs the correct string', () => {
  expect(join(users)).toBe('abel,john,bruce');
});


