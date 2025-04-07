// ===============================
//             forEach METHOD
// ===============================

// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach doesn't return a new array, it just iterates
const values = coding.forEach((item) => {
    // console.log(item);  // Prints each item in the array
    return item            // Return statement doesn't affect forEach
})

// console.log(values);  // Undefined because forEach doesn't return a new array

// ===============================
//             FILTER METHOD
// ===============================

// Array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using 'filter' to return numbers greater than 4
const newNums = myNums.filter((num) => {
    return num > 4        // Filter returns a new array with matching elements
})

// Alternative method using forEach (less optimal for this case)
const newNumsAlt = []
myNums.forEach((num) => {
    if (num > 4) {          // Manually pushing elements that match the condition
        newNumsAlt.push(num)
    }
})

// console.log(newNums);     // Outputs: [5, 6, 7, 8, 9, 10]
// console.log(newNumsAlt);  // Outputs: [5, 6, 7, 8, 9, 10]

// ===============================
//             BOOK FILTERING
// ===============================

// Array of book objects
const books = 
[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books of genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History')

// Filtering 'History' books published after 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);  // Displays the filtered books
