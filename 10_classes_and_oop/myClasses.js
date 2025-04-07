// ✅ ES6 class-based approach
class User {
    constructor(username, email, password){
        this.username = username; // instance property
        this.email = email;
        this.password = password;
    }

    // Method added to User.prototype
    encryptPassword(){
        return `${this.password}abc`
    }

    // Another prototype method
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword()); // 123abc
console.log(chai.changeUsername());  // CHAI


// ✅ Behind the scenes — prototype-based approach
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

// Methods added to the prototype so they are shared across instances
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword()); // 123abc
console.log(tea.changeUsername());  // TEA
