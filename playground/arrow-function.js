// var square = x => x * x;

// console.log(square(2048));

var user = {
    name: 'Clint',
    sayHi: () => {
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};
// user.sayHi();
user.sayHiAlt(1, 2, 3);
