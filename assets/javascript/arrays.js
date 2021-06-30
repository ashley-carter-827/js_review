console.log("arrays.js")

const carMakes = ["Honda", "Toyota", "Mazda"];

carMakes.push("Mercedes");
carMakes.unshift("BMW");

console.log(carMakes);
console.log(carMakes[2]);

const newCarMakes = carMakes.slice(0, 3);
console.log(newCarMakes);

const ericInfo = ["Eric", "Senior Instructor", "Florida"];

const first = ericInfo.shift();
console.log(ericInfo);
ericInfo[1] = "South Carolina";
console.log(ericInfo);
ericInfo.push("Schwartz");
console.log(ericInfo);

const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];

console.log(fruits1[0]);
console.log(fruits2[2][1]);
console.log(fruits3[1][1][1][0]);

const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]

let arrayLength = studentsArray.length;
for (let i = 0; i < arrayLength; i++){
    console.log(studentsArray[i]); 
}

let j = 0;
while (j < arrayLength){
    console.log(studentsArray[j]);
    j++;
}

studentsArray.forEach((k) => {
    console.log(studentsArray.indexOf(k)+ ": " + (k));
});

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numbersSquaredArray = [];
for (let n = 0; n < numbersArray.length; n++){
    numbersSquaredArray.push(numbersArray[n]*numbersArray[n]);
};

console.log(numbersSquaredArray);
 
let arraySum = 0;
for (let s = 0; s < numbersSquaredArray.length; s++){
    arraySum = arraySum + numbersSquaredArray[s]; 
    console.log(arraySum); 
}

const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];

const found = starWarsCharactersArray.find(function(item){
    return item === 'Luke Skywalker';
});
console.log(starWarsCharactersArray.indexOf(found));