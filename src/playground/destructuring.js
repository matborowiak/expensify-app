const person = {
    name: 'Mateusz',
    age: 29,
    location: {
        city: 'Berlin',
        temp: 34    
    }
}

const {name = 'Anonymous', age} = person

console.log(`${name} is ${age}.`)

const { city, temp: temperature } = person.location

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)