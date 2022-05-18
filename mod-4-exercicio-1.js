"use strict";
const users = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(logPerson);
