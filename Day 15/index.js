function outer(){
    let a=5;
    function inner(){
        console.log(a);
    }
    return inner
}

let ans=outer()
ans()

//Practical Closure
function createUniqueIdGenerator() {
    let lastId = 0;

    return function() {
        lastId += 1;
        return `id-${lastId}`;
    };
}
const generateId = createUniqueIdGenerator();

console.log(generateId()); // "id-1"
console.log(generateId()); // "id-2"
console.log(generateId()); // "id-3"

function outerGreet(name){
    return function greet(){
        console.log(`hey ${name}`);
    }
}
outerGreet("Prakhar")()


function createLogFunctions(count) {
    const functions = [];

    for (let i = 0; i < count; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const logFunctions = createLogFunctions(5);

logFunctions.forEach(fn => fn());

function createItemManager() {
    const items = new Set();

    return {
        addItem(item) {
            items.add(item);
            console.log(`${item} added.`);
        },
        removeItem(item) {
            if (items.has(item)) {
                items.delete(item);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems() {
            console.log("Items:", Array.from(items));
        }
    };
}

// Example usage
const itemManager = createItemManager();

itemManager.addItem('Apple');    
itemManager.addItem('Banana');   
itemManager.listItems();
itemManager.removeItem('Apple'); 
itemManager.listItems();

function memoize(fn) {
    // Create an object to store cached results
    const cache = new Map();

    return function(...args) {
        // Create a key from the arguments
        const key = JSON.stringify(args);

        // Check if the result is already cached
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Call the original function and cache the result
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Factorial function
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); //here we will get the cached result
console.log(memoizedFactorial(6)); 
