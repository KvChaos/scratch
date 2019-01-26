// Examples from the Article:
// https://medium.com/@alex.permyakov/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f
// January 26, 2019



let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('oli'));
console.log(`res:  ${res}`);

res = users.filter(it => it.name.includes('liv'));
console.log(`res:  ${JSON.stringify(res)}`);


let INIT_VALUE = {};

let groupByAge = users.reduce((acc, it) =>
    ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
    INIT_VALUE);

console.log(`res:  ${JSON.stringify(groupByAge)}`);

// groupByAge is {23: 1, 28: 2, 34: 1}

// Create a lookup table by a single value from the objects in an array; whole data set is turned into an object whose values are the value you select.
let uTable = users.reduce((acc, it) => ({ ...acc, [it.id]: it }), {})
console.log(`uTable:  ${JSON.stringify(uTable)}`);

// Extract the unique values for the given key of each item in the array
let listOfUserGroups = [...new Set(users.map(it => it.group))];
console.log(`listOfUserGroups:  ${JSON.stringify(listOfUserGroups)}`);

// Object key-value map reversal
let cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
};

let countries = Object.keys(cities).reduce((acc, k) => {
    let country = cities[k];
    acc[country] = [...(acc[country] || []), k];
    return acc;
}, {});


// countries is
// {
//   France: ["Lyon", "Paris"],
//   Germany: ["Berlin"]
// }

console.log(`countries:  ${JSON.stringify(countries,null,4)}`);



// Create an array of Fahrenheit values from an array of Celsius values
// Think of it as processing each element with a given formula

let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);
console.log(`fahrenheit:  ${JSON.stringify(fahrenheit)}`);



// Union of Arrays
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let unionResult = [...new Set([...arrA, ...arrB])]; 
console.log(`unionResult:  ${JSON.stringify(unionResult)}`);


// Intersection of Arrays
arrA = [1, 4, 3, 2];
arrB = [5, 2, 6, 7, 1];
let intersectionResult = arrA.filter(it => arrB.includes(it));
console.log(`intersectionResult:  ${JSON.stringify(intersectionResult)}`);
