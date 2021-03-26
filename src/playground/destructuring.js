//
// Object Destructuring
//

const person = {
    name: 'Chris',
    age: 34,
    location: {
        place: 'DC',
        temp: 26
    }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);


const { place, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
};

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name : publisherName = 'Self-Published' } = book.publisher

console.log(publisherName);

//
// Array Destructuring
//

const address = ['1920 14th St NW', 'Washington', 'DC', '20009'];
const [, city, state = 'New York' ] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [ itemType, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${itemType} costs ${mediumPrice}.`)