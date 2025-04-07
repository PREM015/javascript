// Define a class User
class User {
    // Constructor to initialize email and password
    constructor(email, password){
        // These will invoke the setters defined below
        this.email = email;
        this.password = password;
    }

    // Getter for email - returns email in uppercase
    get email(){
        return this._email.toUpperCase(); // _email is used internally
    }

    // Setter for email - sets internal _email value
    set email(value){
        this._email = value;
    }

    // Getter for password - adds "hitesh" to the stored password
    get password(){
        return `${this._password}hitesh`;
    }

    // Setter for password - sets internal _password
    set password(value){
        this._password = value;
    }
}

// Create a new User instance
const hitesh = new User("h@hitesh.ai", "abc");

// Logs the uppercase version of email
console.log(hitesh.email);  // Output: H@HITESH.AI
