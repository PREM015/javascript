// Creating a Promise that resolves after an async task (e.g., DB call or API call)
const promiseOne = new Promise(function(resolve, reject) {
    // Simulating async task with setTimeout
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // Marking promise as resolved
    }, 1000);
});

// Handling the resolution of promiseOne
promiseOne.then(function() {
    console.log("Promise consumed");
});

// Creating another promise (shorter style, without storing in a variable)
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve(); // Resolving this second promise
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

// Creating a third promise that resolves with a user object
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

// Handling data from promiseThree
promiseThree.then(function(user) {
    console.log(user); // Logs the user object
});

// A fourth promise that can resolve or reject based on an error flag
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Toggle this to `false` to see resolve path
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

// Handling promiseFour with chained `.then()` and `.catch()`
promiseFour
    .then((user) => {
        console.log(user);         // Logs user object if resolved
        return user.username;      // Returns username to next then
    })
    .then((username) => {
        console.log(username);     // Logs username
    })
    .catch(function(error) {
        console.log(error);        // Logs error if promise rejected
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// A fifth promise wrapped inside an async function using async/await
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Toggle this to `false` to test resolve
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

// Async function to consume promiseFive using try-catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Wait for the promise to settle
        console.log(response);              // If resolved, log data
    } catch (error) {
        console.log(error);                // If rejected, catch and log error
    }
}
consumePromiseFive();

// Example using fetch API to get data from an external API
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json();           // Convert response to JSON
    })
    .then((data) => {
        console.log(data);                // Log user data
    })
    .catch((error) => console.log(error)); // Handle fetch errors

// Note: You can also use Promise.all to run multiple promises together
// Example: Promise.all([promise1, promise2]).then([...]).catch(...)
