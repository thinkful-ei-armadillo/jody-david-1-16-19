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

console.log(`Pippin likes ${ourObj.meals[3]} best!`);

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

ourData.forEach(element => {
  if (Object.keys(element).find(item => item === 'boss')){
    console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`);
  } else{
    console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`);
  }
});

