let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 11000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2");
        reject(new Error("Error from Promise 2"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});

p1.then((value) => {
    console.log(value)
})

p2.catch((error) => {
    console.error(error.message);
});

p3.then((value) => {
    console.log(value)
})

// Promise.all([p1, p2, p3])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });

// Promise.allSettled([p1, p2, p3])
//     .then((results) => {
//         console.log(results);
//     });

// Promise.race([p1, p2, p3])
//     .then((firstResult) => {
//         console.log(firstResult);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });

// Promise.resolve(6)
//     .then((value) => {
//         console.log(value);
//     });

// Promise.reject(new Error("Hey"))
//     .catch((error) => {
//         console.error(error.message);
//     });
