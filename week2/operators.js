let x = 20;
let y = 30;
z = x + y;

let a = 10;
let b = 30;
c = a / b;

let d = 25;
let e = 40;
let f = 3;
total = d * (e + f);
// e plus f = 43 times 25

// the modulus will represent the remainder
// military time = 24 hours
// 20 divide by 12 = 8 pm

let military = 23;
normalTime = military % 12;

// we are going to use a for loop
// the loop will display al the hours

for(let militaryTime = 0; militaryTime <= 24; militaryTime++) {
    normalTime2 = militaryTime % 12;
console.log(militaryTime + " military time equals to " +normalTime2+ " 12 hour clock");
}

// (0 Cel * 9/5) + 32 = farenheit

for(let celcius = 0; celcius <= 100; celcius++){
    farenheit = (celcius * 9/5) + 32;
    console.log(celcius + " degrees Celcius equals " + farenheit + " degrees Farenheit")
}

// assignment operators
// price of item plux tax and total

let price = 100;
let tax = .10;
taxTotal = price * tax;
totalWithTax = taxTotal + price;

let price2 = 100;
price2 *= 1.10;
