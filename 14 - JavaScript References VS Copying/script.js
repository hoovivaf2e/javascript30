// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);

// array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;
console.log(players, team);

// team[3] = 'Lux';
// console.log(players, team);

const team2 = players.slice();
team2[3] = 'Lux';
console.log('team2 '+ players, team2);

const team3 = [].concat(players);
team3[3] = 'Lux';
console.log('team3 ' +players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log('team4 '+ players, team4);

const team5 = Array.from(players);
team5[3] = 'Lux5';
console.log(players, team5);



// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
}

const captain = person;
captain.number = 99;
console.log('Objects1  '+ JSON.stringify(person), captain)
//{name: "Wes Bos", age: 80, number: 99}


const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log('cap2 '+JSON.stringify(cap2));
// We will hopefully soon see the object ...spread
// const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};
// console.clear();
console.log(JSON.stringify(wes));

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));

dev.name = "wesley";
dev2.name = "wesley";

console.log('dev ' + JSON.stringify(dev));
console.log('dev2 ' + JSON.stringify(dev2));