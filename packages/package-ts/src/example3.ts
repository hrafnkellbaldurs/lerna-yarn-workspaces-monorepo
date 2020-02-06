export interface Person {
    firstName: string;
    lastName: string;
}

export function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));

export default greeter;