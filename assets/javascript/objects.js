console.log("objects.js");


const person = {
    name: 'Ashley',
    age: 31,
    color: 'pink',
    sayHello: function (){
        message = "Hello, my name is " + this.name + ". I am " + this.age + " years old and my favorite color is " + this.color + "."
        console.log(message);
    }
};

console.log("Hello, my name is " + person.name + ". I am " + person.age + " years old and my favorite color is " + person.color + ".");


person.sayHello();


let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrade: function (){
        let total = 0;
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }
        avg = total/this.grades.length;
        console.log(avg);
    },
    printDetails: function (){
        messageBob = "Hello, my name is " + this.name + " and I am a student. I am " + this.age + " years old and my major is " + this.major + ". My current average grade is " + avg +"."
        console.log(messageBob);
    }
}
studentBob.averageGrade();
studentBob.printDetails();

const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

for (let i of charactersArray) {
    console.log((i.name).toUpperCase());
}

filteredCharactersArray = charactersArray.filter(character => character.mass > 80);

console.log(filteredCharactersArray);

let characterNames = charactersArray.map(({ name }) => name);
console.log(characterNames);

const blue = (character) => character.eye_color = "blue";
blueEyes = charactersArray.some(blue);
    
if (blueEyes = true){
    console.log("Some characters have blue eyes")
} else {
    console.log("No characters have blue eyes")
    };

const isMale = (character) => character.gender = 'male';
allMales = charactersArray.every(isMale);
if (allMales = true){
    console.log("All the characters are male")
};

totalMass = Object.values(charactersArray).reduce((t, {mass})=> parseInt(t) + parseInt(mass), 0);
console.log(totalMass);

let tagFavorite = function (array, myFavoriteCharacter){
    for(let u=0; u<array.length; u++){
        if (array[u].name === myFavoriteCharacter) {
            array[u].favoriteCharacter = true;
        } else {
            array[u].favoriteCharacter = false;
    }
}}

tagFavorite(charactersArray, "Luke Skywalker");
console.log(charactersArray);