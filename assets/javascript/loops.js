console.log("loops.js")

for (let loop = 0; loop <= 100; loop++){
    console.log(loop)
}

for (let loop = 0; loop <= 100; loop+=2){
    console.log(loop)
}

for (let loop = 100; loop >= 0; loop--){
    console.log(loop)
}

for (let num = 0; num <= 50; num++){
    if (num % 2 !== 0 && num % 5 === 0){
        console.log(num);
    }   
}


let total = 0;
for (let i = 0; i <= 10; i++){
    total += 3;
}
console.log(total)

let wTotal = 0;
let i = 0;
while (i <= 10){
    i++;
    wTotal += 3;
}
console.log(total)


for (let num = 0; num <= 100; num++){
    if (num === 0){
        console.log(num);
    } else if (num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz")
    } else if (num % 3 === 0){
        console.log("Fizz");
    } else if (num % 5 === 0)
        console.log("Buzz");
    else 
        console.log(num)
}