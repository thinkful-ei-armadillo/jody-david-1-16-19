/* eslint-disable no-unused-vars */
'use strict';
// eslint-disable-next-line no-debugger
debugger;

// function createMyObject(){
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function(){
//       return 'hello';
//     }
//   };
// }

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentsReport(data) {
  return data.map(element => `${element.name}: ${element.grade}`);
}

function enrollInSummerSchool(students) {
  return students.map(element => {
    return {
      name: element.name,
      status: 'In Summer school',
      course: element.course
    };
  });
}

function findById(items, idNum) {
  return items.find(element => element.id === idNum);
}

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  } 
  for(let i = 0; i <expectedKeys.length; i++) {
    if (!Object.keys(object).find(element => element === expectedKeys[i]))
      return false;
  }
  return true;
}

let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;
  }
};

let bingo = {
  foo:'only',
  bar:'smart',
  fum: 'people',
  quux: 'know',
  spam: 'this'
};
// for (let key in bingo) {
//   console.log(`${key}: ${bingo[key]}`);
// }

let ourObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(`Pippin likes ${ourObj.meals[3]} best!`);

const ourData = [
  {
    name: 'Jody',
    jobTitle: 'Developer',
    boss: 'Meriadoc'
  },
  {
    name: 'David',
    jobTitle: 'Astronaut',
    boss: 'Meriadoc'
  },
  {
    name: 'Pippen',
    jobTitle: 'Cook',
    boss: 'Meriadoc'
  },
  {
    name: 'Meriadoc',
    jobTitle: 'Clumsy'
  },
];

// ourData.forEach(element => {
//   if (Object.keys(element).find(item => item === 'boss')){
//     console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`);
//   } else{
//     console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`);
//   }
// });


let cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
function decode(message) {
  let messageArray = message.split(' ');
  let messageMap = messageArray.map(x => decoder(x));
  let result = messageMap.join('');
  return result;
}
function decoder(word) {
  if (word[0] in cipher) {
    return word[cipher[word[0]]];
  } else {
    return ' ';
  }
}

// console.log(decode('craft block argon meter bells brown croon droop'));

function createCharacter(charArray){
  return {
    name: charArray[0],
    nickname: charArray[1],
    race: charArray[2],
    origin: charArray[3],
    attack: charArray[4],
    defense: charArray[5],
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function(character){
      let damageTaken = calcDamage(character.attack, this.defense);
      let damageDealt = calcDamage(this.attack, character.defense);
      return `Your opponent takes ${damageDealt} damage and you receive ${damageTaken} damage.`;
    }
  };
  function calcDamage(attack, defense) {
    return defense > attack ? 0 : attack - defense;
  }
}

let hobbitCharacters = [
  ['Gandalf the White', 'gandalf', 'Wizard', 'Middle-Earth', 10, 6],
  ['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1],
  ['Frodo Baggins', 'frodo', 'Hobbit', 'The Shrine', 3, 2],
  ['Aragorn son of Arathon', 'aragorn', 'Man', 'Dunnedain', 6, 8],
  ['Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5],
  ['Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 10, 10]
];

let characters = [
  createCharacter(hobbitCharacters[0]),
  createCharacter(hobbitCharacters[1]),
  createCharacter(hobbitCharacters[2]),
  createCharacter(hobbitCharacters[3]),
  createCharacter(hobbitCharacters[4]),
  createCharacter(hobbitCharacters[5]),
];
characters.find(item => item.nickname === 'aragorn').describe();

let hobbitArray = hobbitCharacters.filter(item => item.race === 'hobbit');

let bigAttack = hobbitCharacters.filter(item => item.attack > 5);

console.log(characters[2].evaluateFight(characters[5]));

