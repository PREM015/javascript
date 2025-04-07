// Base class User
class User {
    constructor(username){
        this.username = username;  // Set username property
    }

    // Method available to all User instances
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Derived class Teacher inherits from User
class Teacher extends User {
    constructor(username, email, password){
        super(username);             // Call parent constructor to set username
        this.email = email;          // Set email
        this.password = password;    // Set password
    }

    // Teacher-specific method
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create an instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe(); // Output: USERNAME is chai

// Create an instance of User
const masalaChai = new User("masalaChai");
masalaChai.logMe(); // Output: USERNAME is masalaChai

// Check inheritance using instanceof
console.log(chai instanceof User); // true (since Teacher extends User)
