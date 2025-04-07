const User = {
    // Internal properties (conventionally prefixed with _ to indicate private-like usage)
    _email: 'h@hc.com',
    _password: "abc",

    // Getter for email - will return the email in uppercase
    get email(){
        return this._email.toUpperCase()
    },

    // Setter for email - sets the internal _email property
    set email(value){
        this._email = value
    }
}

// Create a new object `tea` that inherits from `User`
const tea = Object.create(User)

// Access the email using the getter (inherited from User)
console.log(tea.email); // Output: H@HC.COM
