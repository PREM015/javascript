// Constructor Function to create User objects
function User(email, password) {
    // Store email and password internally using private convention (_ prefix)
    this._email = email;
    this._password = password;

    // Define a custom getter and setter for `email` property
    Object.defineProperty(this, 'email', {
        // Getter: returns the email in uppercase
        get: function () {
            return this._email.toUpperCase();
        },
        // Setter: updates the _email value
        set: function (value) {
            this._email = value;
        }
    });

    // Define a custom getter and setter for `password` property
    Object.defineProperty(this, 'password', {
        // Getter: returns the password in uppercase
        get: function () {
            return this._password.toUpperCase();
        },
        // Setter: updates the _password value
        set: function (value) {
            this._password = value;
        }
    });
}

// Create an instance of User
const chai = new User("chai@chai.com", "chai");

// Access the custom getter for `email`
console.log(chai.email);  // Output: CHAI@CHAI.COM

// You can test the setter too:
// chai.email = "new@chai.com"
// console.log(chai.email);  // Output: NEW@CHAI.COM
