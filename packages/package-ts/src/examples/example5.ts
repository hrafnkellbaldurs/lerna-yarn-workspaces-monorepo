export interface Person {
    firstName: string;
    lastName: string;
}

export function greeter(person: Person): string;
/**
 * @param person - JSON string - must be valid json 
 */
export function greeter(person: string): string;

export function greeter(person: any): string {
    if (typeof person === 'string') {
        return greeter(JSON.parse(person));
    };

    return 'Hello, ' + person.firstName + " " + person.lastName;
}

export default greeter;