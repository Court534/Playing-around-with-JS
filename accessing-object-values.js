const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.name); // <-- This prints Maxine
console.log(person.age); // <-- This prints 32
console.log(person.address); // <-- This prints { city: 'London', postcode: 'E1 123' }
console.log(person.hobbies); // <-- This prints [ 'writing', 'tennis', 'cooking' ]
console.log(person.address.city); // <-- This prints London
console.log(person.hobbies[1]); // <-- This prints tennis