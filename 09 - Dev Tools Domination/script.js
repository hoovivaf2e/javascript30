const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated text
console.log('Hello I am a %s!', 'good man');
// Number
console.log('I am %d years old!', 7);
// Float
console.log('This has %f kg!', 2.5);
// Styled
console.log('%c I am some great sample', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// Opening DOM Elements
console.log('%o',document.body); 
console.log('%O', document.body);


// warning!
console.warn('Warning');

// Error :|
console.error('Error!');

// Info
console.info('Crocodiles eat 3-4 cows per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'There is no "ouch" class!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
console.table(dogs);


