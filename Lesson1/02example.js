const cars = ["Ferrari", "Lamborgini", "Audi"];

//console.log(cars[0]); // Prints Ferrari

cars[3] = "Mazda"; // Adds Mazda to the array 
//console.log(cars[3]); // Prints Mazda


cars.push("Nissan"); // Adds Nissan 
//console.log(cars[4]); // Prints Nissan

for(let key in cars) {
    console.log(key+" "+cars[key])
}


const luckyNumbers = [7, 13, 3, 21, 42];

// console.log(luckyNumbers[0]);
// for(let key in luckyNumbers) {
//     console.log(luckyNumbers[key])
// }
// for (let i = 0; i < luckyNumbers.length; i++) {