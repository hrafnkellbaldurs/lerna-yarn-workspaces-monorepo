import { 
    example1, example2, example3, example4, example5,
    Student, Student2
} from './examples/index';

document.body.innerHTML = `
    <div class="example">
        <h4>Example 1</h4>
        <span>${example1('Jane Personsss')}</span>
    </div>
    <div class="example">
        <h4>Example 2</h4>
        <span>${example2('Jane Person')}</span>
    </div>
    <div class="example">
        <h4>Example 3</h4>
        <span>${example3({ firstName: 'Jane', lastName: 'Person' })}</span>
    </div>
    <div class="example">
        <h4>Example 4</h4>
        <span>${example4(new Student("Jane", "M.", "Student"))}</span>
        <span>${example4(new Student2("Jane", "M.", "Student 2"))}</span>
    </div>
    <div class="example">
        <h4>Example 5</h4>
        <span>${example5({ firstName: 'Jane', lastName: 'Person' })}</span>
        <span>${example5('{ "firstName": "Example", "lastName": "Person" }')}</span>
    </div>
`;