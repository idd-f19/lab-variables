// String is a serie of characters
console.log(`hello world`);

// Number is a number
console.log(3 + 5);   // add
console.log(3 - 5);   // subtract
console.log(3 * 5);   // multiply
console.log(3 / 5);   // divide
console.log(3 % 5);   // modulus
console.log(3 ** 5);  // exponent/power

// Declaring variables, giving them starting values
let customerName = `George`;

let bitCoin = 8;
console.log(`Hi ${customerName}, your balance is: 💰 ${bitCoin}`);

bitCoin = bitCoin + 4; 
console.log(`Hi ${customerName}, your balance is: 💰 ${bitCoin}`);

bitCoin = bitCoin - 1;
console.log(`Hi ${customerName}, your balance is: 💰 ${bitCoin}`);


// Variables can be defined with keywords: var, let, const

// Variable naming rules: 
//  - Don't use special chars ( _ and $ are possible though )
//  - Can not start with a number
//  - Use camelCasedWords to show separation (uppercase first letters)
//  - Do not capitalize the first letter of the variable name
//  - Make it clear and obvious what's being stored

let geoLocation = ``; // ✅ Camel cased, easy to read, no conflicts
let location = ``;    // 🚫 Will conflict with the browser's url bar
let lctn = ``;        // ❎ Not bad, but not super clear either
let l = ``;           // 🚫 Terrible. Far too short and non-descript