export interface Person {
    firstName: string;
    lastName: string;
}

export class Student implements Person {
    firstName: string;
    lastName: string;
    middleInitial: string;
    fullName: string;

    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// Example for using the 'public' keyword on constructor arguments
export class Student2 implements Person {
    fullName: string;
    
    // The use of 'public' on arguments to the constructor 
    // is a shorthand for automatically creating properties with that name
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

export function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user1 = new Student("Jane", "M.", "User");
const user2 = new Student2("Sam", "F.", "Johnson");

console.log(greeter(user1));
console.log(greeter(user2));

export default greeter;