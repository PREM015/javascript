// ================= Dates ==================

// Creating a new Date object for the current date and time
let myDate = new Date();
console.log(myDate.toString());  // Displays the current date and time in string format

// Display the date in various formats
console.log(myDate.toDateString());    // Example Output: "Tue Mar 25 2025"
console.log(myDate.toLocaleString());  // Example Output: "3/25/2025, 2:15:30 PM"
console.log(typeof myDate);            // Output: object (Date objects are of type object)

// ================= Custom Dates ==================

// Creating a custom date
// Year, Month (0-based), Date
let myCreatedDate = new Date(2023, 0, 23);  // Jan 23, 2023
console.log(myCreatedDate.toLocaleString());  // Output: "1/23/2023, 12:00:00 AM"

// Custom date with time
let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3);  // Jan 23, 2023 at 5:03 AM
console.log(myCreatedDateWithTime.toLocaleString());  // Output: "1/23/2023, 5:03:00 AM"

// Creating a date using a string format
let myCreatedDateString = new Date("2023-01-14");  // January 14, 2023
console.log(myCreatedDateString.toLocaleString());  // Output: "1/14/2023, 12:00:00 AM"

// Another string format for creating a date
let myCreatedDateUSFormat = new Date("01-14-2023");  // MM-DD-YYYY format
console.log(myCreatedDateUSFormat.toLocaleString());  // Output: "1/14/2023, 12:00:00 AM"

// ================= Timestamps ==================

// Current timestamp (milliseconds since 1 Jan 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp);  // Example Output: 1711234567890

// Getting the timestamp from a specific date
console.log(myCreatedDate.getTime());  // Converts the given date to a timestamp

// Converting timestamp to seconds (by dividing by 1000)
console.log(Math.floor(Date.now() / 1000));  // Example Output: 1711234567

// ================= Date Information ==================

// Getting the current date details
let newDate = new Date();
console.log(newDate);  // Displays full date details

// Getting the month (Note: Months are 0-based, so January = 0)
console.log(newDate.getMonth() + 1);  // Adding 1 for correct month display

// Getting the day of the week (0 = Sunday, 1 = Monday, etc.)
console.log(newDate.getDay());  // Example Output: 2 (Tuesday)

// ================= String Formatting ==================

// Using `toLocaleString` for more customized output
console.log(newDate.toLocaleString('default', {
    weekday: "long",  // Outputs the full name of the weekday
}));
