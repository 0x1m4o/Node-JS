// Create a custom Modules

// DateTime
const dateTime = function () {
    return Date();
};  

// Fake API Data
const peoples = [
    { name: 'yoshi', age: 20 },
    { name: 'ryu', age: 25 },
    { name: 'chun-li', age: 30 },
    { name: 'mario', age: 35 },
];


module.exports = {
    dateTime,
    peoples
}