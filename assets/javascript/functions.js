console.log("functions.js")

function showMessage(hello){
    console.log('Hello World');
}

showMessage();

function countingCharacters(param){
    if (param.length < 10){
        console.log(param.length);
    } else {
        console.log(param + " is too long.")
    }
}

countingCharacters("Hello World");

function difference(x, y){
    if (typeof x !== "number"){
        return ("Input(s) must be a number!");
    } else if (typeof y !== "number"){
        return ("Input(s) must be a number!");
    } else {
        return Math.abs(x-y);
    }
}

console.log(difference("hello", 10));

let ag = function advancedGreeting(x){
    if (typeof x !== "number"){
        return ("Invalid hour input");
    } else if (x < 12){
        return ("Good Morning!");
    } else if (x > 12 && x < 18){
        return ("Good Afternoon!");
    } else if (x > 18 && x < 24){
        return ("Good Night!");
    } else {
        return ("Invalid hour input");
    }
}

console.log(ag(50));

