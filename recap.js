/*
01. Var, Let, Const
02. Template 
*/

const a = 56;
const numbers = [56, 7, 8];
const person = {
    name  : 'Sakib',
} 
const message = `Hello ${person.name} has ${a} acc ${numbers}`;
console.log(message);

const {age,z,...others} = {x:2, y:5, z:3, name:'ovijeer', age:55}
