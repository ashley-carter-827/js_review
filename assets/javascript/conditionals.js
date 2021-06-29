console.log("conditionals.js")

let x = 50;
let y = 100;

if (x > y){
    message = 'Hello World';
} 
else {
    message = 'Goodbye World';
}
console.log(message)


let newMessage = (name) ? console.log(`Hello, ${name}!`): console.log("Hello, person!");


let soldOut = true;
let onSale = true;
soldOut = !soldOut;
if (!soldOut && onSale){
    thisMessage = "I got tickets!";
}else{
    thisMessage = "I did not get tickets!";
}

console.log(thisMessage );




