//const prices = [10, 20, 30, 50];

// const pricesWithVAT = prices.map(function(price){
//     return price*0.2 + price
// })

// console.log(pricesWithVAT)

// const pricesWithVAT = prices.map(caluclateVAT)

// const students = [ "John", "Peter", "James"];
// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper); 
// function upperCase(name){
//     return name.toUpperCase();
// }

const cars = ["Ferrari", "Lamborgini", "Audi", "BMW", "Mercedes", "Volvo", "Toyota"];
const towns = ["London", "Manchester", "Birmingham"];
towns[3] = "Mazda"; // Adds Mazda to the array
towns.push("Nissan"); // Adds Nissan
console.log(cars); // Prints Nissan
console.log(towns); // Prints Nissan

for(let key in cars) {
    console.log(towns[key])
}


