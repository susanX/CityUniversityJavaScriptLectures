// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const determineOdd = numbers.filter(function(number){
//     // return number%2;
//     return number % 2 !== 1;
// })

// //console.log(odd)
// const odd = numbers.filter(determineOdd)
// // How can we get the event numbers?

// console.log(odd);

// const strings = Array.filter(value => typeof value === 'string');
// console.log(strings);

function isNumber(value) {
    return typeof value === 'number';
}

isNumber('test'); // false
isNumber(5); // true

//