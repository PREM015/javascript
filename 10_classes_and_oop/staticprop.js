// Parent class: User
class User {
    constructor(username){
        this.username = username;
    }

    // Instance method (accessible by object instances)
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // Static method (accessible only by class, not instances)
    static createId(){
        return `123`;
    }
}

// Creating instance of User
const hitesh = new User("hitesh");
// hitesh.createId(); ❌ This would throw an error because it's a static method

// Subclass: Teacher extends User
class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

// Creating instance of Teacher
const iphone = new Teacher("iphone", "i@phone.com");

// console.log(iphone.createId()); ❌ Will throw an error
console.log(Teacher.createId()); // ✅ This works
console.log(User.createId());    // ✅ Also works
