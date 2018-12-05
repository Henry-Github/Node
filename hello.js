'use strict';


function sayHello(name) {
    let prefix = 'Hello';
    console.log(prefix + ',' + name + '!')
}

function sayHi(name) {
    let prefix = 'Hi';
    console.log(prefix + ',' + name + '!')
}

module.exports = {
    sayHello: sayHello,
    sayHi: sayHi,

};