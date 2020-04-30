const add = function (a, b) {
    return a + b;
};

console.log(add(55 , 1)); 

// const user = {
//     name: 'Jack',
//     cities: ['New York', 'New Jersey', 'New Hampire'],
//     printPlaceLived() { 
//         return this.cities.map((city) => this.name + ' had lived ' + city);
//     }
// };
// console.log(user.printPlaceLived());

const multiplier = {
    numbers: [10, 20 , 30],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) =>
            number * this.multiplyBy);
    }
};

console.log(multiplier.multiply()); 