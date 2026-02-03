//const array = [1, 3, 'john', 5, 'test']

// Use filter to get strings 


// Use filter to get the numbers 
const prices = [10, 20, 30, 50, 55, 100];

const pricesWithVAT = prices.map(function(price){
    if (typeof price === 'number') {
        //return price * 0.2+ price; // Add 20% VAT
        return price * 1.2; // Add 20% VAT
    }
    return pricesWithVAT; // Return string values unchanged//
})


console.log("prices unchanged: "+prices); // [ 10, 20, 30, 50, 55, 100 ]
//[ 22, '20', 66, '50' ]

console.log('pricesWithVAT:    '+pricesWithVAT);
//[ 22, '20', 66, '50', 121, '100];
console.log('pricesWithVAT:    '+pricesWithVAT[0]);
 
