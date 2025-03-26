// Immediately Invoked Function Expressions (IIFE)

// Named IIFE (Immediately Invoked Function Expression)
(function chai() 
{
    // This function is defined and immediately called
    console.log(`DB CONNECTED`); // Logs 'DB CONNECTED' to the console
})
(); // The '()' at the end immediately invokes the function



// Anonymous IIFE with parameter
((name) => 
    {
    // This function accepts a parameter and is immediately called
    console.log(`DB CONNECTED TWO ${name}`); // Logs 'DB CONNECTED TWO hitesh' to the console
})("hitesh"); // 'hitesh' is passed as an argument
